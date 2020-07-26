package az.developia.shopping_may15.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;

import com.sun.istack.NotNull;

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
@Column(columnDefinition="decimal(10,2)")
@NotNull
@Max(value=1000,message="qiymet minimum 0 olar")
@Min(value=0,message="qiymet maksimum 100 oler")
private Double price;

private String image;
private String username;
 
}
