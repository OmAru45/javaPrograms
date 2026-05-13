package while1;

import java.util.Scanner;

// wap to print reverse number
public class RevNum {
	public static void main(String[] args) {
		
		Scanner sc =new Scanner(System.in);
		System.out.println("Enter a digit for revers");
		int num=sc.nextInt();
		
		int rev=0;
		
		while(num>0)
		{
			int r =num % 10;
			
			rev=rev*10+r;
			num=num/10;
			
			
		}
		System.out.println(rev);
		
	}

}
