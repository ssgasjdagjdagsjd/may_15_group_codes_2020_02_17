package az.developia.springcoremay15.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import az.developia.springcoremay15.model.Kia;

@Configuration
public class BeanConfiguration {

	
	@Bean
	public Kia getKia(){
		Kia kia=new Kia();
		return kia;
	}
	
	
}
