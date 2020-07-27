package az.developia.springcoremay15;

import java.util.Arrays;
import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import az.developia.springcoremay15.model.*;

@SpringBootApplication
public class SpringCoreMay15Application {
	public static ApplicationContext appContext;
	public static void main(String[] args) {

		ApplicationContext appContext = SpringApplication.run(SpringCoreMay15Application.class, args);
		SpringCoreMay15Application.appContext=appContext;
		// System.out.println(appContext.containsBean("BMW"));
		BMW myBMW = appContext.getBean(BMW.class);
		myBMW.driving();

		Mercedes myMercedes = appContext.getBean(Mercedes.class);
		myMercedes.driving();
		System.out.println("myMercedes hashcode = " + myMercedes.hashCode());

		Mercedes myMercedes2 = appContext.getBean(Mercedes.class);
		myMercedes2.driving();
		System.out.println("myMercedes2 hashcode = " + myMercedes2.hashCode());

		Mercedes myMercedes3 = appContext.getBean(Mercedes.class);
		BenzineA95 benzineA95 = appContext.getBean(BenzineA95.class);
		myMercedes3.setBenzine(benzineA95);
		myMercedes3.driving();
		System.out.println("myMercedes3 hashcode = " + myMercedes3.hashCode());

		Kia kia = (Kia) appContext.getBean("getKia");
		kia.driving();

		System.out.println("\n\n--------------------\n\n");
		Mercedes  myMercedes4 = appContext.getBean(Mercedes.class);
		BenzineA90 benzineA90 = appContext.getBean(BenzineA90.class);
		BenzineA97 benzineA97 = appContext.getBean(BenzineA97.class);

		Benzine[] benzinler = new Benzine[3];
		benzinler[0] = benzineA90;
		benzinler[1] = benzineA95;
		benzinler[2] = benzineA97;

		Random r = new Random();
		int index = r.nextInt(benzinler.length);
myMercedes4.setBenzine(benzinler[index]);
myMercedes4.driving();


// print all registered spring beans

String[] beans=appContext.getBeanDefinitionNames();

for (String bean : beans) {
//	System.out.println(bean);
}


	}

}
