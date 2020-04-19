package az.developia.shopping.dao;

import java.sql.Connection;
import java.sql.Statement;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import az.developia.shopping.model.User;
@Component
public class UserDAO {

	
	@Autowired
	private DataSource dataSource;
	
	
	public Boolean createUser(User u) {
		Boolean result=false;
try {
	Connection c=dataSource.getConnection();
	Statement s=c.createStatement();
	s.execute("insert into users (username,password,enabled) values ('"+u.getUsername()+"','{noop}"+u.getPassword()+"',1);");
	s.execute("insert into authorities (username,authority) values ('"+u.getUsername()+"','ROLE_ADMIN');");
	s.close();
	c.close();
	result=true;
} catch (Exception e) {
	e.printStackTrace();
}
return result;
		
		
	}

}
