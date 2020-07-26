package az.developia.shopping_may15;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import az.developia.shopping_may15.controller.file.StorageProperties;
import az.developia.shopping_may15.controller.file.StorageService;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class ShoppingMay15Application {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingMay15Application.class, args);
	}
	@Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {

            storageService.init();
        };
    }
}
