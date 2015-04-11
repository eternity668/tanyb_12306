package yongbo.tan.client;

import java.io.IOException;

import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpResponseException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.impl.client.BasicResponseHandler;

/**
 * Copyright 2014年12月21日 by yong bo tan
 *
 * All Rights Reserved
 *
 * @Package yongbo.tan.client
 * @Title: TextBasicResponseHandler.java
 * @author yongbo.tan
 * @date 2014年12月21日 下午9:42:30
 */
public abstract class AbstractResponseHandler<T> implements ResponseHandler
{
   
    
    @Override
    public T handleResponse(HttpResponse response)
	    throws ClientProtocolException, IOException
    {
	
	
	StatusLine statusLine = response.getStatusLine();
	int statusCode = statusLine.getStatusCode();
	if(200<=statusCode&&statusCode<300){
	    return onSuccess();
	}
	if(400<=statusCode){
	   return on();
	}
	return null;
    }
   
    
    public abstract T onSuccess();
	
    public abstract T on();
}
