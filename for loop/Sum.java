package task1;
// sum of natural number prg
public class Sum {
	public static void main(String[] args) {
		
	     int n=5,sum =0;
	     for(int i=1;i<5;i++)
	     {
	    	 sum= sum+i;
	    	 System.out.println(sum); 
	     }
	    
	}
	
         // i=1 sum=0  i<=5  t  1
	     // i=2 sum=1  i<5   t  3
	     // i=3 sum=3  i<5   t  6
	     // i=4 sum=6  i<5   t  10
	     // i=5 sum=10 i<5   f
}
