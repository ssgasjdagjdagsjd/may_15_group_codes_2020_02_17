package az.developia.springcoremay15.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component
public class Mercedes implements Car {
	@Autowired
	private Benzine benzine;
	
	
	
	@Override
	public void driving() {
		System.out.println("i am Mercedes and i am driving, i use benzine = ");
		benzine.firing();

	}

}
