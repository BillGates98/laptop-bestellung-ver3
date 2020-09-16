package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Kunde;
import com.example.service.KundeService;


@RestController
public class KundeController {
    	
	KundeService kundeService;
	
	KundeController(KundeService kundeService) {
		this.kundeService = kundeService;
	}
	
	@PostMapping(value = "/service/kunde")
	public Kunde save(@RequestBody Kunde kunde) {
    	return this.kundeService.save(kunde);
	}
	
	@PutMapping(value ="/service/kunde/{id}")
	public Kunde save(@PathVariable("id") Long id, @RequestBody Kunde kunde) {
		Optional<Kunde> checkKunde = this.kundeService.getById(id);
		
		if (checkKunde == null) {
			return null;
		}
    	return this.kundeService.update(kunde);
	}
	
	 @DeleteMapping(value = "/service/kunde/{id}")
	 public void delete(@PathVariable("id") Long id){
		 Optional<Kunde> checkKunde = this.kundeService.getById(id);
			
			if (checkKunde == null) {
				return;
			}
	    	this.kundeService.delete(checkKunde.get());
	 }
	 
	 @GetMapping(value = "/service/kunde")
	 public List<Kunde> all(){
	  	return this.kundeService.findAll();
	 }

}
