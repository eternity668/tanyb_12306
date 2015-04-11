package yongbo.tan.station;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;

import yongbo.tan.client.CustomHttpClient;

public class StationJSFileParser {

	private static final String url = "https://kyfw.12306.cn/otn/resources/js/framework/station_name.js";

	/**
	 * @param args
	 * @return
	 * @throws URISyntaxException
	 */
	public static void main(String[] args) {
		List<Station> stations=parserNativeFile();
		System.out.println("url is " + stations.size());
	}

	public static List<Station> parserNativeFile() {

		String url = new StationJSFileParser().getClass().getResource(
				"station_name.js").getFile();
		File file = new File(url);
		FileReader fileReader = null;
		StringBuffer stringBuffer = new StringBuffer();
		try {
			fileReader = new FileReader(file);

			BufferedReader bufferedReader = new BufferedReader(fileReader);
			String string;
			try {
				string = bufferedReader.readLine();
				stringBuffer.append(string);
//				System.out.println("url is " + string);
				while (string != null) {
					string = bufferedReader.readLine();
					stringBuffer.append(string);
				}

			} catch (IOException e) {
				System.out.println(e.getMessage());
			} finally {
				try {
					bufferedReader.close();
				} catch (IOException e) {
					System.out.println(e.getMessage());
				}
			}

		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				fileReader.close();
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
		}
		String contentString = stringBuffer.toString();
		return extractStationInfo(contentString);

	}

	private static List<Station> extractStationInfo(String contentString) {
		int index = contentString.indexOf("'");
		contentString = contentString.subSequence(index + 1,
				contentString.length() - 3).toString();
		String stations[] = contentString.split("@");
		List<Station> stationList = new ArrayList<Station>();
		Pattern pattern = Pattern.compile("\\|");
		for (int i = 1; i < stations.length; i++) {
			String string = stations[i];
//			System.out.println(stations[i]);
			String stationInfo[] = pattern.split(string);
			Station station = new Station(stationInfo[0], stationInfo[3],
					stationInfo[1], stationInfo[2]);
			stationList.add(station);
//			 System.out.println(stationInfo.length + " " + stationInfo[0] +
//			 ":"
//			 + stationInfo[3] + ":" + stationInfo[1] + ":"
//			 + stationInfo[2]);
		}
		return stationList;
	}

	public static List<Station> parserFormNetwork(
			CustomHttpClient customHttpClient, String url) {
		String remoteUrl = url;
		if (StringUtils.isBlank(url)) {
			remoteUrl = StationJSFileParser.url;
		}
		CloseableHttpClient client = customHttpClient.getCustomHttpClient();
		HttpGet request = new HttpGet(remoteUrl);
		try {

			CloseableHttpResponse response = client.execute(request);
			if (response.getStatusLine().getStatusCode() != 200) {
				return null;
			}

			String contentString = EntityUtils.toString(response.getEntity());
			response.close();
			return extractStationInfo(contentString);
		} catch (ClientProtocolException e) {
			System.out.println(e.getMessage());
		} catch (IOException e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				client.close();
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
		}
		return null;
	}

}
