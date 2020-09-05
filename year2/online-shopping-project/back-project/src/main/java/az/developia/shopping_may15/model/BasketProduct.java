package az.developia.shopping_may15.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
public class BasketProduct {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	 private  Integer id ;
	 private Integer quantity ;
	 
	 @OneToOne
	 @JoinColumn(name="product_id")
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
