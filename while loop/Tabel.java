package while1;

import java.util.Scanner;

// wap to print tabel of given num using while
public class Tabel {

	public static void main(String[] args) {
		 
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter a number To Print Tabel");
		 int num=sc.nextInt();
		 int i = 1;
		 while(i<=10)
		 {
			System.out.println(i*num); 
			i++;
		 }
	}
}
