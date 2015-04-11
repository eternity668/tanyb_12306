package yongbo.tan.auto.submit.order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.apache.commons.lang3.time.DateUtils;
import org.apache.commons.lang3.time.FastDateFormat;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

import yongbo.tan.passenger.PassengerContact;
import yongbo.tan.passenger.Purpose_Codes;
import yongbo.tan.ticket.Ticket_Info;
import yongbo.tan.tour.Tour;
import yongbo.tan.train.Train;

public class GetQueueCountAsync {

	public static List<NameValuePair> getQueueCountAsyncFormParams(Tour tour,Train train,PassengerContact passengerContact,Purpose_Codes purposeCodes,String leftTicket,Ticket_Info ticket_info){
		
   	 List<NameValuePair> queueCountAsyncFormParams = new ArrayList<NameValuePair>();
   	queueCountAsyncFormParams.add(new BasicNameValuePair("train_date",getDateForGetQueueCountAsync(tour.getTrain_date())));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("train_no", train.getTrain_no()));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("stationTrainCode", train.getStation_train_code()));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("seatType", ticket_info.getSeat_type()));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("fromStationTelecode", train.getFrom_station_telecode()));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("toStationTelecode", train.getTo_station_telecode()));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("leftTicket", leftTicket));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("purpose_codes", purposeCodes.getLabel()));
   	queueCountAsyncFormParams.add(new BasicNameValuePair("_json_att", ""));
   return queueCountAsyncFormParams;

	}

	public static String getDateForGetQueueCountAsync(String inputDate) {
		String[] dateSpilt = inputDate.split("-");
		Date date = new Date();
		// currentDate.setYear(Integer.parseInt(dateSpilt[0]));
		date = DateUtils.setYears(date, Integer.parseInt(dateSpilt[0]));
		date = DateUtils.setMonths(date, Integer.parseInt(dateSpilt[1]));
		date = DateUtils.setDays(date, Integer.parseInt(dateSpilt[2]));
		FastDateFormat fastDateFormat = FastDateFormat.getInstance(
				"EEE'+'MMM'+'dd'+'yyyy'+'HH:mm:ss'+''GMT'Z", Locale.US);
		// SimpleDateFormat s=new
		// SimpleDateFormat("EEE MMM dd yyyy HH:mm:ss 'GMT'Z",Locale.US);
		// System.err.println(fastDateFormat.format(date));
		return fastDateFormat.format(date);
	}

}
