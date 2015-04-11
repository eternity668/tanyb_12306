var k = submitForm();

function autoSubmitOrderRequest(dynamicKeyValue,train_date,purpose_codes,fromStationText) {
	var d = dynamicKeyValue.split(':::');
	var p = d[0].split(',-,')[0];
	var f = d[0].split(',-,')[1];
	var q = d[1].split(',-,')[0];
	var g = d[1].split(',-,')[1];
	var n = escape(p)
			+ '='
			+ escape(f)
			+ '&'
			+ q
			+ '='
			+ g
			+ '&secretStr='
			+ r
			+ '&train_date='
			+ train_date
			+ '&tour_flag='
			+ 'dc'
			+ '&purpose_codes='
			+ purpose_codes
			+ '&query_from_station_name='
			+ $('#fromStationText').val()
			+ '&query_to_station_name='
			+ fromStationText
			+ '&'
			+ '' //                            var t = checkusermdId != undefined ? '&_json_att=' + encodeURIComponent(checkusermdId)  : '';
			+ '&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr='
			+ getpassengerTicketsForAutoSubmit() + '&oldPassengerStr='
			+ getOldPassengersForAutoSubmit();
	return n;
}
 
                

tickets_info.push(new b9('sdAdd_' + cD(), j, b, f, e, passengerChecked[k].passenger_name, passengerChecked[k].passenger_id_type_code, passengerChecked[k].passenger_id_type_name, passengerChecked[k].passenger_id_no, passengerChecked[k].mobile_no));

   function getpassengerTicketsForAutoSubmit() {
        var b = '';
        for (var a = 0; a < tickets_info.length; a++) {
            var d = '';
            if ('WZ' == tickets_info[a].seat_type) {
                d = eo(es())
            } else {
                d = tickets_info[a].seat_type
            }
            var c = d + ',0,' + tickets_info[a].ticket_type + ',' + tickets_info[a].name + ',' + tickets_info[a].id_type + ',' + tickets_info[a].id_no + ',' + (tickets_info[a].phone_no == null ? '' : tickets_info[a].phone_no) + ',N';
            b += c + '_'
        }
        return b.substring(0, b.length - 1)
    };
    getOldPassengersForAutoSubmit = function () {
        var b = '';
        for (var c = 0; c < passengerChecked.length; c++) {
            var a = passengerChecked[c].passenger_name + ',' + passengerChecked[c].passenger_id_type_code + ',' + passengerChecked[c].passenger_id_no + ',' + passengerChecked[c].passenger_type;
            b += a + '_'
        }
        return b
    };
