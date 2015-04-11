package yongbo.tan.tour;

public class Tour {

	private String train_date;
	
	private TourType tourType;
	
	private String query_from_station_name;
	
	private String query_to_station_name;

	public String getTrain_date() {
		return train_date;
	}

	public void setTrain_date(String trainDate) {
		train_date = trainDate;
	}

	
	public Tour() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TourType getTourType() {
		return tourType;
	}

	public void setTourType(TourType tourType) {
		this.tourType = tourType;
	}

	public String getQuery_from_station_name() {
		return query_from_station_name;
	}

	public void setQuery_from_station_name(String queryFromStationName) {
		query_from_station_name = queryFromStationName;
	}

	public String getQuery_to_station_name() {
		return query_to_station_name;
	}

	public void setQuery_to_station_name(String queryToStationName) {
		query_to_station_name = queryToStationName;
	}
	
	
}
