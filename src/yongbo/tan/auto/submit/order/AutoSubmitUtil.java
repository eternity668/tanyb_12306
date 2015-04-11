package yongbo.tan.auto.submit.order;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

import yongbo.tan.dynamicFormParam.DynamicFormParams;
import yongbo.tan.passenger.PassengerContact;
import yongbo.tan.passenger.Purpose_Codes;
import yongbo.tan.ticket.Ticket_Info;
import yongbo.tan.tour.Tour;
import yongbo.tan.train.Train;

public class AutoSubmitUtil {

	
	//function eo(a) 
	public static String eo(String seatCode){
		 
		        String b = "";
		        if (seatCode.equals("ZY")) {
		            b = "M";
		        }
		        if (seatCode.equals("ZE")) {
		            b = "O";
		        }
		        if (seatCode.equals("SWZ")) {
		            b = "9";
		        }
		        if (seatCode.equals("TZ")) {
		            b = "P";
		        }
		        if (seatCode.equals("YZ")) {
		            b = "1";
		        }
		        if (seatCode.equals("RZ")) {
		            b = "2";
		        }
		        if (seatCode.equals("YW")) {
		            b = "3";
		        }
		        if (seatCode.equals("RW")) {
		            b = "4";
		        }
		        if (seatCode.equals("GR")) {
		            b = "6";
		        }
		        if (seatCode.equals("WZ")) {
		            b = "WZ";
		        }
		        if (seatCode.equals("SRRB")) {
		            b = "F";
		        }
		        if (seatCode.equals("YYRW")) {
		            b = "A";
		        }
		        return b;
	}
	//function cO(a)
	public static String cO(String seatCode){
		 
        String b = "";
        if (seatCode.equals("ZY")) {
            b = "一等座";
        }
        if (seatCode.equals("ZE")) {
            b = "二等座";
        }
        if (seatCode.equals("SWZ")) {
            b = "商务座";
        }
        if (seatCode.equals("TZ")) {
            b = "特等座";
        }
        if (seatCode.equals("YZ")) {
            b = "硬座";
        }
        if (seatCode.equals("RZ")) {
            b = "软座";
        }
        if (seatCode.equals("YW")) {
            b = "硬卧";
        }
        if (seatCode.equals("RW")) {
            b = "软卧";
        }
        if (seatCode.equals("GR")) {
            b = "高级软卧";
        }
        if (seatCode.equals("WZ")) {
            b = "无座";
        }
        if (seatCode.equals("SRRB")) {
            b = "动卧";
        }
        if (seatCode.equals("YYRW")) {
            b = "高级动卧";
        }
        return b;
		
	}
	//function es()
	public static String  es(Train trian) {
        String e = trian.getYz_num();//cM.queryLeftNewDTO.yz_num;
        String h = trian.getRz_num();//cM.queryLeftNewDTO.rz_num;
        String a = trian.getYw_num();// cM.queryLeftNewDTO.yw_num;
        String c = trian.getRw_num();//cM.queryLeftNewDTO.rw_num;
        String b = trian.getGr_num();//cM.queryLeftNewDTO.gr_num;
        String d = trian.getZe_num();// queryLeftNewDTO.ze_num;
        String k =trian.getZy_num();// cM.queryLeftNewDTO.zy_num;
        String j = trian.getTz_num();//cM.queryLeftNewDTO.tz_num;
        String g = trian.getSwz_num();//cM.queryLeftNewDTO.swz_num;
        String l = trian.getWz_num();//cM.queryLeftNewDTO.wz_num;
        String f = "";
        if ( !e.equals("--")) {
            f = "YZ";
            return f;
        }
        if (!d.equals("--")) {
            f = "ZE";
            return f;
        }
        if (!a.equals("--")) {
            f = "YW";
            return f;
        }
        if (!k.equals("--")) {
            f = "ZY";
            return f;
        }
        if (!h.equals("--")) {
            f = "RZ";
            return f;
        }
        if (!c.equals("--")) {
            f = "RW";
            return f;
        }
        if (!j.equals("--")) {
            f = "TZ";
            return f;
        }
        if (!b.equals("--")) {
            f = "GR";
            return f;
        }
        if (!g.equals("--")) {
            f = "SWZ";
            return f;
        }
        if (!l.equals("--")) {
            f = "WZ";
            return f;
        }
        return null;
    }
	
