package yongbo.tan.train;

public class Train {

	
	 // 列车编号
	private String train_no;

	//车次 
	private String station_train_code;
	  // 始发站编码
	private String start_station_telecode;
	// 始发站名
	private String start_station_name;
	 // 终到站编码
	private String end_station_telecode;
	// 终到站名
	private String end_station_name;
	// 查询输入经过站编码
	private String from_station_telecode;
	// 查询输入经过站名
	private String from_station_name;
	//查询输入到站编码  
	private String to_station_telecode;
	// 查询输入到站名
	private String to_station_name;
	  // 出发时间
	private String start_time;
	  // 到站时间
	private String arrive_time;
	 // 花费天数 
	private String day_difference;

	private String train_class_name;
	// 历时
	private String lishi;
	// 是否可以预定
	private String canWebBuy;

	private String lishiValue;

	private String control_train_day;

	private String start_train_date;

	private String seat_feature;

	private String yp_ex;

	private String train_seat_feature;

	private String location_code;

	private String from_station_no;

	private String to_station_no;

	private String control_day;

	// 出票时间点hhmm 
	private String sale_time;

	private String is_support_card;

  //硬座
	private String yz_num;
  //软座
	private String rz_num;
//硬卧
	private String yw_num;
//软卧
	private String rw_num;
//高级软卧
	private String gr_num;
	//一等座
	private String zy_num;
	//二等座
	private String ze_num;
	//特等座
	private String tz_num;
  //高级动卧
	private String gg_num;

	//动卧
	private String yb_num;

	//无座
	private String wz_num;

	//其它
	private String qt_num;

	//商务座
	private String swz_num;

	//"预定请求令牌字符串", 
	private String secretStr;

	private String buttonTextInfo;

	public Train() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getTrain_no() {
		return train_no;
	}

	public void setTrain_no(String trainNo) {
		train_no = trainNo;
	}

	public String getStation_train_code() {
		return station_train_code;
	}

	public void setStation_train_code(String stationTrainCode) {
		station_train_code = stationTrainCode;
	}

	public String getStart_station_telecode() {
		return start_station_telecode;
	}

	public void setStart_station_telecode(String startStationTelecode) {
		start_station_telecode = startStationTelecode;
	}

	public String getStart_station_name() {
		return start_station_name;
	}

	public void setStart_station_name(String startStationName) {
		start_station_name = startStationName;
	}

	public String getEnd_station_telecode() {
		return end_station_telecode;
	}

	public void setEnd_station_telecode(String endStationTelecode) {
		end_station_telecode = endStationTelecode;
	}

	public String getEnd_station_name() {
		return end_station_name;
	}

	public void setEnd_station_name(String endStationName) {
		end_station_name = endStationName;
	}

	public String getFrom_station_telecode() {
		return from_station_telecode;
	}

	public void setFrom_station_telecode(String fromStationTelecode) {
		from_station_telecode = fromStationTelecode;
	}

	public String getFrom_station_name() {
		return from_station_name;
	}

	public void setFrom_station_name(String fromStationName) {
		from_station_name = fromStationName;
	}

	public String getTo_station_telecode() {
		return to_station_telecode;
	}

	public void setTo_station_telecode(String toStationTelecode) {
		to_station_telecode = toStationTelecode;
	}

	public String getTo_station_name() {
		return to_station_name;
	}

	public void setTo_station_name(String toStationName) {
		to_station_name = toStationName;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String startTime) {
		start_time = startTime;
	}

	public String getArrive_time() {
		return arrive_time;
	}

	public void setArrive_time(String arriveTime) {
		arrive_time = arriveTime;
	}

	public String getDay_difference() {
		return day_difference;
	}

	public void setDay_difference(String dayDifference) {
		day_difference = dayDifference;
	}

	public String getTrain_class_name() {
		return train_class_name;
	}

	public void setTrain_class_name(String trainClassName) {
		train_class_name = trainClassName;
	}

	public String getLishi() {
		return lishi;
	}

	public void setLishi(String lishi) {
		this.lishi = lishi;
	}

	public String getCanWebBuy() {
		return canWebBuy;
	}

