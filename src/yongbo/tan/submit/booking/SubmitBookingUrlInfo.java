package yongbo.tan.submit.booking;

/**
 * Copyright 2014年12月24日 by yong bo tan
 *
 * All Rights Reserved
 *
 * @Package yongbo.tan.submit.booking
 * @Title: SubmitBookingUrlInfo.java
 * @author yongbo.tan
 * @date 2014年12月24日 下午8:49:40
 */
public class SubmitBookingUrlInfo
{
    /**
     * 
     * 检查预定信息
     * 
     */

    private String checkBookingInfo = "https://kyfw.12306.cn/otn/confirmPassenger/checkOrderInfo";

    /**
     * 确认是否可以排队
     */
    private String isCanQueue = "https://kyfw.12306.cn/otn/confirmPassenger/confirmSingleForQueue";

    private String vaildCodeForsubmitBooking = "https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=passenger&rand=randp";

    /**
     * 
     * 点击确认提交预定
     * 
     */
    private String submitBooking = "https://kyfw.12306.cn/otn/confirmPassenger/confirmSingleForQueue";

    /**
     * 判断是否成功预定
     */
    private String isBookingSuccessOrNot = "https://kyfw.12306.cn/otn/confirmPassenger/queryOrderWaitTime";

    public SubmitBookingUrlInfo()
    {
	super();
	// TODO Auto-generated constructor stub
    }

    public String getCheckBookingInfo()
    {
	return checkBookingInfo;
    }

    public void setCheckBookingInfo(String checkBookingInfo)
    {
	this.checkBookingInfo = checkBookingInfo;
    }

    public String getIsCanQueue()
    {
	return isCanQueue;
    }

    public void setIsCanQueue(String isCanQueue)
    {
	this.isCanQueue = isCanQueue;
    }

    public String getSubmitBooking()
    {
	return submitBooking;
    }

    public void setSubmitBooking(String submitBooking)
    {
	this.submitBooking = submitBooking;
    }

    public String getIsBookingSuccessOrNot()
    {
	return isBookingSuccessOrNot;
    }

    public void setIsBookingSuccessOrNot(String isBookingSuccessOrNot)
    {
	this.isBookingSuccessOrNot = isBookingSuccessOrNot;
    }

    public String getVaildCodeForsubmitBooking()
    {
	return vaildCodeForsubmitBooking;
    }

    public void setVaildCodeForsubmitBooking(String vaildCodeForsubmitBooking)
    {
	this.vaildCodeForsubmitBooking = vaildCodeForsubmitBooking;
    }

}
