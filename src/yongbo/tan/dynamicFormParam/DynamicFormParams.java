package yongbo.tan.dynamicFormParam;

import java.util.HashMap;
import java.util.Set;

public class DynamicFormParams {

	HashMap<String, String> dynamicFormParams;

	public DynamicFormParams(){
		dynamicFormParams = new HashMap<String, String>();
		dynamicFormParams.put("myversion", "undefined");
	}
	
	public void putDynamicParam(String key, String value) {
		
		dynamicFormParams.put(key, value);

	}

	public int size() {
		return dynamicFormParams.size();
	}

	public String get(String key) {
		return dynamicFormParams.get(key);
	}

	public Set<String> keySet() {
		return dynamicFormParams.keySet();
	}

}
