package az.developia.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.task.dao.UserDAO;
import az.developia.task.model.User;

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
 
@GetMapping(path="/validate")
public void validate(){
	
}

@GetMapping(path="/check/{username}")
public Boolean checkUser(@PathVariable String username){
	
	return userDAO.checkUser(username);
}
 

}
