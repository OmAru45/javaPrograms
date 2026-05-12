package task1;

import java.util.Scanner;

// wap to get input from user print a table 
public class Table {
	
	  public static void main(String[] args) {
		
		   Scanner sc= new Scanner(System.in);
		   System.out.println("Enter any Number");
		   int num=sc.nextInt();
		   
			/*
			 * for(int i=num;i<=10;i++) { System.out.println(i*num); }
			 */
		   
		   
		   for(int i=1;i<=10;i++)
		   {
			   System.out.println(i*num);
		   }
		   System.out.println("*********************************");
		   for(int i=num;i<=num*10;i=i+num)
		   {
			   System.out.println(i);
		   }
		   
		   // value       cond         t/f      print
		   // i=2         2<=20        true       2
	// 2+2    i=4         4<=20         t         4
    //i++ 4+2 i=6         6<=20         t         6
    //i++ 6+2 i=8         8<=20         t         8
		    //i++ 8+2 i=10         10<=20         t         10
		    //i++ 10+2 i=12        12<=20         t         12
		    //i++ 12+2 i=14         14<=20         t         14
		    //i++ 41+2 i=16         16<=20         t         16
		    //i++ 16+2 i=18         18<=20         t         18
		    //i++ 18+2 i=20         20<=20         t         20
		    //i++ 20+2 i=22        22<=20         f        
   
	}
}
	


