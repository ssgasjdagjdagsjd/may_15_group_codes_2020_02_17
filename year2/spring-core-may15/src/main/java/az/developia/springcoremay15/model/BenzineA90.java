package az.developia.springcoremay15.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component 
 @Primary
public class BenzineA90 implements Benzine {

	
	 
	@Override
	public void firing() {
		 System.out.println("i am firing 90 degree");
		
	}

}
