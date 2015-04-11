package yongbo.tan.auto.submit.order;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

 

import org.apache.commons.lang3.time.DateUtils;
import org.apache.commons.lang3.time.FastDateFormat;

public class test {

	public static void main(String[]args){
		
	 
	   String date1="2014-2-3";
	    String[]dateSpilt= date1.split("-");
	    Date date=new Date();
//	    currentDate.setYear(Integer.parseInt(dateSpilt[0]));
	    date=  DateUtils.setYears(date, Integer.parseInt(dateSpilt[0]));
	    date= DateUtils.setMonths(date, Integer.parseInt(dateSpilt[1])-1);
	    date= DateUtils.setDays(date, Integer.parseInt(dateSpilt[2]));
	 FastDateFormat fastDateFormat=FastDateFormat.getInstance("EEE MMM dd yyyy HH:mm:ss 'GMT'Z", Locale.US);
	 SimpleDateFormat s=new SimpleDateFormat("EEE'+'MMM'+'dd'+'yyyy'+'HH:mm:ss'+''GMT'Z", Locale.US);
	 System.err.println(fastDateFormat.format(date));
	 System.err.println(s.format(date));
	}
	
}
