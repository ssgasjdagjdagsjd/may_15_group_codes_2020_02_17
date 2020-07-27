package az.developia.springcoremay15.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
 
public class Kia implements Car {

	@Autowired
	 @Qualifier("benzin97")
	private Benzine benzine;
	  

	@Override
	public void driving() {
		System.out.println("i am KIA and i am driving, i use benzine = ");
		benzine.firing();
	}

}
