package com.petshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PetshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetshopApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/residents").allowedOrigins("http://localhost:8080");
                registry.addMapping("/addResidents").allowedOrigins("http://localhost:8080");
                registry.addMapping("/breed/{id}").allowedOrigins("http://localhost:8080");
                registry.addMapping("/residents/group_list/{group}").allowedOrigins("http://localhost:8080");
                registry.addMapping("/residents/breed_list/{breed}").allowedOrigins("http://localhost:8080");
            }
		}; //@add the other routes to this method and print to screen
	}

}
