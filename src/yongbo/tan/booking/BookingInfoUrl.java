package yongbo.tan.booking;

/**
 * Copyright 2014年12月24日 by yong bo tan
 *
 * All Rights Reserved
 *
 * @Package yongbo.tan.booking
 * @Title: BookingInfoUrl.java
 * @author yongbo.tan
 * @date 2014年12月24日 下午8:16:18
 */
public class BookingInfoUrl
{
    /**
     * 获取预订确认页面，先要判断用户是否登录，POST请求的地址
     * 
     */
    private String checkUserLoginOrNotUrl = "https://kyfw.12306.cn/otn/login/checkUser";
    /**
     * 提交预定请求
     * 
     */
    private String submitBookingRequestUrl = "https://kyfw.12306.cn/otn/leftTicket/submitOrderRequest";
   /**
    * 确认乘客信息
    * 
    */
    private String confirmPassengerUrl = "https://kyfw.12306.cn/otn/confirmPassenger/initDc";

    /**
     * 获取用户的联系人列表
     * 
     */
    private String getUserContactsUrl = "https://kyfw.12306.cn/otn/confirmPassenger/getPassengerDTOs";

    
    
    public BookingInfoUrl()
    {
	super();
	// TODO Auto-generated constructor stub
    }

    public BookingInfoUrl(String checkUserLoginOrNotUrl,
	    String submitBookingRequestUrl, String confirmPassengerUrl,
	    String getUserContactsUrl)
    {
	super();
	this.checkUserLoginOrNotUrl = checkUserLoginOrNotUrl;
	this.submitBookingRequestUrl = submitBookingRequestUrl;
	this.confirmPassengerUrl = confirmPassengerUrl;
	this.getUserContactsUrl = getUserContactsUrl;
    }

    public String getCheckUserLoginOrNotUrl()
    {
	return checkUserLoginOrNotUrl;
    }

    public void setCheckUserLoginOrNotUrl(String checkUserLoginOrNotUrl)
    {
	this.checkUserLoginOrNotUrl = checkUserLoginOrNotUrl;
    }

    public String getSubmitBookingRequestUrl()
    {
	return submitBookingRequestUrl;
    }

    public void setSubmitBookingRequestUrl(String submitBookingRequestUrl)
    {
	this.submitBookingRequestUrl = submitBookingRequestUrl;
    }

    public String getConfirmPassengerUrl()
    {
	return confirmPassengerUrl;
    }

    public void setConfirmPassengerUrl(String confirmPassengerUrl)
    {
	this.confirmPassengerUrl = confirmPassengerUrl;
    }

    public String getGetUserContactsUrl()
    {
	return getUserContactsUrl;
    }

    public void setGetUserContactsUrl(String getUserContactsUrl)
    {
	this.getUserContactsUrl = getUserContactsUrl;
    }

}
