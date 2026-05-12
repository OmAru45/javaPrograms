package task1;
// wap to Print Prime Number
public class Prime {
	
	public static void main(String[] args) {
		
		int n=7;
		boolean isPrime=true;
		
		for(int i=2;i<n;i++)
		{
			if(n%i==0)
			{
				isPrime=false;
				break;
			}
			
		}
		if(isPrime)
		{
			System.out.println(n+ "is Prime Number");
		}
		else
		{
			System.out.println(n+ "is Not Prime Number");
		}
	}
	

}
