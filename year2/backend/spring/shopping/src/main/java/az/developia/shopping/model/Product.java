package az.developia.shopping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
	 
private String name;
@Column(columnDefinition="decimal(10,2)")
private Double price;
private String image;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Double getPrice() {
	return price;
}
public void setPrice(Double price) {
	this.price = price;
}
@Override
public String toString() {
	return "Product [id=" + id + ", name=" + name + ", price=" + price + "]";
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}

}
