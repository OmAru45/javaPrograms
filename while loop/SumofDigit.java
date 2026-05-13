package while1;

import java.util.Scanner;

// wap to print sum of digit of given number
public class SumofDigit {
	
	public static void main(String[] args) {
		
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter any number to print Addition");
		int num= sc.nextInt();
		
		int sum=0;
		
		   while(num>0)
		   {
			  int digit=num % 10;
			       sum = sum + digit;
			       num = num / 10;
		   }
		   System.out.println(sum);
		
	}

}
