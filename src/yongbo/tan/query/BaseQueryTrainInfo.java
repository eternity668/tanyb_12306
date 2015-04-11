package yongbo.tan.query;

/**
 * Copyright  2014年12月23日  by yong bo tan
 *
 *       All Rights Reserved
 *
 *      @Package yongbo.tan.query  
 *      @Title: QueryTrainInfo.java  
 *      @author yongbo.tan
 *      @date 2014年12月23日 下午9:18:34 
 */

/**
 * leftTicketDTO.train_date=2014-01-23 // 出发日期 leftTicketDTO.from_station=BJP //
 * 出发站编码 leftTicketDTO.to_station=SHH // 到达站编码 purpose_codes=ADULT //
 * 旅客编码：成人为ADULT,学生为:0X00
 * 
 */
public class BaseQueryTrainInfo
{
    /**
     * 火车的目的地 必须
     */
    private String destinationStationKey = "leftTicketDTO.to_station";
    /**
     * 对应地址的编码
     */
    private String destinationStationValue;

    /**
     * 火车的出发地 必须
     */
    private String startStationKey = "leftTicketDTO.from_station";

    private String startStationValue;
    /**
     * 火车的出发时间 为具体的天 必须
     * 
     */
    private String departureTimeKey = "leftTicketDTO.train_date";

    private String departureTimeValue;

    /**
     * 旅客类型
     */
    private String passengerStyleKey = "purpose_codes";
    /**
     * 旅客类型的值
     */
    private String passengerStyleValue;

    public BaseQueryTrainInfo(){
	
    }

	public BaseQueryTrainInfo(String destinationStationKey,
			String destinationStationValue, String startStationKey,
			String atartStationValue, String departureTimeKey,
			String departureTimeValue, String passengerStyleKey,
			String passengerStyleValue) {
		super();
		this.destinationStationKey = destinationStationKey;
		this.destinationStationValue = destinationStationValue;
		this.startStationKey = startStationKey;
		this.startStationValue = atartStationValue;
		this.departureTimeKey = departureTimeKey;
		this.departureTimeValue = departureTimeValue;
		this.passengerStyleKey = passengerStyleKey;
		this.passengerStyleValue = passengerStyleValue;
	}

	public BaseQueryTrainInfo(String destinationStationValue,
			String atartStationValue, String departureTimeValue,
			String passengerStyleValue) {
		super();
		this.destinationStationValue = destinationStationValue;
		this.startStationValue = atartStationValue;
		this.departureTimeValue = departureTimeValue;
		this.passengerStyleValue = passengerStyleValue;
	}

	public String getDestinationStationKey() {
		return destinationStationKey;
	}

	public void setDestinationStationKey(String destinationStationKey) {
		this.destinationStationKey = destinationStationKey;
	}

	public String getDestinationStationValue() {
		return destinationStationValue;
	}

	public void setDestinationStationValue(String destinationStationValue) {
		this.destinationStationValue = destinationStationValue;
	}

	public String getStartStationKey() {
		return startStationKey;
	}

	public void setStartStationKey(String startStationKey) {
		this.startStationKey = startStationKey;
	}


	public String getStartStationValue() {
		return startStationValue;
	}

	public void setStartStationValue(String startStationValue) {
		this.startStationValue = startStationValue;
	}

	public String getDepartureTimeKey() {
		return departureTimeKey;
	}

	public void setDepartureTimeKey(String departureTimeKey) {
		this.departureTimeKey = departureTimeKey;
	}

	public String getDepartureTimeValue() {
		return departureTimeValue;
	}

	public void setDepartureTimeValue(String departureTimeValue) {
		this.departureTimeValue = departureTimeValue;
	}

	public String getPassengerStyleKey() {
		return passengerStyleKey;
	}

	public void setPassengerStyleKey(String passengerStyleKey) {
		this.passengerStyleKey = passengerStyleKey;
	}

	public String getPassengerStyleValue() {
		return passengerStyleValue;
	}

	public void setPassengerStyleValue(String passengerStyleValue) {
		this.passengerStyleValue = passengerStyleValue;
	}
    
    
	
	
    
}
