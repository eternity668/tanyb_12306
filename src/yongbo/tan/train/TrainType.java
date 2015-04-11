package yongbo.tan.train;

public class TrainType {

	private String name;

	private String value;
	
	 
	public static TrainType G=new TrainType("GC-高铁/城际","G");
 
	public static TrainType D=new TrainType("D-动车","D");
	
	public static TrainType Z=new TrainType("Z-直达","Z");
	
	public static TrainType T=new TrainType("T-特快","T");
	
	public static TrainType K=new TrainType("K-快速","K");
	
	public static TrainType QT=new TrainType("其他","QT");
	
	
	public TrainType(String name, String value) {
		super();
		this.name = name;
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
	
	
}
