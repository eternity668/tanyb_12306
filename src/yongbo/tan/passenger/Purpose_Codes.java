package yongbo.tan.passenger;

public enum Purpose_Codes {

	ADULT("ADULT"),STUDENT("0X00");
	
	private String label;
	
	private Purpose_Codes(String label){
		this.label=label;
	}
	
	public String getLabel(){
		return this.label;
	}
	
}
