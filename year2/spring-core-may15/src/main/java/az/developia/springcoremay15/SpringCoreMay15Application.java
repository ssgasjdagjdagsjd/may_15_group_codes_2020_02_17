package az.developia.springcoremay15;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import az.developia.springcoremay15.model.BMW;
import az.developia.springcoremay15.model.Car;

@SpringBootApplication
public class SpringCoreMay15Application {

	public static void main(String[] args) {
		
		ApplicationContext appContext = SpringApplication.run(SpringCoreMay15Application.class, args);
		 
		
		BMW myBMW=appContext.getBean(BMW.class);
		myBMW.driving();
		
	}

}
