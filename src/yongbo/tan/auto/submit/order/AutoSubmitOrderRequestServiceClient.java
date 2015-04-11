package yongbo.tan.auto.submit.order;

import java.io.IOException;
import java.net.URI;
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
import yongbo.tan.passenger.PassengerContact;

public class AutoSubmitOrderRequestServiceClient {
	
	

	public void sendAutoSubmitOrderRequest(CustomHttpClient customHttpClient) {
		
		HttpClientContext httpClientContext = CustomHttpClientContext
				.getHttpClientContext();

		CloseableHttpClient closeableHttpClient = customHttpClient
				.getCustomHttpClient();

		RequestBuilder requestBuilder = RequestBuilder.post();
		RequestBuliderUtil.addCommonHeader(requestBuilder);

		String referer = null;
		requestBuilder.setHeader(HttpHeaders.REFERER, referer);
		requestBuilder.setHeader(HttpHeaders.CONTENT_LENGTH, "0");
		URI remoteUrl = null;
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
			}
			if (jsonObjectData.isNull("normal_passengers")) {
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
	

		
		
	}

}
