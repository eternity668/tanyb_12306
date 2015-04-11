package yongbo.tan.signin;

import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;
import javax.script.ScriptException;
import javax.swing.ImageIcon;

import org.apache.http.HttpEntity;
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
import yongbo.tan.js.Js;

/*
 * SignInDialog.java
 *
 * Created on __DATE__, __TIME__
 */

/**
 * 
 * @author __USER__
 */
public class SignInDialog extends javax.swing.JDialog {

	private Logger log = Logger.getLogger("SignInDialog");
	// GEN-BEGIN:variables
	// Variables declaration - do not modify
	private javax.swing.JButton LogInButton;
	private javax.swing.JPasswordField passwordInput;
	private javax.swing.JLabel passwordLable;
	private javax.swing.JTextField userNameInput;
	private javax.swing.JLabel userNameLable;
	private javax.swing.JLabel vaildCodeLable;
	private javax.swing.JButton validCodeFromUrl;
	private javax.swing.JTextField validCodeInput;

	public String dynamicJsUrl = null;

	public DynamicJsFormInput dynamicJsFormInput;
	
 
	// End of variables declaration//GEN-END:variables
 

	public DynamicJsFormInput getDynamicJsFormInput() {
		return dynamicJsFormInput;
	}

	public void setDynamicJsFormInput(DynamicJsFormInput dynamicJsFormInput) {
		this.dynamicJsFormInput = dynamicJsFormInput;
	}

	private SignInRequestBulider signInRequestBulider;
	private CustomHttpClient customHttpClient;

	public SignInDialog(java.awt.Frame parent, boolean modal,
			CustomHttpClient customHttpClient,
			SignInRequestBulider signInRequestBulider) {
		super(parent, modal);
		this.customHttpClient = customHttpClient;
		this.signInRequestBulider = signInRequestBulider;
		// 初始化cookie
		// init12306();
		initCookie();
		getDynamicJsInputKeyVal();
		initComponents();
	}