	public void setCanWebBuy(String canWebBuy) {
		this.canWebBuy = canWebBuy;
	}

	public String getLishiValue() {
		return lishiValue;
	}

	public void setLishiValue(String lishiValue) {
		this.lishiValue = lishiValue;
	}

	public String getControl_train_day() {
		return control_train_day;
	}

	public void setControl_train_day(String controlTrainDay) {
		control_train_day = controlTrainDay;
	}

	public String getStart_train_date() {
		return start_train_date;
	}

	public void setStart_train_date(String startTrainDate) {
		start_train_date = startTrainDate;
	}

	public String getSeat_feature() {
		return seat_feature;
	}

	public void setSeat_feature(String seatFeature) {
		seat_feature = seatFeature;
	}

	public String getYp_ex() {
		return yp_ex;
	}

	public void setYp_ex(String ypEx) {
		yp_ex = ypEx;
	}

	public String getTrain_seat_feature() {
		return train_seat_feature;
	}

	public void setTrain_seat_feature(String trainSeatFeature) {
		train_seat_feature = trainSeatFeature;
	}

	public String getLocation_code() {
		return location_code;
	}

	public void setLocation_code(String locationCode) {
		location_code = locationCode;
	}

	public String getFrom_station_no() {
		return from_station_no;
	}

	public void setFrom_station_no(String fromStationNo) {
		from_station_no = fromStationNo;
	}

	public String getTo_station_no() {
		return to_station_no;
	}

	public void setTo_station_no(String toStationNo) {
		to_station_no = toStationNo;
	}

	public String getControl_day() {
		return control_day;
	}

	public void setControl_day(String controlDay) {
		control_day = controlDay;
	}

	public String getSale_time() {
		return sale_time;
	}

	public void setSale_time(String saleTime) {
		sale_time = saleTime;
	}

	public String getIs_support_card() {
		return is_support_card;
	}

	public void setIs_support_card(String isSupportCard) {
		is_support_card = isSupportCard;
	}

	public String getYz_num() {
		return yz_num;
	}

	public void setYz_num(String yzNum) {
		yz_num = yzNum;
	}

	public String getRz_num() {
		return rz_num;
	}

	public void setRz_num(String rzNum) {
		rz_num = rzNum;
	}

	public String getYw_num() {
		return yw_num;
	}

	public void setYw_num(String ywNum) {
		yw_num = ywNum;
	}

	public String getRw_num() {
		return rw_num;
	}

	public void setRw_num(String rwNum) {
		rw_num = rwNum;
	}

	public String getGr_num() {
		return gr_num;
	}

	public void setGr_num(String grNum) {
		gr_num = grNum;
	}

	public String getZy_num() {
		return zy_num;
	}

	public void setZy_num(String zyNum) {
		zy_num = zyNum;
	}

	public String getZe_num() {
		return ze_num;
	}

	public void setZe_num(String zeNum) {
		ze_num = zeNum;
	}

	public String getTz_num() {
		return tz_num;
	}

	public void setTz_num(String tzNum) {
		tz_num = tzNum;
	}

	public String getGg_num() {
		return gg_num;
	}

	public void setGg_num(String ggNum) {
		gg_num = ggNum;
	}

	public String getYb_num() {
		return yb_num;
	}

	public void setYb_num(String ybNum) {
		yb_num = ybNum;
	}

	public String getWz_num() {
		return wz_num;
	}

	public void setWz_num(String wzNum) {
		wz_num = wzNum;
	}

	public String getQt_num() {
		return qt_num;
	}

	public void setQt_num(String qtNum) {
		qt_num = qtNum;
	}

	public String getSwz_num() {
		return swz_num;
	}

	public void setSwz_num(String swzNum) {
		swz_num = swzNum;
	}

	public String getSecretStr() {
		return secretStr;
	}

	public void setSecretStr(String secretStr) {
		this.secretStr = secretStr;
	}

	public String getButtonTextInfo() {
		return buttonTextInfo;
	}

	public void setButtonTextInfo(String buttonTextInfo) {
		this.buttonTextInfo = buttonTextInfo;
	}

}
