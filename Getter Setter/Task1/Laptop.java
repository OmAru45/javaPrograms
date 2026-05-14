package Task1;

public class Laptop {
	private  String brand;
	private int price;
	private float weight;
	private int ram;
	private int rom;
	private  String os;
	private int discount;
	
	public void setBrand(String brand) {
		this.brand=brand;
	}
	public void setPrice(int price) {
		this.price=price;
	}
	public void setWeight(float Weight) {
		this.weight=weight;
	}
	public void setRam(int ram) {
		this.ram=ram;
		
	}
	public void setRom(int rom) {
		this.rom=rom;
	}
	public void setOs(String os) {
		this.os=os;
	}
	public void setDiscount(int discount) {
		this.discount=discount;
	}
	
	public String getBrand() {
		return brand;
	}
	public int getPrice() {
		return price;
	}
	public float getWeight() {
		return weight;
	}
	public int getRam() {
		return ram;
		
	}
	public int getRom() {
		return rom;
	}
	public String getOs() {
		return os;
	}
	public int getDiscount() {
		return discount;
	}

}
