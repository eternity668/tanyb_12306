package yongbo.tan.client;

import java.io.IOException;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.CloseableHttpClient;

/**
 * Copyright 2014年12月21日 by yong bo tan
 *
 * All Rights Reserved
 *
 * @Package yongbo.tan.client
 * @Title: HttpGetClient.java
 * @author yongbo.tan
 * @date 2014年12月21日 下午8:54:43
 */
public class HttpGetClient
{

    private CloseableHttpClient closeableHttpClient;

    private HttpClientContext httpClientContext;

    public HttpGetClient()
    {
        this.closeableHttpClient=new CustomHttpClient().getCustomHttpClient();
        this.httpClientContext=new CustomHttpClientContext().getHttpClientContext();
    }
      
    public void get(String url){
	HttpGet httpGet=new HttpGet("url");
	
	try
	{
	    BasicResponseHandler bas =new BasicResponseHandler();
	     
	    CloseableHttpResponse closeableHttpResponse=  closeableHttpClient.execute(httpGet, httpClientContext);
	    closeableHttpResponse.getStatusLine();
	}
	catch (IOException e)
	{
	    e.printStackTrace();
	}
	 
    }

    
    
    public HttpClientContext getHttpClientContext()
    {
        return httpClientContext;
    }

    public void setHttpClientContext(HttpClientContext httpClientContext)
    {
        this.httpClientContext = httpClientContext;
    }
    
    
    
}
