package az.developia.shopping.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.model.Order;

@RestController
@RequestMapping(path="/orders")
@CrossOrigin(origins="*")
public class OrderController {

	@PostMapping(path="/add")
	public Order add(@RequestBody Order order){
		
		System.out.println(order);
		return order;
	}
}
