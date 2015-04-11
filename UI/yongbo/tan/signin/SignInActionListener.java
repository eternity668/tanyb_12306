package yongbo.tan.signin;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.JOptionPane;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.Consts;
import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.NameValuePair;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.cookie.Cookie;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EncodingUtils;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;

import yongbo.tan.autoquery.QueryDialog;
import yongbo.tan.client.CustomHttpClient;
import yongbo.tan.client.CustomHttpClientContext;
import yongbo.tan.client.RequestBuliderUtil;
import yongbo.tan.passenger.PassengerContact;
import yongbo.tan.passenger.PassengerContactFetcher;
import yongbo.tan.query.QueryUrl;

public class SignInActionListener implements ActionListener {

	private javax.swing.JTextField userNameInput;
	private javax.swing.JTextField validCodeInput;
	private javax.swing.JPasswordField passwordInput;
	private CustomHttpClient cusomHtttpClient = new CustomHttpClient();
	private SignInDialog signInDialog;

	private SignInActionListener(SignInDialog signInDialog) {
		this.signInDialog = signInDialog;
	}

	public SignInActionListener(JTextField userNameInput,
			JTextField validCodeInput, JPasswordField passwordInput,
			SignInDialog signInDialog) {
		super();
		this.userNameInput = userNameInput;
		this.validCodeInput = validCodeInput;
		this.passwordInput = passwordInput;
		this.signInDialog = signInDialog;
	}

	public void actionPerformed(java.awt.event.ActionEvent evt) {
		LogInButtonActionPerformed(evt);
	}

	private void LogInButtonActionPerformed(ActionEvent evt) {
		String userName = userNameInput.getText();
		char[] password = passwordInput.getPassword();
		if (StringUtils.isBlank(userName)) {
			JOptionPane.showMessageDialog(this.signInDialog, "请输入用户名");
			System.err.println("input user name is blank");
			return;
		}
		String inputPassword = String.copyValueOf(password);
		if (password == null || password.length == 0
				|| StringUtils.isBlank(inputPassword)) {
			JOptionPane.showMessageDialog(this.signInDialog, "请输入密码");
			System.err.println("input password is blank");
			return;
		}

		String vaildCode = validCodeInput.getText();
		if (StringUtils.isBlank(vaildCode)) {
			JOptionPane.showMessageDialog(this.signInDialog, "请输入验证码");
			System.err.println("input vaild code is blank");
			return;
		}
		try {
			if (checkInputtedCaptcha(vaildCode)) {
				if (signIn12306(userName, inputPassword, vaildCode)) {
					System.err.println("signIn12306 init success");
					try {
					  int statusCode=	goInUserLogin(userName, inputPassword, vaildCode) ;
					  while(statusCode<300||statusCode>=400){
						  statusCode=	goInUserLogin(userName, inputPassword, vaildCode) ;
					  }
					  System.err.println("goInUserLogin success");
					  
					  statusCode=  getFirstSignInSuccessView();
					   while(statusCode!=200){
						   statusCode=  getFirstSignInSuccessView(); 
					   }
					   System.err.println("getFirstSignInSuccessView success"); 
				 
					} catch (Exception e) {
						System.err.println("Exception" +e.getMessage());
					}
					System.err.println("signin success");
					signInDialog.setVisible(false);
					QueryDialog dialog = new QueryDialog(new javax.swing.JFrame(),
							true);
					dialog.addWindowListener(new java.awt.event.WindowAdapter() {
						public void windowClosing(java.awt.event.WindowEvent e) {
							System.exit(0);
						}
					});
					dialog.setVisible(true);
					
					signInDialog.dispose();
					
				};
			}
		} catch (ClientProtocolException e) {
			System.out.print(e.getMessage());
		} catch (IOException e) {
			System.out.print(e.getMessage());
			e.printStackTrace();
		}

	}