	public static String cD(Ticket_Info[] tickets_info){
		
	    if (tickets_info.length < 1) {
            return tickets_info.length+"";
        } else {
            int b = 0;
            for (int c = 0; c < tickets_info.length; c++) {
                int a = Integer.parseInt(tickets_info[c].getOnly_id().split("_") [1]);
                if (a > b) {
                    b = a;
                }
            }
            return (b + 1)+"";
        }
		 
	}
	
 
    public static String getOldPassengersForAutoSubmit (PassengerContact[]passengerChecked) {
        String b = "";
        for (int c = 0; c < passengerChecked.length; c++) {
            String a = passengerChecked[c].getPassenger_name()+ ',' + passengerChecked[c].getPassenger_id_type_code() + ',' + passengerChecked[c].getPassenger_id_no() + ',' + passengerChecked[c].getPassenger_type();
            b += a + '_';
        }
        return b;
    }
    
     public static String getpassengerTicketsForAutoSubmit(Ticket_Info[] tickets_info,Train trian ) {
        String b = "";
        for (int a = 0; a < tickets_info.length; a++) {
            String d = "";
            if ("WZ".equals(tickets_info[a].getSeat_type())) {
                d = eo(es(trian));
            } else {
                d = tickets_info[a].getSeat_type();
            }
            String c = d + ",0," + tickets_info[a].getTicket_type() + ',' + tickets_info[a].getName() + ',' + tickets_info[a].getId_type() + ',' + tickets_info[a].getId_no() + ',' + (tickets_info[a].getPhone_no() == null ? "" : tickets_info[a].getPhone_no()) + ",N";
            b += c + '_';
        }
        return b.substring(0, b.length() - 1);
    }
    
     /**
      * 
      * 
      * 
  passengerTicketStr是以下划线"_"分隔当每一个乘客信息组成的字符串，对应每个乘客信息字符串组成如下：

    座位编号,0,票类型,乘客名,证件类型,证件号,手机号码,保存常用联系人(Y或N)  

同样oldPassengersStr也是以下划线"_"分隔每个乘客信息组成的字符串，对应每个乘客信息字符串组成如下：


    乘客名,证件类型,证件号,乘客类型  
      * 
      * @param dynamicFormParams
      * @param train
      * @param tour
      * @param purpose_codes
      * @param tickets_info
      * @param passengerChecked
      * @return
      */
//     function cD() {
//         if (tickets_info.length < 1) {
//             return tickets_info.length
//         } else {
//             var b = 0;
//             for (var c = 0; c < tickets_info.length; c++) {
//                 var a = Number(tickets_info[c].only_id.split('_') [1]);
//                 if (a > b) {
//                     b = a
//                 }
//             }
//             return b + 1
//         }
//     }
//     j = eo(g);
//     b = cO(g);
//     f = passengerChecked[p].passenger_type;
//     if (!f || '' == f) {
//         f = '1'
//     }
//     if (f == '1') {
//         e = '成人票'
//     } else {
//         if (f == '2') {
//             e = '儿童票'
//         } else {
//             if (f == '3') {
//                 e = '学生票'
//             } else {
//                 if (f == '4') {
//                     e = '残军票'
//                 }
//             }
//         }
//     }
     //  tickets_info.push(new b9('sdAdd_' + cD(), j, b, f, e, passengerChecked[k].passenger_name, passengerChecked[k].passenger_id_type_code, passengerChecked[k].passenger_id_type_name, passengerChecked[k].passenger_id_no, passengerChecked[k].mobile_no));
//     function b9(a, f, e, c, d, g, j, k, b, h) {
//         this.only_id = a,
//         this.seat_type = f;
//         this.seat_type_name = e;
//         this.ticket_type = c,
//         this.ticket_type_name = d;
//         this.name = g;
//         this.id_type = j;
//         this.id_type_name = k;
//         this.id_no = b;
//         this.phone_no = h;
//         this.toString = function () {
//             return this.name + '_' + this.id_type + '_' + this.id_no + '_' + this.phone_no
//         }
//     }

