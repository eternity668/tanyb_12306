package yongbo.tan.signin;

/**
 * Copyright 2014年12月23日 by yong bo tan
 *
 * All Rights Reserved
 *
 * @Package yongbo.tan.signin
 * @Title: SignInInfo.java
 * @author yongbo.tan
 * @date 2014年12月23日 下午9:01:22
 */
public class SignInFormInfo
{

    /**
     * 登陆时的用户名
     */
    private String userNameKey = "loginUserDTO.user_name";

    private String userNameValue;

    /**
     * 登陆时的用户密码
     */
    private String passwordKey = "userDTO.password";

    private String passwordValue;

    /**
     * 登陆时验证码
     * 
     * 
     */
    private String validCodeKey = "randCode";

    private String vaildCodeValue;

    public SignInFormInfo()
    {

    }

    public SignInFormInfo(String userNameKey, String userNameValue,
	    String passwordKey, String passwordValue, String validCodeKey,
	    String vaildCodeValue)
    {
	super();
	this.userNameKey = userNameKey;
	this.userNameValue = userNameValue;
	this.passwordKey = passwordKey;
	this.passwordValue = passwordValue;
	this.validCodeKey = validCodeKey;
	this.vaildCodeValue = vaildCodeValue;
    }

    public String getUserNameKey()
    {
	return userNameKey;
    }

    public void setUserNameKey(String userNameKey)
    {
	this.userNameKey = userNameKey;
    }

    public String getUserNameValue()
    {
	return userNameValue;
    }

    public void setUserNameValue(String userNameValue)
    {
	this.userNameValue = userNameValue;
    }

    public String getPasswordKey()
    {
	return passwordKey;
    }

    public void setPasswordKey(String passwordKey)
    {
	this.passwordKey = passwordKey;
    }

    public String getPasswordValue()
    {
	return passwordValue;
    }

    public void setPasswordValue(String passwordValue)
    {
	this.passwordValue = passwordValue;
    }

    public String getValidCodeKey()
    {
	return validCodeKey;
    }

    public void setValidCodeKey(String validCodeKey)
    {
	this.validCodeKey = validCodeKey;
    }

    public String getVaildCodeValue()
    {
	return vaildCodeValue;
    }

    public void setVaildCodeValue(String vaildCodeValue)
    {
	this.vaildCodeValue = vaildCodeValue;
    }

}
