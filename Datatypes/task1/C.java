package task1;

public class C {
	int x = 20;
	int y = 5;
	public void add() {
		System.out.println(x+y);
	}
	public void sub() {
		
		System.out.println(x-y);
	}
	public void mul() {
		System.out.println(x*y);
	}
	public void div() {
		System.out.println(x/y);
	}
	public static void main(String[] args) {
		
		C c =new C();
		c.add();
		c.sub();
		c.mul();
		c.div();
	}

}
