package Task4;

public class Details {
	public static void main (String [] args) {
		Mobile m=new Mobile("vivo",12000,1300,8,128,"Android",500);
		System.out.println("Brand name is : "+m.brand);
		System.out.println("Price is : "+m.price);
		System.out.println("Weight is : "+m.weight);
		System.out.println("Ram is : "+m.ram);
		System.out.println("Rom is : "+m.rom);
		System.out.println("Operating systen is : "+m.os);
		System.out.println("Discount Applicabel is : "+m.dis);
		Mobile m1=new Mobile("iphone 17",129000,14,16,512,"mac",1200);
		System.out.println("Brand name is : "+m1.brand);
		System.out.println("Price is : "+m1.price);
		System.out.println("Weight is : "+m1.weight);
		System.out.println("Ram is : "+m1.ram);
		System.out.println("Rom is : "+m1.rom);
		System.out.println("Operating systen is : "+m1.os);
		System.out.println("Discount Applicabel is : "+m1.dis);
		Tablet t=new Tablet("samsung a9",38000,1300,12,512,"Android",1000);
		System.out.println("Brand name is : "+t.brand);
		System.out.println("Price is : "+t.price);
		System.out.println("Weight is : "+t.weight);
		System.out.println("Ram is : "+t.ram);
		System.out.println("Rom is : "+t.rom);
		System.out.println("Operating systen is : "+t.os);
		System.out.println("Discount Applicabel is : "+t.dis);
		Tablet t1=new Tablet("one plus",22000,14,8,228,"Android",1200);
		System.out.println("Brand name is : "+t1.brand);
		System.out.println("Price is : "+t1.price);
		System.out.println("Weight is : "+t1.weight);
		System.out.println("Ram is : "+t1.ram);
		System.out.println("Rom is : "+t1.rom);
		System.out.println("Operating systen is : "+t1.os);
		System.out.println("Discount Applicabel is : "+t1.dis);
		
	}

}
