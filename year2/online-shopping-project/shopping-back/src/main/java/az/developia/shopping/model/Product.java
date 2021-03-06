package az.developia.shopping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
	 
	@Length(max=20,min=3,message="mehsulun adi 3 vı 20 arasinda ola biler")
	@NotNull
private String name;
@Column(columnDefinition="decimal(10,2)")// misal 5.40
@NotNull
@Max(value=1000,message="qiymet maksimum 1000 oler")
@Min(value=0,message="qiymet minimum 0 olar")
private Double price;

private String image;
private String username;
 
}
