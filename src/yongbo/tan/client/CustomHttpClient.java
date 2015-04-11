package yongbo.tan.client;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocket;

import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.LayeredConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContexts;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.conn.ssl.X509HostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;

/**
 * Copyright 2014年12月21日 by yong bo tan
 * 
 * All Rights Reserved
 * 
 * @Package yongbo.tan.client
 * @Title: CustomHttpClient.java
 * @author yongbo.tan
 * @date 2014年12月21日 下午7:03:25
 */
public class CustomHttpClient {

	public CloseableHttpClient getCustomHttpClient() {

		CloseableHttpClient closeableHttpClient = null;
		try {
			TrustStrategy trustStrategy = null;
			SSLContext sslContext = null;
			X509HostnameVerifier x509HostnameVerifier = null;
			LayeredConnectionSocketFactory sslConnectionSocketFactory = null;
			Registry<ConnectionSocketFactory> registry = null;
			PoolingHttpClientConnectionManager poolingHttpClientConnectionManager = null;
			RequestConfig requestConfig = null;

			trustStrategy = getTrustStrategy();

			sslContext = getSSLContext(trustStrategy);

			x509HostnameVerifier = getXX509HostnameVerifier();

			// either one works
			// LayeredConnectionSocketFactory sslConnectionSocketFactory = new
			// SSLConnectionSocketFactory(sslContext, new String[]{"TLSv1"},
			// null, SSLConnectionSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER);
			sslConnectionSocketFactory = new SSLConnectionSocketFactory(
					sslContext, new String[] { "TLSv1" }, null,
					x509HostnameVerifier);

			registry = RegistryBuilder.<ConnectionSocketFactory> create()
					.register("http",
							PlainConnectionSocketFactory.getSocketFactory())
					.register("https", sslConnectionSocketFactory).build();

			poolingHttpClientConnectionManager = new PoolingHttpClientConnectionManager(
					registry);

			requestConfig = getRequestConfig();

			closeableHttpClient = HttpClientBuilder.create()
					.setDefaultRequestConfig(requestConfig).setSslcontext(
							sslContext).setHostnameVerifier(
							x509HostnameVerifier).setSSLSocketFactory(
							sslConnectionSocketFactory).setConnectionManager(
							poolingHttpClientConnectionManager)
							.build();
			
			if (closeableHttpClient != null) {
				return closeableHttpClient;
			}
		} catch (NoSuchAlgorithmException noSuchAlgorithmException) {
			System.out.println(noSuchAlgorithmException.getMessage());
		} catch (KeyStoreException keyStoreException) {
			System.out.println(keyStoreException.getMessage());
		} catch (KeyManagementException keyManagementException) {
			System.out.println(keyManagementException.getMessage());
		}
		return null;
	}

	private RequestConfig getRequestConfig() {
		RequestConfig requestConfig;
		requestConfig = RequestConfig.custom().setConnectTimeout(10000)
				// 5 seconds
				.setConnectionRequestTimeout(10000).setSocketTimeout(10000)
				.build();
		return requestConfig;
	}

	private SSLContext getSSLContext(TrustStrategy trustStrategy)
			throws NoSuchAlgorithmException, KeyManagementException,
			KeyStoreException {
		SSLContext sslContext;
		sslContext = SSLContexts.custom().useSSL().loadTrustMaterial(null,
				trustStrategy).setSecureRandom(new SecureRandom()).build();
		return sslContext;
	}

	private TrustStrategy getTrustStrategy() {
		TrustStrategy trustStrategy;
		trustStrategy = new TrustStrategy() {
			@Override
			public boolean isTrusted(X509Certificate[] xcs, String authType)
					throws CertificateException {
				return true;
			}
		};
		return trustStrategy;
	}

	private X509HostnameVerifier getXX509HostnameVerifier() {
		X509HostnameVerifier x509HostnameVerifier;
		x509HostnameVerifier = new X509HostnameVerifier() {
			@Override
			public void verify(String host, SSLSocket ssl) throws IOException {
				// do nothing
			}

			@Override
			public void verify(String host, X509Certificate cert)
					throws SSLException {
				// do nothing //do nothing
			}

			@Override
			public void verify(String host, String[] cns, String[] subjectAlts)
					throws SSLException {
				// do nothing
			}

			@Override
			public boolean verify(String string, SSLSession ssls) {
				return true;
			}
		};
		return x509HostnameVerifier;
	}

}
