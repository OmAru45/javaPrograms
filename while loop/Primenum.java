package while1;
// wap to print prime number using while
public class Primenum {
	
	public static void main(String[] args) {
		int n=8;
		int i=2;
		boolean isPrime = true;
		while(i<n)
		{
			if(n % i == 0)
			{
				isPrime = false;
				break;
				
			}
			i++;
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