	private boolean signIn12306(String userName, String inputPassword,
			String vaildCode) {
		CloseableHttpClient closeableHttpClient = cusomHtttpClient
				.getCustomHttpClient();
		RequestBuilder requestBuilder = RequestBuilder.post();
		requestBuilder
				.addHeader(HttpHeaders.USER_AGENT,
						"Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addHeader(HttpHeaders.REFERER,
				"https://kyfw.12306.cn/otn/login/init");
		requestBuilder.addHeader(HttpHeaders.ACCEPT, "*/*");
		requestBuilder.addHeader(HttpHeaders.CONNECTION, "keep-alive");
		requestBuilder.addHeader(HttpHeaders.CONTENT_TYPE,
				"application/x-www-form-urlencoded; charset=UTF-8");
		requestBuilder.addHeader("X-Requested-With", "XMLHttpRequest");
		requestBuilder.addHeader("DNT", "1");
		requestBuilder.addHeader(HttpHeaders.PRAGMA, "no-cache");
		requestBuilder.addHeader(HttpHeaders.CACHE_CONTROL, "no-cache");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_LANGUAGE,
				"zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3");
		requestBuilder.addHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate");
		requestBuilder.addHeader(HttpHeaders.HOST, "kyfw.12306.cn");
		// requestBuilder.addHeader(HttpHeaders.CONTENT_LENGTH, "44");
		List<NameValuePair> signInFormParams = new ArrayList<NameValuePair>();
		SignInFormInfo signInFormInfo = new SignInFormInfo();
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getUserNameKey(), userName));
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getPasswordKey(), inputPassword));
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getValidCodeKey(), vaildCode));
		signInFormParams.add(new BasicNameValuePair("randCode_validate", null));
		DynamicJsFormInput dynamicJsFormInput = this.signInDialog
				.getDynamicJsFormInput();

		signInFormParams.add(new BasicNameValuePair(
				dynamicJsFormInput.getKey(), dynamicJsFormInput.getValue()));
		signInFormParams.add(new BasicNameValuePair("myversion", "undefined"));

		UrlEncodedFormEntity urlEncodeFormEntity = new UrlEncodedFormEntity(
				signInFormParams, Consts.UTF_8);
		requestBuilder.setEntity(urlEncodeFormEntity);
		requestBuilder.setUri(SignInUrl.signInSubmitUrl);
		try {
			CloseableHttpResponse closeableHttpResponse = closeableHttpClient
					.execute(requestBuilder.build(), CustomHttpClientContext
							.getHttpClientContext());
			StatusLine statusLine = closeableHttpResponse.getStatusLine();
			if (statusLine.getStatusCode() != 200) {
				closeableHttpResponse.close();
				JOptionPane.showMessageDialog(this.signInDialog, statusLine
						.getStatusCode()
						+ " 输入有误，请重新输入");
				return false;
			}
			String responseString = EntityUtils.toString(closeableHttpResponse
					.getEntity());
			closeableHttpResponse.close();
			JSONObject jsonObject = new JSONObject(responseString);
			if (jsonObject.isNull("data")) {
				JOptionPane.showMessageDialog(this.signInDialog, jsonObject
						.getJSONArray("messages").toString());
				return false;
			}
			JSONObject data = jsonObject.getJSONObject("data");
			if ("Y".equals(data.get("loginCheck"))) {
				return true;
			} else {
				JOptionPane.showMessageDialog(this.signInDialog, jsonObject
						.getString("messages"));
			}
		} catch (ClientProtocolException e) {
			System.out.print("ClientProtocolException " + e.getMessage());
		} catch (IOException e) {
			System.out.print("IOException " + e.getMessage());
		} finally {
			try {
				closeableHttpClient.close();
			} catch (IOException e) {
				System.out.print("IOException " + e.getMessage());
			}
		}
		return false;
	}

	public boolean checkInputtedCaptcha(String inputtedCaptcha)
			throws ClientProtocolException, IOException {
		List<NameValuePair> signInFormParams = new ArrayList<NameValuePair>();
		SignInFormInfo signInFormInfo = new SignInFormInfo();
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getValidCodeKey(), inputtedCaptcha));
		signInFormParams.add(new BasicNameValuePair("rand", "sjrand"));
		signInFormParams.add(new BasicNameValuePair("randCode_validate", null));
		UrlEncodedFormEntity urlEncodeFormEntity = new UrlEncodedFormEntity(
				signInFormParams, Consts.UTF_8);
		RequestBuilder requestBuilder = RequestBuilder.post();
		requestBuilder
				.addHeader(HttpHeaders.USER_AGENT,
						"Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.setEntity(urlEncodeFormEntity);
		requestBuilder.setUri(SignInUrl.inputtedCaptchaCheckUrl);
		HttpUriRequest httpUriRequest = requestBuilder.build();
		CloseableHttpClient closeableHttpClient = cusomHtttpClient
				.getCustomHttpClient();
		CloseableHttpResponse closeableHttpResponse = closeableHttpClient
				.execute(httpUriRequest, CustomHttpClientContext
						.getHttpClientContext());
		StatusLine statusLine = closeableHttpResponse.getStatusLine();
		if (statusLine.getStatusCode() != 200) {
			JOptionPane.showMessageDialog(this.signInDialog, statusLine
					.getStatusCode()
					+ " 错误");
			return false;
		}
		String result = EntityUtils.toString(closeableHttpResponse.getEntity());
		closeableHttpResponse.close();
		closeableHttpClient.close();
		JSONObject jsonObject = new JSONObject(result);
		JSONObject data = jsonObject.getJSONObject("data");
		if ("1".equals(data.getString("result"))) {
			return true;
		} else {
			JOptionPane.showMessageDialog(this.signInDialog, "验证码错误");
			return false;
		}

	}
	/**
	 * 需要返回302
	 * @return
	 * @throws Exception
	 */
	private int goInUserLogin(String userName, String inputPassword,
			String vaildCode) throws Exception{
		
		RequestBuilder requestBuilder = RequestBuliderUtil.fetchCommonRequestBulider(HttpPost.METHOD_NAME);
		requestBuilder
				.addHeader(HttpHeaders.REFERER,
						"https://kyfw.12306.cn/otn/login/init");
		List<NameValuePair> signInFormParams = new ArrayList<NameValuePair>();
		SignInFormInfo signInFormInfo = new SignInFormInfo();
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getUserNameKey(), userName));
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getPasswordKey(), inputPassword));
		signInFormParams.add(new BasicNameValuePair(signInFormInfo
				.getValidCodeKey(), vaildCode));
