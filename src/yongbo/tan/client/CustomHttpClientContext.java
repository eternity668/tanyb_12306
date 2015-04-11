package yongbo.tan.client;

import org.apache.http.client.CookieStore;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.cookie.CookieSpecProvider;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.cookie.BestMatchSpecFactory;
import org.apache.http.impl.cookie.BrowserCompatSpecFactory;

/**
 * Copyright 2014年12月21日 by yong bo tan
 * 
 * All Rights Reserved
 * 
 * @Package yongbo.tan.client
 * @Title: CustomHttpClientContext.java
 * @author yongbo.tan
 * @date 2014年12月21日 下午8:50:33
 */
public class CustomHttpClientContext {

	private static HttpClientContext httpClientContext;

	public static HttpClientContext getHttpClientContext() {

		if (httpClientContext != null) {
			return httpClientContext;
		} else {
			synchronized (CustomHttpClientContext.class) {
				Registry<CookieSpecProvider> cookieSpecReg = RegistryBuilder
						.<CookieSpecProvider> create().register(
								CookieSpecs.BEST_MATCH,
								new BestMatchSpecFactory()).register(
								CookieSpecs.BROWSER_COMPATIBILITY,
								new BrowserCompatSpecFactory()).build();
				CookieStore cookieStore = new BasicCookieStore();
				HttpClientContext context = HttpClientContext.create();
				context.setCookieSpecRegistry(cookieSpecReg);
				context.setCookieStore(cookieStore);
				httpClientContext = context;
				return httpClientContext;
			}
		}

	}

}
