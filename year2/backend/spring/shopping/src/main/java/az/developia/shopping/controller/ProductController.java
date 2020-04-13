package az.developia.shopping.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.model.Product;

@RestController
@RequestMapping(path = "/products")

public class ProductController {

	@GetMapping(path = "find-one")
	public Product getOneProduct() {
		Product p = new Product();
		p.setId(101);
		p.setName("Apple");
		p.setPrice(4.5D);
		return p;
	}

	@GetMapping(path = "find-multiple")
	public List<Product> getMultipleProduct() {
		List<Product> products = new ArrayList<>();

		Product p1 = new Product();
		p1.setId(101);
		p1.setName("Apple");
		p1.setPrice(4.5D);

		products.add(p1);
		
		Product p2 = new Product();
		p2.setId(102);
		p2.setName("Orange");
		p2.setPrice(6.5D);

		products.add(p2);

		return products;
	}
@PostMapping
public Product save(@RequestBody Product p){
	System.out.println(p);
	p.setName(p.getName().toUpperCase());
	return p;
}
}
