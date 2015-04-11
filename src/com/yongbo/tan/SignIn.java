package com.yongbo.tan;

import java.io.IOException;

import org.apache.http.Header;
import org.apache.http.StatusLine;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

/**
 * Copyright  2014Âπ?2Êú?1Êó? by yong bo tan
 *
 *       All Rights Reserved
 *
 *      @Package yongbo.tan  
 *      @Title: SignIn.java  
 *      @author yongbo.tan
 *      @date 2014Âπ?2Êú?1Êó?‰∏ãÂçà12:41:49 
 */
public class SignIn
{

    public static void main(String[] args)
    {
	 
	CloseableHttpClient httpclient = HttpClients.createDefault();
	HttpGet httpget = new HttpGet("https://kyfw.12306.cn/otn/login/init");
	try
	{
	    CloseableHttpResponse response = httpclient.execute(httpget);
	    StatusLine  statusLine= response.getStatusLine();
	    if(statusLine.getStatusCode()!=200){
		System.err.println("errpr occur");
	    }
	  Header[]headers=  response.getAllHeaders();
	  for(Header head:headers){
	      System.out.println("name:"+head.getName()+" values:"+head.getValue());
	      
	  }
	  response.close();
	}
	catch (IOException e)
	{
	  
	    e.printStackTrace();
	}
	try
	{
	    httpclient.close();
	}
	catch (IOException e)
	{
	    e.printStackTrace();
	}
	 
    }

}
