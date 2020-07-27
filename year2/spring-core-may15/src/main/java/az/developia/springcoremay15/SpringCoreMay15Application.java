package az.developia.springcoremay15;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import az.developia.springcoremay15.model.BMW;
import az.developia.springcoremay15.model.BenzineA95;
import az.developia.springcoremay15.model.Car;
import az.developia.springcoremay15.model.Mercedes;

@SpringBootApplication
public class SpringCoreMay15Application {

	public static void main(String[] args) {
		
		ApplicationContext appContext = SpringApplication.run(SpringCoreMay15Application.class, args);
		 
		//System.out.println(appContext.containsBean("BMW"));
		BMW myBMW=appContext.getBean(BMW.class);
		myBMW.driving();
		
		
		Mercedes myMercedes=appContext.getBean(Mercedes.class);
		myMercedes.driving();
		System.out.println("myMercedes hashcode = "+myMercedes.hashCode());
		
		Mercedes myMercedes2=appContext.getBean(Mercedes.class);
		myMercedes2.driving();
		System.out.println("myMercedes2 hashcode = "+myMercedes2.hashCode());
		
		
		Mercedes myMercedes3=appContext.getBean(Mercedes.class);
		BenzineA95 benzineA95= appContext.getBean(BenzineA95.class);
		myMercedes3.setBenzine(benzineA95);
		myMercedes3.driving();
		System.out.println("myMercedes3 hashcode = "+myMercedes3.hashCode());
		
		
		
	}

}
