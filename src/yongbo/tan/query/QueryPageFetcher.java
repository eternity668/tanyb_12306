package yongbo.tan.query;

import org.apache.http.HttpHeaders;
import org.apache.http.StatusLine;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;

import yongbo.tan.client.CustomHttpClient;
import yongbo.tan.client.CustomHttpClientContext;
import yongbo.tan.signin.SignInUrl;

public class QueryPageFetcher {



	private CustomHttpClient customHttpClient;
	
	
	public QueryPageFetcher(CustomHttpClient customHttpClient){
		this.customHttpClient=customHttpClient;
	}
	
	
	public String gotoQueryViewPage() throws Exception{
		
		RequestBuilder requestBuilder = RequestBuilder.get();
		requestBuilder
				.addHeader(HttpHeaders.USER_AGENT,
						"Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addHeader(HttpHeaders.REFERER, SignInUrl.signInSuccessAfterUrl);
		requestBuilder.setUri(QueryUrl.queryViewPageUrlAndRefer);
		HttpUriRequest httpUriRequest = requestBuilder.build();
		CloseableHttpClient closeableHttpClient = customHttpClient
				.getCustomHttpClient();
		CloseableHttpResponse closeableHttpResponse;
	 
			closeableHttpResponse = closeableHttpClient
					.execute(httpUriRequest, CustomHttpClientContext
							.getHttpClientContext());
		StatusLine statusLine = closeableHttpResponse.getStatusLine();
		while(statusLine.getStatusCode()!=200){
			closeableHttpResponse.close();
			closeableHttpResponse = closeableHttpClient
			.execute(httpUriRequest, CustomHttpClientContext
					.getHttpClientContext());
			 statusLine = closeableHttpResponse.getStatusLine();
		}
    	String content=	EntityUtils.toString(closeableHttpResponse.getEntity(),"UTF-8");
//    	System.out.println(content);
		closeableHttpClient.close();
	   return content;
		
	}
	
	

	
	
}
