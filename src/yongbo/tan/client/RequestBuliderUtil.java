package yongbo.tan.client;

import org.apache.http.HttpHeaders;
import org.apache.http.client.methods.RequestBuilder;

public class RequestBuliderUtil {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

	public static RequestBuilder fetchCommonRequestBulider(String method) {

		RequestBuilder requestBuilder = RequestBuilder.create(method);

		requestBuilder
				.addHeader(HttpHeaders.USER_AGENT,
						"Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		
		requestBuilder.addHeader(HttpHeaders.ACCEPT, "*/*");
		requestBuilder.addHeader(HttpHeaders.CONNECTION, "keep-alive");
		requestBuilder
				.addHeader(HttpHeaders.CONTENT_TYPE, "*/*; charset=UTF-8");
		requestBuilder.addHeader("X-Requested-With", "XMLHttpRequest");
		requestBuilder.addHeader("DNT", "1");
		requestBuilder.addHeader(HttpHeaders.PRAGMA, "no-cache");
		requestBuilder.addHeader(HttpHeaders.CACHE_CONTROL, "no-cache");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_LANGUAGE,
				"zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate");
		requestBuilder.addHeader(HttpHeaders.HOST, "kyfw.12306.cn");

		return requestBuilder;

	}

	public static void addCommonHeader(RequestBuilder  requestBuilder){

		requestBuilder
				.addHeader(HttpHeaders.USER_AGENT,
						"Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		
		requestBuilder.addHeader(HttpHeaders.ACCEPT, "*/*");
		requestBuilder.addHeader(HttpHeaders.CONNECTION, "keep-alive");
		requestBuilder
				.addHeader(HttpHeaders.CONTENT_TYPE, "*/*; charset=UTF-8");
		requestBuilder.addHeader("X-Requested-With", "XMLHttpRequest");
		requestBuilder.addHeader("DNT", "1");
		requestBuilder.addHeader(HttpHeaders.PRAGMA, "no-cache");
		requestBuilder.addHeader(HttpHeaders.CACHE_CONTROL, "no-cache");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_LANGUAGE,
				"zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate");
		requestBuilder.addHeader(HttpHeaders.HOST, "kyfw.12306.cn");
		return ;
	}
}
