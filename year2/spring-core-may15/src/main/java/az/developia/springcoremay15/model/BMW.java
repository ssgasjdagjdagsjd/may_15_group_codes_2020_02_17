package az.developia.springcoremay15.model;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.sound.midi.Soundbank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class BMW implements Car {

	
	
	
	 @Autowired
	private Benzine benzine;
	
	 


	 

	@Override
	public void driving() {
		System.out.println("i am BMW and i am driving, i use benzine = ");
		benzine.firing();
	}

	
	@PostConstruct
	public void initial(){
		System.out.println("BMW sinifinden obyekt yaradildi, yeni bu sinifden obyekt yarandiqdan sonra nese is gormek istesez bu metoda yazin");
	}
	
	@PreDestroy
	public void olmezdenQabaq(){

		System.out.println("BMW sinifinden yaranmis onyekt silindi");
		
	}
	
	
	
	
	
	
	
	
	
	
}
