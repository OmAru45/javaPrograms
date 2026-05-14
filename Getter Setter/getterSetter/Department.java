package getterSetter;

public class Department {
	private int depid;
	private String depName;
	private String location;
	private String mangName;
	
	public void setDepid(int depid) {
		this.depid=depid;
	}
   public void setDepName(String depName){
	   this.depName=depName;
   }
   public void setLocation(String location) {
	   this.location=location;
	  
   }
   public void setMangName(String mangName) {
	   this.mangName=mangName;
   }
   public int getDepid() {
	   return depid;
   }
   public String getDepName() {
	   return depName;
   }
   public String getLocation(){
	   return location;
   }
   public String getMangName() {
	   return mangName;
   }

}
