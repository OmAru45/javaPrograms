package while1;
// wap to print even and odd number from 1 to 100
public class Evenodd {
	
	public static void main(String[] args) {
		int i=1;
		
		while(i<=100)
		{
			if(i%2==0)
			{
				System.out.println(i+ " Even number");
			}
			else
			{
				System.out.println(i+ " Odd number");
			}
			i++;
		}
	}

}
