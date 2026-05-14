package getterSetter;

public class Test {
	public static void main (String[] args) {
		Department d=new Department();
		d.setDepid(101);
		d.setDepName("java");
		d.setLocation("cjc Pune");
		d.setMangName("om");
		System.out.println(d.getDepid());
		System.out.println(d.getDepName());
		System.out.println(d.getLocation());
		System.out.println(d.getMangName());
		
		
		
	}

}
