package yongbo.tan.ticket;

public class Ticket_Info {

	private String only_id;
	
	private String seat_type;
	
	private String seat_type_name;
	
	private String ticket_type;
	
	private String ticket_type_name;
	
	private String name;
	
	private String id_type;
	
	private String id_type_name;
	
	private String id_no;
	
	private String phone_no;

	
	
	public Ticket_Info() {
		super();
	}

	public String getOnly_id() {
		return only_id;
	}

	public void setOnly_id(String onlyId) {
		only_id = onlyId;
	}

	public String getSeat_type() {
		return seat_type;
	}

	public void setSeat_type(String seatType) {
		seat_type = seatType;
	}

	public String getSeat_type_name() {
		return seat_type_name;
	}

	public void setSeat_type_name(String seatTypeName) {
		seat_type_name = seatTypeName;
	}

	public String getTicket_type() {
		return ticket_type;
	}

	public void setTicket_type(String ticketType) {
		ticket_type = ticketType;
	}

	public String getTicket_type_name() {
		return ticket_type_name;
	}

	public void setTicket_type_name(String ticketTypeName) {
		ticket_type_name = ticketTypeName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId_type() {
		return id_type;
	}

	public void setId_type(String idType) {
		id_type = idType;
	}

	public String getId_type_name() {
		return id_type_name;
	}

	public void setId_type_name(String idTypeName) {
		id_type_name = idTypeName;
	}

	public String getId_no() {
		return id_no;
	}

	public void setId_no(String idNo) {
		id_no = idNo;
	}

	public String getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(String phoneNo) {
		phone_no = phoneNo;
	}
	
  
	public String toString(){
		 return this.name + '_' + this.id_type + '_' + this.id_no + '_' + this.phone_no;
	}
	
	
	
	
	
}
