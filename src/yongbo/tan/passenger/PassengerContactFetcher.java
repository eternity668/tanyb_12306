package yongbo.tan.passenger;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpHeaders;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import yongbo.tan.client.CustomHttpClient;
import yongbo.tan.client.CustomHttpClientContext;
import yongbo.tan.client.RequestBuliderUtil;

public class PassengerContactFetcher {

	/**
	 *post https://kyfw.12306.cn/otn/confirmPassenger/getPassengerDTOs Host:
	 * kyfw.12306.cn User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:27.0)
	 * Gecko/20100101 Firefox/27.0 Accept: * Accept-Language:
	 * zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3 Accept-Encoding: gzip, deflate DNT: 1
	 * X-Requested-With: XMLHttpRequest Referer:
	 * https://kyfw.12306.cn/otn/leftTicket/init Cookie:
	 * JSESSIONID=610E19F506DC34BA5D7CD887A934731D;
	 * _jc_save_fromStation=%u5E7F%u5DDE%2CGGQ;
	 * _jc_save_toStation=%u957F%u6C99%2CCSQ; _jc_save_fromDate=2015-02-16;
	 * _jc_save_toDate=2015-01-27; _jc_save_wfdc_flag=dc;
	 * _jc_save_showZtkyts=true; BIGipServerotn=1608057098.50210.0000;
	 * BIGipServerportal=3134456074.17183.0000; current_captcha_type=C
	 * Connection: keep-alive Pragma: no-cache Cache-Control: no-cache
	 * Content-Length: 0
	 * 
	 */
	public static String remoteUrl = "https://kyfw.12306.cn/otn/confirmPassenger/getPassengerDTOs";

	public static String referer = "https://kyfw.12306.cn/otn/leftTicket/init";

	public List<PassengerContact> passengerContacts;

	public static List<PassengerContact> fetchPassengerContact(CustomHttpClient customHttpClient) {

		HttpClientContext httpClientContext = CustomHttpClientContext
				.getHttpClientContext();

		CloseableHttpClient closeableHttpClient = customHttpClient
				.getCustomHttpClient();

		RequestBuilder requestBuilder = RequestBuilder.post();
		RequestBuliderUtil.addCommonHeader(requestBuilder);

		requestBuilder.setHeader(HttpHeaders.REFERER, referer);
		requestBuilder.setHeader(HttpHeaders.CONTENT_LENGTH, "0");
		requestBuilder.setUri(remoteUrl);
		try {
			CloseableHttpResponse closeableHttpResponse = closeableHttpClient
					.execute(requestBuilder.build(), httpClientContext);
			StatusLine statusLine = closeableHttpResponse.getStatusLine();
			while (statusLine.getStatusCode() != 200) {
				closeableHttpResponse.close();
				closeableHttpResponse = closeableHttpClient.execute(
						requestBuilder.build(), httpClientContext);
				closeableHttpResponse.getStatusLine();
			}
			String result = EntityUtils.toString(closeableHttpResponse
					.getEntity());
			JSONObject jsonObject = new JSONObject(result);
			JSONObject jsonObjectData = jsonObject.getJSONObject("data");
			boolean isExist = jsonObjectData.getBoolean("isExist");
			if (!isExist) {
				System.err.println(jsonObjectData.getString("exMsg"));
				return null;
			}
			if (jsonObjectData.isNull("normal_passengers")) {
				return null;
			}
			JSONArray jsonArray = jsonObjectData
					.getJSONArray("normal_passengers");
			List<PassengerContact> passengers = new ArrayList<PassengerContact>();
			for (int i = 0; i < jsonArray.length(); i++) {
				JSONObject passengerJsonObject = jsonArray.getJSONObject(i);
				PassengerContact passengerContact = new PassengerContact();
				passengerContact.setPassenger_name(passengerJsonObject
						.getString("passenger_name"));
				passengerContact.setPassenger_id_type_code(passengerJsonObject
						.getString("passenger_id_type_code"));
				passengerContact.setPassenger_id_type_name(passengerJsonObject
						.getString("passenger_id_type_name"));
				passengerContact.setPassenger_id_no(passengerJsonObject
						.getString("passenger_id_no"));
				passengerContact.setPassenger_type(passengerJsonObject
						.getString("passenger_type"));
				passengerContact.setPassenger_type_name(passengerJsonObject
						.getString("passenger_type_name"));
				passengerContact.setPassenger_flag(passengerJsonObject
						.getString("passenger_flag"));
				passengers.add(passengerContact);
			}
			return passengers;
		} catch (ClientProtocolException e) {
			System.err.println("ClientProtocolException " + e.getMessage());
		} catch (IOException e) {
			System.err.println("IOException " + e.getMessage());
		} finally {
			try {
				closeableHttpClient.close();
			} catch (IOException e) {
				System.err.println("IOException " + e.getMessage());
			}
		}
		return null;
	}

	public String getRemoteUrl() {
		return remoteUrl;
	}

	public void setRemoteUrl(String remoteUrl) {
		this.remoteUrl = remoteUrl;
	}

	public List<PassengerContact> getPassengerContacts() {
		return passengerContacts;
	}

	public void setPassengerContacts(List<PassengerContact> passengerContacts) {
		this.passengerContacts = passengerContacts;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
