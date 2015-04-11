package yongbo.tan.signin;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Copyright 2014年12月23日 by yong bo tan
 * 
 * All Rights Reserved
 * 
 * @Package yongbo.tan.signin
 * @Title: SignInUrl.java
 * @author yongbo.tan
 * @date 2014年12月23日 下午9:05:16
 */
public class SignInUrl {

	
	/**
	 * 12306 Host API
	 */
	public static String host="https://kyfw.12306.cn";
	
	/**
     *  
     * 12306的初始化登陆地址，首先得要连接到此地址，获取相应的cookie，防止出现返回插件登陆的情况 
     */
	public static String init12306Url="https://kyfw.12306.cn/otn/index/init";
	/**
	 * 12306正常的登陆地址，用于获取登陆的cookie
	 * 
	 */
	public static String signInUrl = "https://kyfw.12306.cn/otn/login/init";

	/**
	 * 登陆时验证码的获取地址
	 * 
	 */
	public static String signInCaptchaUrl = "https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&";

	/**
	 * 
	 * 登陆时验证码的验证地址
	 * 
	 * 
	 */
	public static String inputtedCaptchaCheckUrl = "https://kyfw.12306.cn/otn/passcodeNew/checkRandCodeAnsyn";

	/**
	 * 提交登陆前，进行验证的url地址，即12306在点击登陆后，会进行验证，验证通过后才会，提交表单信息
	 * 
	 * 返回json数据： "loginCheck":"Y" 表示可以验证通过 {
	 * "validateMessagesShowId":"_validatorMessage" "status":true
	 * "httpstatus":200, "data":{ "loginCheck":"Y" }, "messages":[],
	 * "validateMessages":{} }
	 * 
	 */

	/**
	 * 登陆表单提交的地址
	 */
	public static String signInSubmitUrl = "https://kyfw.12306.cn/otn/login/loginAysnSuggest";
	/**
	 * 登陆表单正确调解后的地址
	 */
	public static String signInSuccessUrl = "https://kyfw.12306.cn/otn/login/userLogin";

	
	/**
	 * 登陆成功后的首个界面地址
	 * 
	 */
	public static String signInSuccessAfterUrl="https://kyfw.12306.cn/otn/index/initMy12306";
	
	public static String getDynamicJsUrl(String source){
		Pattern pattern=Pattern.compile("src=\"/otn/dynamicJs/[\\w]+\"");
		Matcher matcher=	pattern.matcher(source);
		String dynamicJsUrl=null;
		if(matcher.find()){
			dynamicJsUrl=matcher.group(0);
			System.err.println("dynamic Js Url is " +dynamicJsUrl);
		}
		int index=dynamicJsUrl.indexOf('\"');
		dynamicJsUrl=host+dynamicJsUrl.substring(index+1,dynamicJsUrl.length()-1);
		System.err.println("dynamic Js Url is " +dynamicJsUrl);
		return dynamicJsUrl;
	}
	
}
