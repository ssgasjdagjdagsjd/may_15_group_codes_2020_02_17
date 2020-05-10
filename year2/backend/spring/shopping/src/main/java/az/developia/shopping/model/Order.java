package az.developia.shopping.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="orders")
@Getter
@Setter
public class Order {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Integer id ;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="order_id")
	  private List<BasketProduct> basketProducts;
	  
	  @ManyToOne(cascade=CascadeType.ALL)
	  @JoinColumn(name="customer_id")
	  @JsonIgnoreProperties(value="orders")
	  private Customer customer ;
	  
	  
	  private String note ;
	  private  String username ;
	 
	  
	  
}
