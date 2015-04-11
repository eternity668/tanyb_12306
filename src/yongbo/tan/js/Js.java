package yongbo.tan.js;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.script.Invocable;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Js {

	public static String get12306DynamicSignInInputValue(String key)
			throws ScriptException, UnsupportedEncodingException,
			FileNotFoundException, NoSuchMethodException {
		ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
		ScriptEngine scriptEngine = scriptEngineManager.getEngineByName("js");
		scriptEngine.eval(new InputStreamReader(Js.class
				.getResourceAsStream("need.js"), "UTF-8"));
		Invocable invocable = (Invocable) scriptEngine;
		Object base32 = scriptEngine.get("Base32");
		String encryptValue = (String) invocable.invokeMethod(base32,
				"encrypt", new String[] { "1111", key });
		String bin216 = (String) invocable.invokeFunction("bin216",
				new String[] { encryptValue });
		String keyValue = (String) invocable.invokeFunction("encode32",
				new String[] { bin216 });

		// String value = (String) se
		// .eval("eval(\"encode32(bin216(Base32.encrypt('1111','" + key
		// + "')))\")");
		System.err.println("key is " + key + " secret value = " + keyValue);
		
		return keyValue;
	}

	public static String getDynamicJsUrl(String source){
		Pattern pattern=Pattern.compile("src=\"/otn/dynamicJs/[\\w]+\"");
		Matcher matcher=	pattern.matcher(source);
		String dynamicJsUrl=null;
		if(matcher.find()){
			dynamicJsUrl=matcher.group(0);
			System.err.println("dynamic Js Url is " +dynamicJsUrl);
		}
		int index=dynamicJsUrl.indexOf('\"');
		dynamicJsUrl="https://kyfw.12306.cn"+dynamicJsUrl.substring(index+1,dynamicJsUrl.length()-1);
		System.err.println("dynamic Js Url is " +dynamicJsUrl);
		return dynamicJsUrl;
	}
	
	public static void main(String[]args) throws UnsupportedEncodingException, FileNotFoundException, ScriptException, NoSuchMethodException{
	     System.err.println(get12306DynamicSignInInputValue("NjEwOTc1"));
	}
	
}
