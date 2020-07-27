package az.developia.springcoremay15.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.springcoremay15.SpringCoreMay15Application;
import az.developia.springcoremay15.model.BMW;

@RestController

@RequestMapping("/some")
public class SomeControllerRest {

	@GetMapping
	public BMW findBMW(){
		BMW bmw=SpringCoreMay15Application.appContext.getBean(BMW.class);
		bmw.setYear(2000);
		bmw.setColor("blue");
		bmw.getBenzine().setColor("boz");
		System.out.println(bmw);
		
		return bmw;
	}
}
