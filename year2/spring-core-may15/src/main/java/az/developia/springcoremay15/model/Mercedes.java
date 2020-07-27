package az.developia.springcoremay15.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
@Component
@Scope(value="singleton")
public class Mercedes implements Car {
	@Autowired
	@Qualifier("benzin90")
	private Benzine benzine;
	
	public Mercedes( ) {
		 
		 
	}
	
	
	public Benzine getBenzine() {
		return benzine;
	}


	public void setBenzine(Benzine benzine) {
		this.benzine = benzine;
	}


	public Mercedes(Benzine benzine) {
		 
		this.benzine = benzine;
	}



	@Override
	public void driving() {
		System.out.println("i am Mercedes and i am driving, i use benzine = ");
		benzine.firing();

	}

}
