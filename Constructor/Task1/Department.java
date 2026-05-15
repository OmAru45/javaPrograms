package Task1;

public class Department {
int depid;
String depName;
String location;
int empCount;
String managerName;

public Department(int depid,String depname,String c, int d,String e) {
	this.depid=depid;
	this.depName=depname;
	this.location=c;
	this.empCount=d;
	this.managerName=e;
	System.out.println("This is parametrised comstructor");
}
public Department() {
	System.out.println("this is non para constructor");
}
}