package com.example.workflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@SpringBootApplication
//@CrossOrigin(origins = "http://localhost:4200")
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class);
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
  	CorsConfiguration configuration = new CorsConfiguration();
  	configuration.setAllowCredentials(true);
  	configuration.addAllowedOrigin("http://localhost:4200");
  	configuration.addAllowedHeader("*");
  	configuration.addAllowedMethod("*");
  	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  	source.registerCorsConfiguration("/**", configuration);
  	return source;
  }  
}