package yongbo.tan.query;

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

public class QueryClient {

	public static List<JSONObject> query(String queryUrl) {

		HttpClientContext httpClientContext = CustomHttpClientContext
				.getHttpClientContext();

		CustomHttpClient customHttpClient = new CustomHttpClient();
		CloseableHttpClient closeableHttpClient = customHttpClient
				.getCustomHttpClient();

		RequestBuilder requestBuilder = RequestBuilder.get();
		RequestBuliderUtil.addCommonHeader(requestBuilder);

		requestBuilder.addHeader(HttpHeaders.REFERER,
				QueryUrl.queryViewPageUrlAndRefer);
		requestBuilder.addHeader(HttpHeaders.CONTENT_LENGTH, "0");
//		requestBuilder.setUri(formQueryString(QueryUrl.queryUrl,
//				new BaseQueryTrainInfo()));
		requestBuilder.setUri(queryUrl);
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
			 System.err.println(result);
			JSONObject jsonObject = new JSONObject(result);

			Boolean status=jsonObject.getBoolean("status");
			if(!status){
				System.err.println("状态不对，请检查输入参数");
				return null;
			}
			JSONArray jsonObjectData = jsonObject.getJSONArray("data");
			ArrayList<JSONObject> canBuyQueryTrain = new ArrayList<JSONObject>();
			for (int i = 0; i < jsonObjectData.length(); i++) {
				JSONObject queryTrainResult = jsonObjectData.getJSONObject(i);
				if (!queryTrainResult.isNull("secretStr")) {
					String secretStr = queryTrainResult.getString("secretStr");
					JSONObject queryJsonObject = queryTrainResult
							.getJSONObject("queryLeftNewDTO");
					if (!secretStr.trim().equals("")
							&& queryJsonObject.getString("canWebBuy").equals(
									"Y")) {

						canBuyQueryTrain.add(queryTrainResult);
					}

				}
				;
			}

			return canBuyQueryTrain;
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
		return new ArrayList<JSONObject>();

	}

	public static boolean testQuery(String queryUrl){


		HttpClientContext httpClientContext = CustomHttpClientContext
				.getHttpClientContext();

		CustomHttpClient customHttpClient = new CustomHttpClient();
		CloseableHttpClient closeableHttpClient = customHttpClient
				.getCustomHttpClient();

		RequestBuilder requestBuilder = RequestBuilder.get();
		RequestBuliderUtil.addCommonHeader(requestBuilder);

		requestBuilder.addHeader(HttpHeaders.REFERER,
				QueryUrl.queryViewPageUrlAndRefer);
//		requestBuilder.setUri(formQueryString(QueryUrl.queryUrl,
//				new BaseQueryTrainInfo()));
		requestBuilder.setUri(queryUrl);
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
			String status=jsonObject.getString("status");
			if(status.equals("true")){
				return true;
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

		return false;
		
	}
	
	public static String formQueryString(String url,
			BaseQueryTrainInfo baseQueryTrainInfo) {

		if (!url.endsWith("?")) {
			url += "?";
		}

		String departTimeKey = baseQueryTrainInfo.getDepartureTimeKey();
		String departTimeValue = baseQueryTrainInfo.getDepartureTimeValue();

		String startStationKey = baseQueryTrainInfo.getStartStationKey();
		String startStationValue = baseQueryTrainInfo.getStartStationValue();

		String destinationStationKey = baseQueryTrainInfo
				.getDestinationStationKey();
		String destinationStationValue = baseQueryTrainInfo
				.getDestinationStationValue();

		String passengerKey = baseQueryTrainInfo.getPassengerStyleKey();
		String passengerValue = baseQueryTrainInfo.getPassengerStyleValue();

		url += departTimeKey + "=" + departTimeValue;
		url += "&" + startStationKey + "=" + startStationValue;
		url += "&" + destinationStationKey + "=" + destinationStationValue;
		url += "&" + passengerKey + "=" + passengerValue;
		return url;
	}

}
