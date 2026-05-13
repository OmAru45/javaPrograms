package while1;

import java.util.Scanner;

//wap To print a Palindrome and get input from user by using while loop
public class Palindrome {
	
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a number");
		int num=sc.nextInt();
		int temp=num;
		
		int rev=0;
		while(num>0)
		{
		  int r=num%10;
		  rev=rev*10+r;
		  num=num/10;
		  
		}
		
		if(temp==rev)
		{
			System.out.println(rev+ " Palindrome num");
		}
		else
		{
			System.out.println(rev+ "Is not Palindrome");
		}
	}

}