//		signInFormParams.add(new BasicNameValuePair("randCode_validate", null));
//		DynamicJsFormInput dynamicJsFormInput = this.signInDialog
//				.getDynamicJsFormInput();
//
//		signInFormParams.add(new BasicNameValuePair(
//				dynamicJsFormInput.getKey(), dynamicJsFormInput.getValue()));
//		signInFormParams.add(new BasicNameValuePair("myversion", "undefined"));

		UrlEncodedFormEntity urlEncodeFormEntity = new UrlEncodedFormEntity(
				signInFormParams, Consts.UTF_8);
		requestBuilder.setEntity(urlEncodeFormEntity);
		
		requestBuilder.setUri(SignInUrl.signInSuccessUrl);
		HttpUriRequest httpUriRequest = requestBuilder.build();
		CloseableHttpClient closeableHttpClient = cusomHtttpClient
				.getCustomHttpClient();
		CloseableHttpResponse closeableHttpResponse;
	 
			closeableHttpResponse = closeableHttpClient
					.execute(httpUriRequest, CustomHttpClientContext
							.getHttpClientContext());
	 
		StatusLine statusLine = closeableHttpResponse.getStatusLine();
		closeableHttpResponse.close();
		closeableHttpClient.close();
		return statusLine.getStatusCode();
	}
	
	/**
	 * 需要返回200
	 * @return
	 * @throws Exception
	 */
	private int  getFirstSignInSuccessView() throws Exception{

		RequestBuilder requestBuilder = RequestBuilder.get();
		requestBuilder
				.addHeader(HttpHeaders.USER_AGENT,
						"Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0");
		requestBuilder.addHeader(HttpHeaders.REFERER, SignInUrl.signInSubmitUrl);
		requestBuilder.setUri(SignInUrl.signInSuccessAfterUrl);
		HttpUriRequest httpUriRequest = requestBuilder.build();
		CloseableHttpClient closeableHttpClient = cusomHtttpClient
				.getCustomHttpClient();
		CloseableHttpResponse closeableHttpResponse;
	 
			closeableHttpResponse = closeableHttpClient
					.execute(httpUriRequest, CustomHttpClientContext
							.getHttpClientContext());
	 
		StatusLine statusLine = closeableHttpResponse.getStatusLine();
		closeableHttpResponse.close();
		closeableHttpClient.close();
	   return statusLine.getStatusCode();
	}
 
}
