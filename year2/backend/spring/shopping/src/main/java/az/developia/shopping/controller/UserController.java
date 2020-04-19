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
import az.developia.shopping.dao.UserDAO;
import az.developia.shopping.model.Product;
import az.developia.shopping.model.User;

@RestController
@RequestMapping(path = "/users")
@CrossOrigin(origins="*")
public class UserController {
	@Autowired
	private UserDAO userDAO;
	
	 
	
@PostMapping
public Boolean createUser(@RequestBody User u){
	
	return userDAO.createUser(u);
}
 
}
