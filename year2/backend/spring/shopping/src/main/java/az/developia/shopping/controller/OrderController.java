package az.developia.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.OrderDAO;
import az.developia.shopping.model.Order;
import az.developia.shopping.model.Product;

@RestController
@RequestMapping(path="/orders")
@CrossOrigin(origins="*")
public class OrderController {

	@Autowired
	private OrderDAO orderDAO;
	
	
	
	@PostMapping(path="/add")
	public Order add(@RequestBody Order order){
		
		System.out.println(order);
		orderDAO.save(order);
		return order;
	}
	
	
	@GetMapping
	public List<Order> findAll() { 
		return orderDAO.findAll();
	}
	
	
	
	@GetMapping(path="/username/{username}")
	public List<Order> findAllByUsername(@PathVariable(name="username")String username) { 
		return orderDAO.findAllByUsername(username);
	}
	
	
	
}
