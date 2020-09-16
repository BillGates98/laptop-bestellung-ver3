package com.laptop.laptop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.laptop.laptop.model.Mitarbeiter;
import com.laptop.laptop.service.MitarbeiterService;

import contrat.Auth;


@RestController
public class MitarbeiterController {
    	
	MitarbeiterService MitarbeiterService;
	
	MitarbeiterController(MitarbeiterService MitarbeiterService) {
		this.MitarbeiterService = MitarbeiterService;
	}
	
	@PostMapping(value = "/service/auth")
	public Mitarbeiter save(@RequestBody Auth login) {
		Mitarbeiter response = this.MitarbeiterService.auth(login.getUsername(), login.getPassword());
		return response;
	}
	
	@PostMapping(value = "/service/mitarbeiter")
	public Mitarbeiter save(@RequestBody Mitarbeiter Mitarbeiter) {
    	return this.MitarbeiterService.save(Mitarbeiter);
	}
	
	@PutMapping(value ="/service/mitarbeiter/{id}")
	public Mitarbeiter update(@PathVariable("id") Long id, @RequestBody Mitarbeiter Mitarbeiter) {
		Optional<Mitarbeiter> checkMitarbeiter = this.MitarbeiterService.getById(id);
		
		if (checkMitarbeiter == null) {
			return null;
		}
    	return this.MitarbeiterService.update(Mitarbeiter);
	}
	
	 @DeleteMapping(value = "/service/mitarbeiter/{id}")
	 public void delete(@PathVariable("id") Long id){
		 Optional<Mitarbeiter> checkMitarbeiter = this.MitarbeiterService.getById(id);
			
			if (checkMitarbeiter == null) {
				return;
			}
	    	this.MitarbeiterService.delete(checkMitarbeiter.get());
	 }
	 
	 @GetMapping(value = "/service/mitarbeiter")
	 public List<Mitarbeiter> all(){
	  	return this.MitarbeiterService.findAll();
	 }

}
