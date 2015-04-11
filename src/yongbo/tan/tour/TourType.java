package yongbo.tan.tour;

public enum TourType  {
	dc("dc"),wc("wc");
	
   private String label;
   private TourType(String lable){
		this.label=lable;
	}
	
   public String getLabel(){
	   return this.label;
   }
   
}
