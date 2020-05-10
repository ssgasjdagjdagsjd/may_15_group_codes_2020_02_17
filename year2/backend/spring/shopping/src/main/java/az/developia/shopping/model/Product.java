package az.developia.shopping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
	 
private String name;
@Column(columnDefinition="decimal(10,2)")
private Double price;
private String image;
private String username;
 
}
