package yongbo.tan.query;

/**
 * Copyright 2014年12月23日 by yong bo tan
 *
 * All Rights Reserved
 *
 * @Package yongbo.tan.query
 * @Title: QueryUrl.java
 * @author yongbo.tan
 * @date 2014年12月23日 下午9:18:01
 */
public class QueryUrl
{  
	
	
	/**
	 * 实例
	 * 
	 * GET  https://kyfw.12306.cn/otn/leftTicket/log?leftTicketDTO.train_date=2015-02-13&leftTicketDTO.from_station=GZQ&leftTicketDTO.to_station=LDQ&purpose_codes=ADULT
	 * 
	 * 查询参数：
	 * leftTicketDTO.train_date=2015-02-13
     *  leftTicketDTO.from_station=GZQ
     *  leftTicketDTO.to_station=LDQ
     *  purpose_codes=ADULT
	 *  请求头：
	    Host: kyfw.12306.cn
		User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0
		Accept: *\/*
		Accept-Language: zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3
		Accept-Encoding: gzip, deflate
		DNT: 1
		If-Modified-Since: 0
		Cache-Control: no-cache
		X-Requested-With: XMLHttpRequest
		Referer: https://kyfw.12306.cn/otn/leftTicket/init
		Cookie: JSESSIONID=CC9B876D42AE3B001B17C0845B8CD059; _jc_save_fromStation=%u5E7F%u5DDE%2CGZQ; _jc_save_toStation=%u5A04%u5E95%2CLDQ; _jc_save_fromDate=2015-02-13; _jc_save_toDate=2015-02-01; _jc_save_wfdc_flag=dc; _jc_save_showZtkyts=true; _jc_save_detail=true; BIGipServerotn=1289289994.50210.0000; current_captcha_type=C
		Connection: keep-alive
		
		返回json：
		validateMessagesShowId ："_validatorMessage"
		status ：true
		httpstatus ：200
		messages ：array
		validateMessages ：Object
	 *
	 */
	
	public static String queryTestUrl="https://kyfw.12306.cn/otn/leftTicket/log";
	