	private void getDynamicJsInputKeyVal() {

		CloseableHttpClient closeableHttpClient = this.customHttpClient
				.getCustomHttpClient();
		try {
			CloseableHttpResponse closeableHttpResponse = closeableHttpClient
					.execute(signInRequestBulider
							.getInit12306UrlRequest(dynamicJsUrl),
							CustomHttpClientContext.getHttpClientContext());
			int status = closeableHttpResponse.getStatusLine().getStatusCode();

			while (status != 200) {
				closeableHttpResponse.close();
				closeableHttpResponse = closeableHttpClient.execute(
						signInRequestBulider
								.getInit12306UrlRequest(dynamicJsUrl),
						CustomHttpClientContext.getHttpClientContext());
				status = closeableHttpResponse.getStatusLine().getStatusCode();

			}
			String dynamicJs = EntityUtils.toString(closeableHttpResponse
					.getEntity());
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
				dynamicJsFormInput=new DynamicJsFormInput(key, value);
				} catch (NoSuchMethodException e) {
					System.err.println("ScriptException " + e.getMessage());
				}
			} catch (ScriptException e) {
				System.err.println("ScriptException " + e.getMessage());
			}
			closeableHttpResponse.close();
			HttpClientContext httpClientContext = CustomHttpClientContext
					.getHttpClientContext();
			CookieStore cookieStore = httpClientContext.getCookieStore();
			for (Cookie cookie : cookieStore.getCookies()) {
				System.err.println(cookie.getName() + "----"
						+ cookie.getValue());
			}
			;
			System.err.println("init 12306 cookie is success");
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

	}

	private void initCookie() {
		CloseableHttpClient closeableHttpClient = this.customHttpClient
				.getCustomHttpClient();
		try {
			CloseableHttpResponse closeableHttpResponse = closeableHttpClient
					.execute(signInRequestBulider.getSignInHttpUriRequest(),
							CustomHttpClientContext.getHttpClientContext());
			int status = closeableHttpResponse.getStatusLine().getStatusCode();
			while (status != 200) {
				closeableHttpResponse.close();
				closeableHttpResponse = closeableHttpClient.execute(
						signInRequestBulider.getSignInHttpUriRequest(),
						CustomHttpClientContext.getHttpClientContext());
				status = closeableHttpResponse.getStatusLine().getStatusCode();

			}
			String response = EntityUtils.toString(closeableHttpResponse
					.getEntity());
			dynamicJsUrl = SignInUrl.getDynamicJsUrl(response);
			closeableHttpResponse.close();
			HttpClientContext httpClientContext = CustomHttpClientContext
					.getHttpClientContext();
			CookieStore cookieStore = httpClientContext.getCookieStore();
			for (Cookie cookie : cookieStore.getCookies()) {
				System.err.println(cookie.getName() + "----"
						+ cookie.getValue());
			}
			;
			System.err.println("init 12306 cookie is success");
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
	}

	// /** Creates new form SignInDialog */
	// public SignInDialog(java.awt.Frame parent, boolean modal) {
	// super(parent, modal);
	// initComponents();
	// }

	/**
	 * This method is called from within the constructor to initialize the form.
	 * WARNING: Do NOT modify this code. The content of this method is always
	 * regenerated by the Form Editor.
	 */
	// GEN-BEGIN:initComponents
	// <editor-fold defaultstate="collapsed" desc="Generated Code">
	private void initComponents() {

		userNameLable = new javax.swing.JLabel();
		userNameInput = new javax.swing.JTextField();
		passwordLable = new javax.swing.JLabel();
		LogInButton = new javax.swing.JButton();
		passwordInput = new javax.swing.JPasswordField();
		validCodeInput = new javax.swing.JTextField();

		ImageIcon imageIcon = getImage();

		validCodeFromUrl = new javax.swing.JButton();
		if (imageIcon != null) {
			validCodeFromUrl.setIcon(imageIcon);
		} else {
			validCodeFromUrl.setText("加载失败");
		}
		validCodeFromUrl.addActionListener(new java.awt.event.ActionListener() {
			public void actionPerformed(java.awt.event.ActionEvent evt) {

				ImageIcon imageIcon = getImage();
				if (imageIcon != null) {
					validCodeFromUrl.setIcon(imageIcon);
				} else {
					validCodeFromUrl.setText("加载失败");
				}
				validCodeFromUrl.show();
			}
		});

		vaildCodeLable = new javax.swing.JLabel();

		setDefaultCloseOperation(javax.swing.WindowConstants.DO_NOTHING_ON_CLOSE);
		setTitle("\u767b\u9646");
		setAlwaysOnTop(true);
		setBackground(java.awt.Color.pink);

		userNameLable.setText("\u7528\u6237\u540d");

		userNameInput.setToolTipText("\u8bf7\u8f93\u5165\u7528\u6237\u540d");

		passwordLable.setText("\u5bc6\u7801");

		LogInButton.setText("\u767b\u9646");
		LogInButton.addActionListener(new SignInActionListener(userNameInput,
				validCodeInput, passwordInput, this));

		passwordInput.setToolTipText("\u8bf7\u8f93\u5165\u5bc6\u7801");
		passwordInput.addActionListener(new java.awt.event.ActionListener() {
			public void actionPerformed(java.awt.event.ActionEvent evt) {
			}
		});

		validCodeInput.setToolTipText("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
		validCodeInput.addActionListener(new java.awt.event.ActionListener() {
			public void actionPerformed(java.awt.event.ActionEvent evt) {
			}
		});

		vaildCodeLable.setText("验证码");

		javax.swing.GroupLayout layout = new javax.swing.GroupLayout(
				getContentPane());
		getContentPane().setLayout(layout);
		layout
				.setHorizontalGroup(layout
						.createParallelGroup(
								javax.swing.GroupLayout.Alignment.LEADING)
						.addGroup(
								javax.swing.GroupLayout.Alignment.TRAILING,
								layout
										.createSequentialGroup()
										.addContainerGap()
										.addGroup(
												layout
														.createParallelGroup(
																javax.swing.GroupLayout.Alignment.TRAILING)
														.addComponent(
																LogInButton)
														.addGroup(
																layout
																		.createSequentialGroup()
																		.addGroup(
																				layout
																						.createParallelGroup(
																								javax.swing.GroupLayout.Alignment.LEADING)
																						.addComponent(
																								passwordLable)
																						.addComponent(
																								userNameLable)
																						.addComponent(
																								vaildCodeLable))
																		.addPreferredGap(
																				javax.swing.LayoutStyle.ComponentPlacement.RELATED,
																				94,
																				Short.MAX_VALUE)
																		.addGroup(
																				layout
																						.createParallelGroup(
																								javax.swing.GroupLayout.Alignment.LEADING,
																								false)
																						.addGroup(
																								javax.swing.GroupLayout.Alignment.TRAILING,
																								layout
																										.createSequentialGroup()
																										.addComponent(
																												validCodeInput)
																										.addGap(
																												34,
																												34,
																												34)
																										.addComponent(
																												validCodeFromUrl,
																												javax.swing.GroupLayout.PREFERRED_SIZE,
																												55,
																												javax.swing.GroupLayout.PREFERRED_SIZE))
																						.addComponent(
																								passwordInput,
																								javax.swing.GroupLayout.Alignment.TRAILING)
																						.addComponent(
																								userNameInput,
																								javax.swing.GroupLayout.Alignment.TRAILING,
																								javax.swing.GroupLayout.PREFERRED_SIZE,
																								141,
																								javax.swing.GroupLayout.PREFERRED_SIZE))))
										.addGap(109, 109, 109)));
		layout
				.setVerticalGroup(layout
						.createParallelGroup(
								javax.swing.GroupLayout.Alignment.LEADING)
						.addGroup(
								layout
										.createSequentialGroup()
										.addGap(60, 60, 60)
										.addGroup(
												layout
														.createParallelGroup(
																javax.swing.GroupLayout.Alignment.BASELINE)
														.addComponent(
																userNameLable)
														.addComponent(
																userNameInput,
																javax.swing.GroupLayout.PREFERRED_SIZE,
																javax.swing.GroupLayout.DEFAULT_SIZE,
																javax.swing.GroupLayout.PREFERRED_SIZE))
										.addGap(34, 34, 34)
										.addGroup(
												layout
														.createParallelGroup(
																javax.swing.GroupLayout.Alignment.BASELINE)
														.addComponent(
																passwordLable)
														.addComponent(
																passwordInput,
																javax.swing.GroupLayout.PREFERRED_SIZE,
																javax.swing.GroupLayout.DEFAULT_SIZE,
																javax.swing.GroupLayout.PREFERRED_SIZE))
										.addGroup(
												layout
														.createParallelGroup(
																javax.swing.GroupLayout.Alignment.LEADING)
														.addGroup(
																layout
																		.createSequentialGroup()
																		.addGap(
																				31,
																				31,
																				31)
																		.addComponent(
																				validCodeFromUrl))
														.addGroup(
																layout
																		.createSequentialGroup()
																		.addGap(
																				26,
																				26,
																				26)
																		.addGroup(
																				layout
																						.createParallelGroup(
																								javax.swing.GroupLayout.Alignment.BASELINE)
																						.addComponent(
																								vaildCodeLable)
																						.addComponent(
																								validCodeInput,
																								javax.swing.GroupLayout.PREFERRED_SIZE,
																								javax.swing.GroupLayout.DEFAULT_SIZE,
																								javax.swing.GroupLayout.PREFERRED_SIZE))))
										.addPreferredGap(
												javax.swing.LayoutStyle.ComponentPlacement.RELATED,
												55, Short.MAX_VALUE)
										.addComponent(LogInButton).addGap(23,
												23, 23)));

		pack();
	}// </editor-fold>

	private ImageIcon getImage() {

		HttpClientContext httpClientContext = CustomHttpClientContext
				.getHttpClientContext();
		CookieStore cookieStore = httpClientContext.getCookieStore();
		for (Cookie cookie : cookieStore.getCookies()) {
			System.err.println(cookie.getName() + "----" + cookie.getValue());
		}
		;
		CloseableHttpClient closeableHttpClient = customHttpClient
				.getCustomHttpClient();
		try {
			CloseableHttpResponse closeableHttpResponse = closeableHttpClient
					.execute(signInRequestBulider.getVaildCodeHttpUriRequest(),
							CustomHttpClientContext.getHttpClientContext());
			int statusCode = closeableHttpResponse.getStatusLine()
					.getStatusCode();
			while (statusCode != 200) {
				closeableHttpResponse.close();
				closeableHttpResponse = closeableHttpClient.execute(
						signInRequestBulider.getVaildCodeHttpUriRequest(),
						CustomHttpClientContext.getHttpClientContext());
				statusCode = closeableHttpResponse.getStatusLine()
						.getStatusCode();
			}
			HttpEntity httpEntity = closeableHttpResponse.getEntity();
			InputStream inputStream = httpEntity.getContent();
			BufferedInputStream bufferedInputStream = new BufferedInputStream(
					inputStream);

			// ByteArrayOutputStream byteArrayOutputStream=new
			// ByteArrayOutputStream();

			// byte[]bufferByte=new byte[1024];
			// int len=-1;
			// while((len=bufferedInputStream.read(bufferByte))!=-1){
			// byteArrayOutputStream.write(bufferByte, 0, len);
			// }
			// byte[] data = byteArrayOutputStream.toByteArray();

			BufferedImage bufferedImage = ImageIO.read(bufferedInputStream);
			ImageIcon imageIcon = new ImageIcon(Toolkit.getDefaultToolkit()
					.createImage(bufferedImage.getSource()));
			bufferedImage.flush();
			bufferedInputStream.close();
			inputStream.close();
			closeableHttpResponse.close();
			closeableHttpClient.close();
			System.err.println("load image success");
			HttpClientContext httpClientContext2 = CustomHttpClientContext
					.getHttpClientContext();
			CookieStore cookieStore2 = httpClientContext2.getCookieStore();
			for (Cookie cookie : cookieStore2.getCookies()) {
				System.err.println(cookie.getName() + "----"
						+ cookie.getValue());
			}
			;
			return imageIcon;

		} catch (ClientProtocolException e) {
			System.err.println(e.getMessage());
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	/**
	 * @param args
	 *            the command line arguments
	 */
	public static void main(String args[]) {
		java.awt.EventQueue.invokeLater(new Runnable() {
			public void run() {
				CustomHttpClient customHttpClient = new CustomHttpClient();
				SignInFormInfo formInfo = new SignInFormInfo();
				SignInUrl signInUrl = new SignInUrl();
				SignInRequestBulider signInRequestBulider = new SignInRequestBulider(
						formInfo, signInUrl);

				SignInDialog dialog = new SignInDialog(
						new javax.swing.JFrame(), true, customHttpClient,
						signInRequestBulider);
				dialog.addWindowListener(new java.awt.event.WindowAdapter() {
					public void windowClosing(java.awt.event.WindowEvent e) {
						System.exit(0);
					}
				});
				dialog.setVisible(true);
			}
		});
	}

	public Logger getLog() {
		return log;
	}

	public void setLog(Logger log) {
		this.log = log;
	}

	public javax.swing.JButton getLogInButton() {
		return LogInButton;
	}

	public void setLogInButton(javax.swing.JButton logInButton) {
		LogInButton = logInButton;
	}

	public javax.swing.JPasswordField getPasswordInput() {
		return passwordInput;
	}

	public void setPasswordInput(javax.swing.JPasswordField passwordInput) {
		this.passwordInput = passwordInput;
	}

	public javax.swing.JLabel getPasswordLable() {
		return passwordLable;
	}

	public void setPasswordLable(javax.swing.JLabel passwordLable) {
		this.passwordLable = passwordLable;
	}

	public javax.swing.JTextField getUserNameInput() {
		return userNameInput;
	}

	public void setUserNameInput(javax.swing.JTextField userNameInput) {
		this.userNameInput = userNameInput;
	}

	public javax.swing.JLabel getUserNameLable() {
		return userNameLable;
	}

	public void setUserNameLable(javax.swing.JLabel userNameLable) {
		this.userNameLable = userNameLable;
	}

	public javax.swing.JLabel getVaildCodeLable() {
		return vaildCodeLable;
	}

	public void setVaildCodeLable(javax.swing.JLabel vaildCodeLable) {
		this.vaildCodeLable = vaildCodeLable;
	}

	public javax.swing.JButton getValidCodeFromUrl() {
		return validCodeFromUrl;
	}

	public void setValidCodeFromUrl(javax.swing.JButton validCodeFromUrl) {
		this.validCodeFromUrl = validCodeFromUrl;
	}

	public javax.swing.JTextField getValidCodeInput() {
		return validCodeInput;
	}

	public void setValidCodeInput(javax.swing.JTextField validCodeInput) {
		this.validCodeInput = validCodeInput;
	}

	public CustomHttpClient getCustomHttpClient() {
		return customHttpClient;
	}

	public void setCustomHttpClient(CustomHttpClient customHttpClient) {
		this.customHttpClient = customHttpClient;
	}

	public SignInRequestBulider getSignInRequestBulider() {
		return signInRequestBulider;
	}

	public void setSignInRequestBulider(
			SignInRequestBulider signInRequestBulider) {
		this.signInRequestBulider = signInRequestBulider;
	}

  
	
	
}