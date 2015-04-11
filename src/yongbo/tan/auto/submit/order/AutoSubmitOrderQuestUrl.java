package yongbo.tan.auto.submit.order;

public class AutoSubmitOrderQuestUrl {
	/**
	 * 
	 * POST url: https://kyfw.12306.cn/otn/confirmPassenger/autoSubmitOrderRequest
	 * 
	 * 请求头：
	 * 
	 * Host: kyfw.12306.cn
		User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0
		Accept: *\/*
		Accept-Language: zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3
		Accept-Encoding: gzip, deflate
		DNT: 1
		Content-Type: application/x-www-form-urlencoded; charset=UTF-8
		X-Requested-With: XMLHttpRequest
		Referer: https://kyfw.12306.cn/otn/leftTicket/init
		Content-Length: 623
		Cookie: JSESSIONID=D5582952403ECF5525836C920D3F78EE; _jc_save_fromStation=%u5E7F%u5DDE%2CGZQ; _jc_save_toStation=%u5A04%u5E95%2CLDQ; _jc_save_fromDate=2015-02-05; _jc_save_toDate=2015-02-01; _jc_save_wfdc_flag=dc; _jc_save_showZtkyts=true; _jc_save_detail=true; BIGipServerotn=1289289994.50210.0000; current_captcha_type=C
		Connection: keep-alive
		Pragma: no-cache
		Cache-Control: no-cache
		
		请求体：
		NDE4NDMz=NWU2MTRjNDdhYTc1YTYzZg%3D%3D&myversion=undefined&secretStr=MjAxNS0wMi0wNSMwMCNHOTY2NCMwMzoxOSMwNjoyMCM2YzAwMEc5NjY0MTAjSVpRI1VPUSMwOTozOSPlub%2Flt57ljZcj5aiE5bqV5Y2XIzAxIzA0I08wMzcyNTAwMDBNMDYwMDUwMDAwOTExNzYwMDAwNiNROSMxNDIyNzk2NzY0NDUyI0JCRTcwREYzRTVDNDE1MDkyOUIwREFCODVCNzA1RkNBRUExNjg0OTdDQjcwNTJBNTU4QzFERTQw&train_date=2015-02-05&tour_flag=dc&purpose_codes=ADULT&query_from_station_name=广州&query_to_station_name=娄底&&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=9,0,1,谭永波,1,身份证号码,手机号码,N&oldPassengerStr=谭永波,身份证号码,1_
	 * 
	 * NDE4NDMz ： "NWU2MTRjNDdhYTc1YTYzZg=="
	 * myversion ： "undefined"
	 * secretStr ："lt57ljZcj5aiE5bqV5Y2XIzAxIzA0I08wMzcyNTAwMDBNMDYwMDUwMDAwOTExNzYwMDAwNiNROSMxNDIyNzk2NzY0NDUyI0JCRTcwREYzRTVDNDE1MDkyOUIwREFCODVCNzA1RkNBRUExNjg0OTdDQjcwNTJBNTU4QzFERTQw"
	 * train_date :"2015-02-05"
	 * tour_flag : "dc"
	 * purpose_codes :"ADULT"
	 * query_from_station_name :""
	 * query_to_station_name :"娄底"
	 * cancel_flag :"2"
	 * bed_level_order_num :"000000000000000000000000000000"
	 * passengerTicketStr : "9,0,1,谭永波,1,身份证号码,手机号码,N"
	 * oldPassengerStr ："谭永波,1,身份证号码,1_"
	 * 
	 * 返回json：
	 * validateMessagesShowId ："_validatorMessage"
	 * status ：true
	 * httpstatus ：200
	 * data ：Object
	 *   	result ："Q9#8ADBFB0E8928ACD2C45484ABFFFF96F6FFBC01778D32CC02E845A498#O037250000M0600500009117600006#1"
	 *      submitStatus:true
	 * messages : Array
	 * validateMessages : Object
	 * 
	 * 
	 * 
	 */
	public static String autoSubmitUrl="https://kyfw.12306.cn/otn/confirmPassenger/autoSubmitOrderRequest";
	
	
	/**
	 * 
	 * POST url :https://kyfw.12306.cn/otn/confirmPassenger/getQueueCountAsync
	 * 
	 * 请求头：
	 * Host: kyfw.12306.cn
		User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0
		Accept: application/json, text/javascript, *\/*; q=0.01
		Accept-Language: zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3
		Accept-Encoding: gzip, deflate
		DNT: 1
		Content-Type: application/x-www-form-urlencoded; charset=UTF-8
		X-Requested-With: XMLHttpRequest
		Referer: https://kyfw.12306.cn/otn/leftTicket/init
		Content-Length: 225
		Cookie: JSESSIONID=D5582952403ECF5525836C920D3F78EE; _jc_save_fromStation=%u5E7F%u5DDE%2CGZQ; _jc_save_toStation=%u5A04%u5E95%2CLDQ; _jc_save_fromDate=2015-02-05; _jc_save_toDate=2015-02-01; _jc_save_wfdc_flag=dc; _jc_save_showZtkyts=true; _jc_save_detail=true; BIGipServerotn=1289289994.50210.0000; current_captcha_type=C
		Connection: keep-alive
		Pragma: no-cache
		Cache-Control: no-cache
		
		请求体：参数
		train_date ："Thu+Feb+05+2015+21:20:37+GMT+0800"
		train_no ："6c000G966410"
		stationTrainCode ："G9664"
		seatType ："9"
		fromStationTelecode ："IZQ"
		toStationTelecode ："UOQ"
		leftTicket ："O037250000M0600500009117600006"
		purpose_codes ："ADULT"
		_json_att ：""
		
		返回json
		
		validateMessagesShowId ："_validatorMessage"
		status ：true
		httpstatus ：200
		data ：Object
		       count："5"
		       ticket ："O037250000M0600500009117600006"
		       op_2 ："false"
		       countT ："0"
		       op_1："true"
	   messages ：Array
	   validateMessages ：Object
		
	 */
	public static String getQueueCount="https://kyfw.12306.cn/otn/confirmPassenger/getQueueCountAsync";
	
	
	
	/**
	 * 
	 * GET url :https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&0.6567502207375024
	 * 
	 * 请求头：
	 * Host: kyfw.12306.cn
		User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0
		Accept: image/png,image/*;q=0.8,*\/*;q=0.5
		Accept-Language: zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3
		Accept-Encoding: gzip, deflate
		DNT: 1
		Referer: https://kyfw.12306.cn/otn/leftTicket/init
		Cookie: JSESSIONID=D5582952403ECF5525836C920D3F78EE; _jc_save_fromStation=%u5E7F%u5DDE%2CGZQ; _jc_save_toStation=%u5A04%u5E95%2CLDQ; _jc_save_fromDate=2015-02-05; _jc_save_toDate=2015-02-01; _jc_save_wfdc_flag=dc; _jc_save_showZtkyts=true; _jc_save_detail=true; BIGipServerotn=1289289994.50210.0000; current_captcha_type=C
		Connection: keep-alive
		
		请求参数：
		module=login
		rand=sjrand
		0.6567502207375024=undefined 
	 * 
	 * 请求体：
	 * train_date=Thu+Feb+05+2015+21%3A20%3A37+GMT%2B0800&train_no=6c000G966410&stationTrainCode=G9664&seatType=9&fromStationTelecode=IZQ&toStationTelecode=UOQ&leftTicket=O037250000M0600500009117600006&purpose_codes=ADULT&_json_att=
	 * 
	 * 
	 */
	
	public static String getImageUrl="https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&0.6567502207375024";
}
