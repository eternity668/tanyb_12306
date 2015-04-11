package yongbo.tan.station;

public class Station {

	// bjb|北京北|VAP|beijingbei|bjb
//bjb
	private String abbreviation;
	//beijingbei
	private String spelling;
	//北京北
	private String chineseCharacter;
	//VAP
	private String coding;

	public Station() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Station(String abbreviation, String spelling,
			String chineseCharacter, String coding) {
		super();
		this.abbreviation = abbreviation;
		this.spelling = spelling;
		this.chineseCharacter = chineseCharacter;
		this.coding = coding;
	}

	public String getAbbreviation() {
		return abbreviation;
	}

	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}

	public String getSpelling() {
		return spelling;
	}

	public void setSpelling(String spelling) {
		this.spelling = spelling;
	}

	public String getChineseCharacter() {
		return chineseCharacter;
	}

	public void setChineseCharacter(String chineseCharacter) {
		this.chineseCharacter = chineseCharacter;
	}

	public String getCoding() {
		return coding;
	}

	public void setCoding(String coding) {
		this.coding = coding;
	}
   
	public String toString(){
		return this.abbreviation+"|"+this.chineseCharacter+"|"+this.coding+"|"+this.spelling;
	}
}
