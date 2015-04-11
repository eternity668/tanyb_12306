package yongbo.tan.autoquery;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JCheckBox;
import javax.swing.JOptionPane;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;

import yongbo.tan.auto.submit.order.AutoSubmitFormParams;
import yongbo.tan.passenger.PassengerContact;
import yongbo.tan.query.BaseQueryTrainInfo;
import yongbo.tan.query.QueryClient;
import yongbo.tan.query.QueryUrl;
import yongbo.tan.seat.Seat;
import yongbo.tan.signin.DynamicJsFormInput;
import yongbo.tan.station.Station;
import yongbo.tan.station.StationJSFileParser;

public class QueryTicketButtonAction implements ActionListener {

	private static List<Station> allStation = StationJSFileParser
			.parserNativeFile();

	private QueryDialog queryDialog;

	public QueryTicketButtonAction(QueryDialog queryDialog) {
		this.queryDialog = queryDialog;

	}

	@Override
	public void actionPerformed(ActionEvent e) {

		String startTrainStationsInfo = queryDialog.getStartTrainStation()
				.getText();

		if (StringUtils.isBlank(startTrainStationsInfo)) {
			showErrorDialog("始发站点输入为空，请输入！");
			return;
		}

		String endTrainStationsInfo = queryDialog.getEndTrainStation()
				.getText();

		if (StringUtils.isBlank(endTrainStationsInfo)) {
			showErrorDialog("终点站输入为空，请输入！");
			return;
		}

		int startStationIndex = -1;
		int endStationIndex = -1;

		for (int i = 0; i < allStation.size(); i++) {
			Station station = allStation.get(i);
			if (startTrainStationsInfo.equals(station.getChineseCharacter())
					|| startTrainStationsInfo.equals(station.getCoding())
					|| startTrainStationsInfo.equals(station.getAbbreviation())
					|| startTrainStationsInfo.equals(station.getSpelling())

			) {
				startStationIndex = i;
				break;
			}

		}

		for (int i = 0; i < allStation.size(); i++) {
			Station station = allStation.get(i);
			if (endTrainStationsInfo.equals(station.getChineseCharacter())
					|| endTrainStationsInfo.equals(station.getCoding())
					|| endTrainStationsInfo.equals(station.getAbbreviation())
					|| endTrainStationsInfo.equals(station.getSpelling())

			) {
				endStationIndex = i;
				break;
			}
		}

		if (startStationIndex == -1 || endStationIndex == -1) {
			showErrorDialog("出发地或目的地输入有误，请重新输入！");
			return;
		}

		String departureTime = queryDialog.getDepartureTime().getText();
		if (StringUtils.isBlank(departureTime)) {
			showErrorDialog("出发时间输入为空，请输入！");
			return;
		}
		if (departureTime.split("-").length != 3) {
			showErrorDialog("出发时间输入不对，请输入！");
			return;
		};

		AutoSubmitFormParams autoSubmitFormParams=new AutoSubmitFormParams();
		
		
		autoSubmitFormParams.setTrain_dateValue(departureTime);
		DynamicJsFormInput dynamicJsFormInput=queryDialog.getDynamicJsFormInput();
		autoSubmitFormParams.setDynamicKey(StringEscapeUtils.escapeEcmaScript(dynamicJsFormInput.getKey()));
		autoSubmitFormParams.setDynamicValue(StringEscapeUtils.escapeEcmaScript(dynamicJsFormInput.getValue()));
		
		autoSubmitFormParams.setPurpose_codesValue(queryDialog.getSelectPassengerStyle());
		
		int passengerIndex = queryDialog.getPassenger().getSelectedIndex();

		PassengerContact selectPassenger = queryDialog.getPassengerContacts()
				.get(passengerIndex);

		
		
		
		BaseQueryTrainInfo baseQueryTrainInfo = new BaseQueryTrainInfo();

		Station startStation = allStation.get(startStationIndex);
		autoSubmitFormParams.setQuery_from_station_nameValue(startStation.getChineseCharacter());
		System.err.println("startStation = " + startStation.toString());
		Station endStation = allStation.get(endStationIndex);
		autoSubmitFormParams.setQuery_to_station_nameValue(endStation.getChineseCharacter());
		
		System.err.println("endStation = " + endStation.toString());
		
		baseQueryTrainInfo.setPassengerStyleValue(allStation.get(
				startStationIndex).getCoding());
		baseQueryTrainInfo.setDestinationStationValue(allStation.get(
				endStationIndex).getCoding());

		baseQueryTrainInfo.setPassengerStyleValue(queryDialog
				.getSelectPassengerStyle());
		baseQueryTrainInfo.setDepartureTimeValue(departureTime);
		String queryUrl = QueryClient.formQueryString(QueryUrl.queryUrl,
				baseQueryTrainInfo);
		List<JSONObject> jsonObjects = QueryClient.query(queryUrl);
		if (jsonObjects == null) {
			return;
		}
		while (jsonObjects.isEmpty()) {
			jsonObjects = QueryClient.query(queryUrl);
		}
		List<Seat> seats = new ArrayList<Seat>();
		List<JCheckBox> seatSelections = queryDialog.getSeatSelections();
		for (JCheckBox jCheckBox : seatSelections) {
			if (jCheckBox.isSelected()) {
				seats.add(new Seat(jCheckBox.getText()));
			}
		}
		
		boolean isExist = false;
		while (!isExist) {

			for (int i = 0; i < jsonObjects.size(); i++) {

				JSONObject jsonObject = jsonObjects.get(i);
				String secretStr = jsonObject.getString("secretStr");
				autoSubmitFormParams.setSecretStrValue(secretStr);
				JSONObject queryLeftNewDTO = jsonObject
						.getJSONObject("queryLeftNewDTO");
				if (!seats.isEmpty()) {
					for (int j = 0; j < seats.size(); j++) {
						Seat seat = seats.get(j);
						String number = queryLeftNewDTO.getString(seat
								.getNumberCode());
						if (!number.equals("--") && !number.equals("无")) {
							isExist = true;
							String passengerTickets= seat.getOneCode()+",O,"
							+"1,"//成人票为1
							+ selectPassenger.getPassenger_name()+","
							+selectPassenger.getPassenger_id_type_code()+","
							+selectPassenger.getPassenger_id_no()+","
							+selectPassenger.getPhone_no()+",N"
							;
							autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
							
							String oldPassengerTickets=selectPassenger.getPassenger_name()+","
							+selectPassenger.getPassenger_id_type_code()+","
							+selectPassenger.getPassenger_id_no()+","
							+selectPassenger.getPassenger_type()
							+"_";
							autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
							break;
						}
					}
					if (isExist) {
						break;
					}
				} else {
					String gg = queryLeftNewDTO.getString("gg_num");
					if (!(gg.equals("--") && gg.equals("无"))) {
						Seat seat=new Seat("gg_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String qr = queryLeftNewDTO.getString("gr_num");
					if (!(qr.equals("--") && qr.equals("无"))) {
						Seat seat=new Seat("gr_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String qt = queryLeftNewDTO.getString("qt_num");
					if (!(qt.equals("--") && qt.equals("无"))) {
						Seat seat=new Seat("qt_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String rw = queryLeftNewDTO.getString("rw_num");
					if (!(rw.equals("--") && rw.equals("无"))) {
						Seat seat=new Seat("rw_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						
						isExist = true;
						break;
					}
					String rz = queryLeftNewDTO.getString("rz_num");
					if (!(rz.equals("--") && rz.equals("无"))) {
						Seat seat=new Seat("rz_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String tz = queryLeftNewDTO.getString("tz_num");
					if (!(tz.equals("--") && tz.equals("无"))) {
						Seat seat=new Seat("tz_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						
						isExist = true;
						break;
					}
					String wz = queryLeftNewDTO.getString("wz_num");
					if (!(wz.equals("--") && wz.equals("无"))) {
						Seat seat=new Seat("wz_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String yb = queryLeftNewDTO.getString("yb_num");
					if (!(yb.equals("--") && yb.equals("无"))) {
						Seat seat=new Seat("yb_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String yw = queryLeftNewDTO.getString("yw_num");
					if (!(yw.equals("--") && yw.equals("无"))) {
						Seat seat=new Seat("yw_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String yz = queryLeftNewDTO.getString("yz_num");
					if (!(yz.equals("--") && yz.equals("无"))) {
						Seat seat=new Seat("yz_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets); 
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String ze = queryLeftNewDTO.getString("ze_num");
					if (!(ze.equals("--") && ze.equals("无"))) {
						Seat seat=new Seat("ze_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String zy = queryLeftNewDTO.getString("zy_num");
					if (!(zy.equals("--") && zy.equals("无"))) {
						Seat seat=new Seat("zy_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets); 
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						isExist = true;
						break;
					}
					String swz = queryLeftNewDTO.getString("swz_num");
					if (!(swz.equals("--") && swz.equals("无"))) {
						Seat seat=new Seat("swz_num");
						String passengerTickets= seat.getOneCode()+",O,"
						+"1,"//成人票为1
						+ selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPhone_no()+",N"
						;
						autoSubmitFormParams.setPassengerTicketStrValue(passengerTickets);
						
						String oldPassengerTickets=selectPassenger.getPassenger_name()+","
						+selectPassenger.getPassenger_id_type_code()+","
						+selectPassenger.getPassenger_id_no()+","
						+selectPassenger.getPassenger_type()
						+"_";
						autoSubmitFormParams.setOldPassengerStrValue(oldPassengerTickets);
						
						isExist = true;
						break;
					}

				}

			}
            if(isExist){
            	break;
            }else{
            	jsonObjects = QueryClient.query(queryUrl);	
            	while (jsonObjects.isEmpty()) {
        			jsonObjects = QueryClient.query(queryUrl);
        		}
            }
		}

		
		
		
	}

	private void showErrorDialog(String contentDescription) {
		JOptionPane.showMessageDialog(null, contentDescription, "警告",
				JOptionPane.ERROR_MESSAGE);
	}

}