	/**
	 * 
	 * 实例：
	 * GET https://kyfw.12306.cn/otn/leftTicket/queryT?leftTicketDTO.train_date=2015-02-13&leftTicketDTO.from_station=GZQ&leftTicketDTO.to_station=LDQ&purpose_codes=ADULT
	 * 
	 * 查询参数：
	 * leftTicketDTO.train_date=2015-02-13
		leftTicketDTO.from_station=GZQ
		leftTicketDTO.to_station=LDQ
		purpose_codes=ADULT
		
		请求头：
		Host: kyfw.12306.cn
		User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0
		Accept: *\/*
		Accept-Language: zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3
		Accept-Encoding: gzip, deflate
		DNT: 1
		If-Modified-Since: 0
		Cache-Control: no-cache
		X-Requested-With: XMLHttpRequest
		Referer: https://kyfw.12306.cn/otn/leftTicket/init
		Cookie: JSESSIONID=CC9B876D42AE3B001B17C0845B8CD059; _jc_save_fromStation=%u5E7F%u5DDE%2CGZQ; _jc_save_toStation=%u5A04%u5E95%2CLDQ; _jc_save_fromDate=2015-02-13; _jc_save_toDate=2015-02-01; _jc_save_wfdc_flag=dc; _jc_save_showZtkyts=true; _jc_save_detail=true; BIGipServerotn=1289289994.50210.0000; current_captcha_type=C
		Connection: keep-alive
		
		返回json：
		validateMessagesShowId ："_validatorMessage"
		status ：true
		httpstatus ：200
		data：Array
		0：Object
		   queryLeftNewDTO ：Object
		    "train_no":"63000K656600",
		    "station_train_code":"K6566",
		    "start_station_telecode":"GZQ",
		    "start_station_name":"广州",
		    "end_station_telecode":"HHQ",
		    "end_station_name":"怀化",
		    "from_station_telecode":"GZQ",
		    "from_station_name":"广州",
		    "to_station_telecode":"LDQ",
		    "to_station_name":"娄底",
		    "start_time":"02:05",
		    "arrive_time":"11:37",
		    "day_difference":"0",
		    "train_class_name":"",
		    "lishi":"09:32",
		    "canWebBuy":"N",
		    "lishiValue":"572",
		    "yp_info":"10102030001010200000",
		    "control_train_day":"20991231",
		    "start_train_date":"20150213",
		    "seat_feature":"13W3",
		    "yp_ex":"1010",
		    "train_seat_feature":"3",
		    "seat_types":"11",
		    "location_code":"Q7",
		    "from_station_no":"01",
		    "to_station_no":"02",
		    "control_day":19,
		    "sale_time":"1100",
		    "is_support_card":"0",
		    "gg_num":"--",
		    "gr_num":"--",
		    "qt_num":"--",
		    "rw_num":"--",
		    "rz_num":"--",
		    "tz_num":"--",
		    "wz_num":"无",
		    "yb_num":"--",
		    "yw_num":"--",
		    "yz_num":"无",
		    "ze_num":"--",
		    "zy_num":"--",
		    "swz_num":"--",
	"secretStr":"",
	"buttonTextInfo":"预订"
		
		
	 * 
	 * 
	 * 
	 * 
	 */
	public static String reallyQueryUrl="https://kyfw.12306.cn/otn/leftTicket/queryT";
    /**
     * 查询时的提交地址
     * 
     * 返回为json
     * 
     * 对应的获取的JSON信息格式如下：

        [plain] view plaincopy在CODE上查看代码片派生到我的代码片
        
            {"validateMessagesShowId": "_validatorMessage",  
                "status": true,  
                "httpstatus": 200,  
                "data": [  
                    {"queryLeftNewDTO": {  
                            "train_no": "240000G14104",          // 列车编号  
                            "station_train_code": "G141",        // 车次  
                            "start_station_telecode": "VNP",     // 始发站编码  
                            "start_station_name": "北京南",      // 始发站名  
                            "end_station_telecode": "AOH",       // 终到站编码  
                            "end_station_name": "上海虹桥",      // 终到站名  
                            "from_station_telecode": "VNP",      // 查询输入经过站编码  
                            "from_station_name": "北京南",       // 查询输入经过站名  
                            "to_station_telecode": "AOH",        // 查询输入到站编码  
                            "to_station_name": "上海虹桥",       // 查询输入到站名  
                            "start_time": "14:16",               // 出发时间  
                            "arrive_time": "19:47",              // 到站时间  
                            "day_difference": "0",               // 花费天数  
                            "train_class_name": "",  
                            "lishi": "05:31",                    // 历时  
                            "canWebBuy": "Y",                    // 是否可以预定  
                            "lishiValue": "331",  
                            "yp_info": "O055300094M0933000999174800017",  
                            "control_train_day": "20301231",  
                            "start_train_date": "20140123",  
                            "seat_feature": "O3M393",  
                            "yp_ex": "O0M090",  
                            "train_seat_feature": "3",  
                            "seat_types": "OM9",  
                            "location_code": "P3",  
                            "from_station_no": "01",  
                            "to_station_no": "09",  
                            "control_day": 19,  
                            "sale_time": "1400",                // 出票时间点hhmm  
                            "is_support_card": "1",  
                            "gg_num": "--",  
                            "gr_num": "--",          // 高级软卧座剩余数  
                            "qt_num": "--",          // 其他座剩余数  
                            "rw_num": "--",          // 软卧座剩余数  
                            "rz_num": "--",          // 软座座剩余数  
                            "tz_num": "--",          // 特等座剩余数  
                            "wz_num": "--",          // 无座座剩余数  
                            "yb_num": "--",  
                            "yw_num": "--",          // 硬卧座剩余数  
                            "yz_num": "--",          // 硬座座剩余数  
                            "ze_num": "有",          // 二等座剩余数  
                            "zy_num": "有",          // 一等座剩余数  
                            "swz_num": "17"          // 商务座剩余数  
                        },  
                        "secretStr": "预定请求令牌字符串",  
                        "buttonTextInfo": "预订或开售日期"  
                    },  
                    ..........                       // 省略其它车次，信息同上  
                ],  
                "messages": [],  
                "validateMessages": {}  
            }  注意这里的canWebBuy属性，用于标记该趟列车是否可以预订，还有对应列车的secretStr字符，它用于请求预订确认页面的令牌，
        
                    对于其中一直提到的列车站点编码，可以通过请求https://kyfw.12306.cn/otn/resources/js/framework/station_name.js链接，通过得到JS脚本中的station_names变量获取，对应的站点以@字符分隔，而每一个站点信息如下，这里以北京北为例：
                    
                    [plain] view plaincopy在CODE上查看代码片派生到我的代码片
                    
                        bjb|北京北|VAP|beijingbei|bjb|0  
                    
                    用于提取其中有用的信息是：北京北与VAP，使用查询北京北的编码就是VAP，其它站点的解析同理。
                    
                    如上即可以查询指定出发地与到达地的车次预定信息，紧接着进行预订流程的分析。
     * 
     */
    public static  String queryUrl = "https://kyfw.12306.cn/otn/leftTicket/queryT";
   
    
    public static String  stationInfoUrl="https://kyfw.12306.cn/otn/resources/js/framework/station_name.js";
    
    /**
     * 
     * 查询页面的url
     */
    public static String queryViewPageUrlAndRefer="https://kyfw.12306.cn/otn/leftTicket/init";
    

    
}
