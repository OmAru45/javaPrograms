package task1;

public class Bank {
	String name;
	int noOfBranches;
	String location;
	String managerName;
	float sharesPrice;
	String headOffice;
	
public static void main (String [] args) {
	Bank b=new Bank();
	b.name="Sbi";
	b.noOfBranches=2;
	b.location="Karve Nagar";
	b.managerName="Akash";
	b.sharesPrice=200.20f;
	b.headOffice="Shivaji Nagar Pune";
	System.out.println("Bank Name: "+b.name);
	System.out.println("No of Branches: "+b.noOfBranches);
	System.out.println("location is: "+b.location);
	System.out.println("Manager Name: "+b.managerName);
	System.out.println("Shares Price: "+b.sharesPrice);
	System.out.println("Head Office Name: "+b.headOffice);
	
}
	

}