     public static List<NameValuePair> autoSubmitOrderRequest(DynamicFormParams dynamicFormParams,Train train,Tour tour,Purpose_Codes purpose_codes,Ticket_Info[] tickets_info,PassengerContact[]passengerChecked) {
    	
    	 List<NameValuePair> signInFormParams = new ArrayList<NameValuePair>();
    	 Set<String>dynamicKeys= dynamicFormParams.keySet();
    	 Iterator<String> iterator= dynamicKeys.iterator();
    	 while(iterator.hasNext()){
    		 String key=iterator.next();
    		 String value=dynamicFormParams.get(key);
    		 if(!key.equals("myversion")){
        	     signInFormParams.add(new BasicNameValuePair(StringEscapeUtils.escapeEcmaScript(key), StringEscapeUtils.escapeEcmaScript(value)));  
    		 }else{
        	     signInFormParams.add(new BasicNameValuePair(key, value));  
    		 }
    	 }
    	 signInFormParams.add(new BasicNameValuePair("secretStr",train.getSecretStr()));
    	 signInFormParams.add(new BasicNameValuePair("train_date",tour.getTrain_date()));
    	 signInFormParams.add(new BasicNameValuePair("tour_flag",tour.getTourType().getLabel()));
    	 signInFormParams.add(new BasicNameValuePair("purpose_codes",purpose_codes.getLabel()));
    	 signInFormParams.add(new BasicNameValuePair("query_from_station_name",tour.getQuery_from_station_name()));
    	 signInFormParams.add(new BasicNameValuePair("query_to_station_name",tour.getQuery_to_station_name()));
    	 signInFormParams.add(new BasicNameValuePair("cancel_flag","2"));
    	 signInFormParams.add(new BasicNameValuePair("bed_level_order_num","000000000000000000000000000000"));
    	 signInFormParams.add(new BasicNameValuePair("passengerTicketStr",getpassengerTicketsForAutoSubmit(tickets_info, train)));
    	 signInFormParams.add(new BasicNameValuePair("oldPassengerStr",getOldPassengersForAutoSubmit(passengerChecked)));

    	 return signInFormParams;
//    	 var d = dynamicKeyValue.split(':::');
//     	var p = d[0].split(',-,')[0];
//     	var f = d[0].split(',-,')[1];
//     	var q = d[1].split(',-,')[0];
//     	var g = d[1].split(',-,')[1];
//     	var n = escape(p)
//     			+ '='
//     			+ escape(f)
//     			+ '&'
//     			+ q
//     			+ '='
//     			+ g
//     			+ '&secretStr='
//     			+ r
//     			+ '&train_date='
//     			+ train_date
//     			+ '&tour_flag='
//     			+ 'dc'
//     			+ '&purpose_codes='
//     			+ purpose_codes
//     			+ '&query_from_station_name='
//     			+ $('#fromStationText').val()
//     			+ '&query_to_station_name='
//     			+ fromStationText
//     			+ '&'
//     			+ '' //                            var t = checkusermdId != undefined ? '&_json_att=' + encodeURIComponent(checkusermdId)  : '';
//     			+ '&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr='
//     			+ getpassengerTicketsForAutoSubmit() + '&oldPassengerStr='
//     			+ getOldPassengersForAutoSubmit();
//     	return n;
     }
      
     
}
