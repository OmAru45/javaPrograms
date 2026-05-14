package Task1;

public class Details {
	public static void main (String[] args) {
		Laptop l=new Laptop();
		Laptop l1=new Laptop();
		Laptop l2=new Laptop();
		l.setBrand("Asus");
		l.setPrice(88500);
		l.setWeight(13);
		l.setRam(16);
		l.setRom(512);
		l.setOs("Windows");
		l.setDiscount(2000);
		System.out.println("Brand name is :"+l.getBrand());
		System.out.println("Price is: "+l.getPrice());
		System.out.println("Laptop Weight is : "+l.getWeight());
		System.out.println("Ram is : "+l.getRam());
		System.out.println("Rom is : "+l.getRom());
		System.out.println("Operating System :  "+l.getOs());
		System.out.println("Discount is : "+l.getDiscount());
		l1.setBrand("Dell");
		l1.setPrice(66500);
		l1.setWeight(16);
		l1.setRam(8);
		l1.setRom(512);
		l1.setOs("Windows");
		l1.setDiscount(2300);
		System.out.println("Brand name is :"+l1.getBrand());
		System.out.println("Price is: "+l1.getPrice());
		System.out.println("Laptop Weight is : "+l1.getWeight());
		System.out.println("Ram is : "+l1.getRam());
		System.out.println("Rom is : "+l1.getRom());
		System.out.println("Operating System : "+l1.getOs());
		System.out.println("Discount is : "+l1.getDiscount());
		l2.setBrand("Lenovo");
		l2.setPrice(77500);
		l2.setWeight(14);
		l2.setRam(16);
		l2.setRom(512);
		l2.setOs("Windows");
		l2.setDiscount(3000);
		System.out.println("Brand name is :"+l2.getBrand());
		System.out.println("Price is: "+l2.getPrice());
		System.out.println("Laptop Weight is : "+l2.getWeight());
		System.out.println("Ram is : "+l2.getRam());
		System.out.println("Rom is : "+l2.getRom());
		System.out.println("Operating System : "+l2.getOs());
		System.out.println("Discount is : "+l2.getDiscount());
		
		
	}

}
