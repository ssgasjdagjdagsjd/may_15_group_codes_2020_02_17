package az.developia.springcoremay15.model;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.sound.midi.Soundbank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class BMW implements Car {

	private int year;
	private String color;
	
	
	 public int getYear() {
		return year;
	}


	public void setYear(int year) {
		this.year = year;
	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public Benzine getBenzine() {
		return benzine;
	}


	public void setBenzine(Benzine benzine) {
		this.benzine = benzine;
	}


	@Autowired
	 @Qualifier("benzin95")
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


	@Override
	public String toString() {
		return "BMW [year=" + year + ", color=" + color + ", benzine=" + benzine + "]";
	}


	 
	
	
	
	
	
	
	
	
	
}
