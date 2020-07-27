package az.developia.springcoremay15.model;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Qualifier("benzin97")
public class BenzineA97 implements Benzine{

	@Override
	public void firing() {
		 System.out.println("i am firing 97 degree");
		
	}

}
