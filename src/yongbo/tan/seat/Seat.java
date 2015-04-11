package yongbo.tan.seat;

import java.util.HashMap;

public class Seat {

	private String Name;

	private String value;

	private String numberCode;

	private String oneCode;

	private boolean isCheck;

	public static Seat SWZ = new Seat("商务座", "SWZ", false);

	public static Seat TZ = new Seat("特等座", "TZ", false);

	public static Seat ZY = new Seat("一等座", "ZY", false);

	public static Seat ZE = new Seat("二等座", "ZE", false);

	public static Seat GR = new Seat("高级软卧", "GR", false);

	public static Seat RW = new Seat("软卧", "RW", false);

	public static Seat YW = new Seat("硬卧", "YW", false);

	public static Seat SRRB = new Seat("动卧", "SRRB", false);

	public static Seat YYRW = new Seat("高级动卧", "YYRW", false);

	public static Seat RZ = new Seat("软座", "RZ", false);

	public static Seat YZ = new Seat("硬座", "YZ", false);

	public static Seat WZ = new Seat("无座", "WZ", false);

	public static Seat QT = new Seat("其它", "QT", false);

	public static HashMap<String, String> seats = new HashMap<String, String>();

	static {
		seats.put(SWZ.getName(), SWZ.getValue());
		seats.put(TZ.getName(), TZ.getValue());
		seats.put(ZY.getName(), ZY.getValue());
		seats.put(ZE.getName(), ZE.getValue());
		seats.put(RW.getName(), RW.getValue());
		seats.put(YW.getName(), YW.getValue());
		seats.put(SRRB.getName(), SRRB.getValue());
		seats.put(YYRW.getName(), YYRW.getValue());
		seats.put(RZ.getName(), RZ.getValue());
		seats.put(YZ.getName(), YZ.getValue());
		seats.put(WZ.getName(), WZ.getValue());

	}

	public Seat(String name, String value, boolean isCheck) {
		super();
		Name = name;
		this.value = value;
		this.isCheck = isCheck;
	}

	public Seat(String nameOrNumberCode) {
		if (nameOrNumberCode.endsWith("num")) {
			this.numberCode = nameOrNumberCode;
			setNeedAccordingToNumber();
		} else {
			this.Name = nameOrNumberCode;
			setNeedAccordingToName(this.Name);
		}
	}

	public void setNeedAccordingToNumber() {
		if (this.numberCode.equals("swz_num")) {
			this.value = "SWZ";
			this.Name = "商务座";
			this.oneCode = "9";
			return;
		}
		if (this.numberCode.equals("tz_num")) {
			this.value = "TZ";
			this.Name = "特等座";
			this.oneCode = "P";
			return;
		}
		if (this.numberCode.equals("zy_num")) {
			this.value = "ZY";
			this.Name = "一等座";
			this.oneCode = "M";
			return;
		}

		if (this.numberCode.equals("ze_num")) {
			this.value = "ZE";
			this.Name = "二等座";
			this.oneCode = "O";
			return;
		}

		if (this.numberCode.equals("gr_num")) {
			this.value = "GR";
			this.Name = "高级软卧";
			this.oneCode = "6";
			return;
		}

		if (this.numberCode.equals("rw_num")) {
			this.value = "RW";
			this.Name = "软卧";
			this.oneCode = "4";
			return;
		}

		if (this.numberCode.equals("yw_num")) {
			this.value = "YW";
			this.Name = "硬卧";
			this.oneCode = "3";
			return;
		}
		if (this.numberCode.equals("yb_num")) {
			this.value = "SRRB";
			this.Name = "动卧";
			this.oneCode = "F";
			return;
		}
		if (this.numberCode.equals("gg_num")) {
			this.value = "YYRW";
			this.Name = "高级动卧";
			this.oneCode = "A";
			return;
		}

		if (this.numberCode.equals("rz_num")) {
			this.value = "RZ";
			this.Name = "软座";
			this.oneCode = "2";
			return;
		}
		if (this.numberCode.equals("yz_num")) {
			this.value = "YZ";
			this.Name = "硬座";
			this.oneCode = "1";
			return;
		}
		if (this.numberCode.equals("wz_num")) {
			this.value = "WZ";
			this.Name = "无座";
			this.oneCode = "1";
			return;
		}
		if (this.numberCode.equals("qt_num")) {
			this.value = "QT";
			this.Name = "其它";
			this.oneCode = "QT";
			return;
		}

	}

	public void setNeedAccordingToName(String name) {
		if (this.Name.equals("商务座")) {
			this.value = "SWZ";
			this.numberCode = "swz_num";
			this.oneCode = "9";
			return;
		}
		if (this.Name.equals("特等座")) {
			this.value = "TZ";
			this.numberCode = "tz_num";
			this.oneCode = "P";
			return;
		}
		if (this.Name.equals("一等座")) {
			this.value = "ZY";
			this.numberCode = "zy_num";
			this.oneCode = "M";
			return;
		}

		if (this.Name.equals("二等座")) {
			this.value = "ZE";
			this.numberCode = "ze_num";
			this.oneCode = "O";
			return;
		}

		if (this.Name.equals("高级软卧")) {
			this.value = "GR";
			this.numberCode = "gr_num";
			this.oneCode = "6";
			return;
		}

		if (this.Name.equals("软卧")) {
			this.value = "RW";
			this.numberCode = "rw_num";
			this.oneCode = "4";
			return;
		}

		if (this.Name.equals("硬卧")) {
			this.value = "YW";
			this.numberCode = "yw_num";
			this.oneCode = "3";
			return;
		}
		if (this.Name.equals("动卧")) {
			this.value = "SRRB";
			this.numberCode = "yb_num";
			this.oneCode = "F";
			return;
		}
		if (this.Name.equals("高级动卧")) {
			this.value = "YYRW";
			this.numberCode = "gg_num";
			this.oneCode = "A";
			return;
		}

		if (this.Name.equals("软座")) {
			this.value = "RZ";
			this.numberCode = "rz_num";
			this.oneCode = "2";
			return;
		}
		if (this.Name.equals("硬座")) {
			this.value = "YZ";
			this.numberCode = "yz_num";
			this.oneCode = "1";
			return;
		}
		if (this.Name.equals("无座")) {
			this.value = "WZ";
			this.numberCode = "wz_num";
			this.oneCode = "WZ";
			return;
		}
		if (this.Name.equals("其它")) {
			this.value = "QT";
			this.numberCode = "qt_num";
			this.oneCode = "QT";
			return;
		}

	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public boolean isCheck() {
		return isCheck;
	}

	public void setCheck(boolean isCheck) {
		this.isCheck = isCheck;
	}

	public String getNumberCode() {
		return numberCode;
	}

	public void setNumberCode(String numberCode) {
		this.numberCode = numberCode;
	}

	public String getOneCode() {
		return oneCode;
	}

	public void setOneCode(String oneCode) {
		this.oneCode = oneCode;
	}

}
