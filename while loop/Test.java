package while1;
//wap to print 1 to 10 number and 10 to 1 number by using while loop

public class Test {

	public static void main (String [] args)
	{
		int i=1;
		
		while(i<=10)
		{
			System.out.println(i);
			i++;
		}
	System.out.println("**///*//****//*/*/*/*/*/*/*/*/*////*/*/*/*/**********/*/*/*/*/*");
		int j=10;
		while(j>=1)
		{
			System.out.println(j);
			j--;
		}
	}
}

// dry run of i

   //       value       condition      true       print
  //         i=1          i<=10         t          1
 //  i++     i=2          i<=10         t		    2
//   i++     i=3          i<=10         t          3
//   i++     i=4          i<=10         t          4
//  direct to
//   i++     i=10		  i<=10			t          10
//   i++     i=11		  i<=10			f           

//dry run of j

//       value       condition      true       print
//        j=10        j>=1            t          10
//  j--   j=9         j>=1            t		     9
//j--     j=8         j>=1            t          8
//j--     j=7         j>=1            t          7
//direct to
//j--     j=1		  j>=1		      t          1
//i++     j=0		  j>=1		      f 



