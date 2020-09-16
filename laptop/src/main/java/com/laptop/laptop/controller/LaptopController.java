package com.laptop.laptop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.laptop.laptop.model.Laptop;
import com.laptop.laptop.service.LaptopService;


@RestController
@CrossOrigin("*")
public class LaptopController {
    	
	LaptopService LaptopService;
	
	LaptopController(LaptopService LaptopService) {
		this.LaptopService = LaptopService;
	}
	
	@PostMapping(value = "/service/Laptop")
	public Laptop save(@RequestBody Laptop Laptop) {
    	return this.LaptopService.save(Laptop);
	}
	
	@PutMapping(value ="/service/Laptop/{id}")
	public Laptop update(@PathVariable("id") Long id, @RequestBody Laptop Laptop) {
		Optional<Laptop> checkLaptop = this.LaptopService.getById(id);
		
		if (checkLaptop == null) {
			return null;
		}
    	return this.LaptopService.update(Laptop);
	}
	
	 @DeleteMapping(value = "/service/Laptop/{id}")
	 public void delete(@PathVariable("id") Long id){
		 Optional<Laptop> checkLaptop = this.LaptopService.getById(id);
			
			if (checkLaptop == null) {
				return;
			}
	    	this.LaptopService.delete(checkLaptop.get());
	 }
	 
	 @GetMapping(value = "/service/Laptop")
	 public List<Laptop> all(){
	  	return this.LaptopService.findAll();
	 }

}
