package az.developia.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.ProductDAO;
import az.developia.shopping.model.Product;

@RestController
@RequestMapping(path = "/products")
@CrossOrigin(origins="http://localhost:5454")
public class ProductController {
	@Autowired
	private ProductDAO productDAO;
	
	
	
	@GetMapping(path = "/{id}")  
	public Product getOneProduct(@PathVariable(name="id") Integer id) {
		 
		return productDAO.findById(id).get();
	}

	@GetMapping
	public List<Product> getMultipleProduct() { 
		return productDAO.findAll();
	}
	
	
	
@PostMapping
public Product save(@RequestBody Product p){
	p.setId(null); 
	 productDAO.save(p);
	return p;
}
@PutMapping
public Product update(@RequestBody Product p){
	 
	 productDAO.save(p);
	return p;
}

@DeleteMapping(path = "/{id}")  
public void deleteById(@PathVariable(name="id") Integer id) {
	 
	  productDAO.deleteById(id);
}
}
