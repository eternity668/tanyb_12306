package yongbo.tan.signin;

import org.apache.http.HttpHeaders;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;

public class SignInRequestBulider {

	private SignInFormInfo signInFormInfo;

	private SignInUrl signInUrl;

	public SignInRequestBulider(SignInFormInfo signInFormInfo,
			SignInUrl signInUrl) {
		super();
		this.signInFormInfo = signInFormInfo;
		this.signInUrl = signInUrl;
	}

	public void setSignInFormInfo(SignInFormInfo signInFormInfo) {
		this.signInFormInfo = signInFormInfo;
	}

	public void setSignInUrl(SignInUrl signInUrl) {
		this.signInUrl = signInUrl;
	}

	public HttpUriRequest getSubmitHttpUriRequest() {
		RequestBuilder requestBuilder = RequestBuilder.post();
		requestBuilder.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addParameter(signInFormInfo.getUserNameKey(),
				signInFormInfo.getUserNameValue());
		requestBuilder.addParameter(signInFormInfo.getPasswordKey(),
				signInFormInfo.getPasswordValue());
		requestBuilder.addParameter(signInFormInfo.getValidCodeKey(),
				signInFormInfo.getVaildCodeValue());
		requestBuilder.setUri(SignInUrl.signInSubmitUrl);
		return requestBuilder.build();
	}

	public HttpUriRequest getSignInHttpUriRequest() {
		RequestBuilder requestBuilder = RequestBuilder.get();
		requestBuilder.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addHeader("Connection", "keep-alive");
		requestBuilder.setUri(SignInUrl.signInUrl);
		return requestBuilder.build();
	}

	public HttpUriRequest getInit12306UrlRequest(String url) {
		RequestBuilder requestBuilder = RequestBuilder.get();
		requestBuilder.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addHeader("Connection", "keep-alive");
		requestBuilder.setUri(url);
		return requestBuilder.build();
	}

	
	public HttpUriRequest getVaildCodeHttpUriRequest() {
		RequestBuilder requestBuilder = RequestBuilder.get();
		requestBuilder.setUri(SignInUrl.signInCaptchaUrl);
		requestBuilder.addHeader(HttpHeaders.USER_AGENT, "Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addHeader(HttpHeaders.ACCEPT, "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
	    requestBuilder.addHeader(HttpHeaders.CONNECTION, "keep-alive");
	    requestBuilder.addHeader(HttpHeaders.HOST, "kyfw.12306.cn");
	    requestBuilder.addHeader(HttpHeaders.ACCEPT_LANGUAGE, "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate");
//     requestBuilder.addHeader(HttpHeaders, value)
		return requestBuilder.build();
	}

	public RequestBuilder getUtilRequestBuilder(){
		
		
		
		
		return null;
	}
	
}
