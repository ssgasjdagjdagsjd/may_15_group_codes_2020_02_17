package az.developia.shopping.model;

public class BasketProduct {
	 private  Integer id ;
	 private Integer quantity ;
	 private Product product ;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	@Override
	public String toString() {
		return "BasketProduct [id=" + id + ", quantity=" + quantity + ", product=" + product + "]";
	}
	 
	 
	 
}
