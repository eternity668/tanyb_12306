package yongbo.tan.js;

import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.script.ScriptException;

import org.apache.http.HttpHeaders;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.cookie.Cookie;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;

import yongbo.tan.client.CustomHttpClient;
import yongbo.tan.client.CustomHttpClientContext;
import yongbo.tan.client.RequestBuliderUtil;
import yongbo.tan.signin.DynamicJsFormInput;

public class DynamicJsFetcher {

	private CustomHttpClient customHttpClient;
	
	public DynamicJsFetcher(CustomHttpClient customHttpClient){
		this.customHttpClient=customHttpClient;
	}
	
	public DynamicJsFormInput getDynamicJsInputKeyVal(String dynamicUrl) {

		CloseableHttpClient closeableHttpClient = this.customHttpClient
				.getCustomHttpClient();
		try {
			RequestBuilder request=	RequestBuliderUtil.fetchCommonRequestBulider(HttpGet.METHOD_NAME);
			request.setHeader(HttpHeaders.REFERER, "https://kyfw.12306.cn/otn/leftTicket/init");
			request.setUri(dynamicUrl);
			CloseableHttpResponse closeableHttpResponse = closeableHttpClient
					.execute(request.build(),
							CustomHttpClientContext.getHttpClientContext());
			int status = closeableHttpResponse.getStatusLine().getStatusCode();

			while (status != 200) {
				closeableHttpResponse.close();
				closeableHttpResponse = closeableHttpClient.execute(
						request.build(),
						CustomHttpClientContext.getHttpClientContext());
				status = closeableHttpResponse.getStatusLine().getStatusCode();

			}
			String dynamicJs = EntityUtils.toString(closeableHttpResponse
					.getEntity());
			closeableHttpResponse.close();
			Pattern pattern = Pattern.compile("key='[\\w]+'");
			Matcher matcher = pattern.matcher(dynamicJs);
			String key=null;
			if (matcher.find()) {
				key= matcher.group(0);
				System.err.println(key);
				key = (String) key.subSequence(key.indexOf('\'') + 1, key
						.length() - 1);
				System.err.println(key);
			}
			
			try {
				try {
				String value = Js
							.get12306DynamicSignInInputValue(key);
				DynamicJsFormInput	dynamicJsFormInput=new DynamicJsFormInput(key, value);
				return dynamicJsFormInput;
				} catch (NoSuchMethodException e) {
					System.err.println("ScriptException " + e.getMessage());
				}
			} catch (ScriptException e) {
				System.err.println("ScriptException " + e.getMessage());
			}
			
		} catch (ClientProtocolException e) {
			System.err.println(e.getMessage());
		} catch (IOException e) {
			System.err.println(e.getMessage());
		} finally {
			try {
				closeableHttpClient.close();
			} catch (IOException e) {
				System.err.println(e.getMessage());
			}
		}
      return null;
	}
}
