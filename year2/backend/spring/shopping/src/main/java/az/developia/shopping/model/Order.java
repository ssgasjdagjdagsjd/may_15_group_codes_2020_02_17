package az.developia.shopping.model;

import java.util.List;

public class Order {
	  private Integer id ;
	  private List<BasketProduct> basketProducts;
	  private Customer customer ;
	  private String note ;
	  private  String username ;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public List<BasketProduct> getBasketProducts() {
		return basketProducts;
	}
	public void setBasketProducts(List<BasketProduct> basketProducts) {
		this.basketProducts = basketProducts;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", basketProducts=" + basketProducts + ", customer=" + customer + ", note=" + note
				+ ", username=" + username + "]";
	}
	  
	  
	  
}
