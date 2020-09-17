package com.laptop.laptop.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.laptop.laptop.model.Kunde;
import com.laptop.laptop.model.Mitarbeiter;
import com.laptop.laptop.service.KundeService;
import com.laptop.laptop.service.MitarbeiterService;

import contrat.SendMail;


@RestController
@CrossOrigin("*")
public class KundeController {
    	
	KundeService kundeService;
	MitarbeiterService mitArbeiterService;
	
	@Autowired
	private Environment env;
	
	KundeController(KundeService kundeService, Environment env, MitarbeiterService mitArbeiterService) {
		this.kundeService = kundeService;
		this.env = env;
		this.mitArbeiterService = mitArbeiterService;
	}
	
	@PostMapping(value = "/service/kunde")
	public Kunde save(@RequestBody Kunde kunde) {
    	return this.kundeService.save(kunde);
	}
	
	@PutMapping(value ="/service/kunde/{id}")
	public Kunde update(@PathVariable("id") Long id, @RequestBody Kunde kunde) {
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
	 
	 @GetMapping(value = "/service/kunde/{email}/search")
	 public List<Kunde> getKundeMitarbeiter(@PathVariable("email") String email){
	  	return this.kundeService.findKundeByEmail(email);
	 }
	 
	 @GetMapping(value = "/service/kunde/{parentId}/children")
	 public List<Kunde> getKundeChildren(@PathVariable("parentId") Long parentId){
	  	ArrayList<Kunde> kundes = new ArrayList<Kunde>();
	  	List<Mitarbeiter> mitArbeiters = this.mitArbeiterService.findByParentid(parentId);
	  	for (Mitarbeiter mit: mitArbeiters) {
	  		kundes.addAll(this.kundeService.findKundeByEmail(mit.getEmail()));
	  	} 
		return kundes;
	 }
	 
	 @PostMapping(value="/service/send-mail")
	 public Object sendMail(@RequestBody SendMail object) {
		HashMap<String, String> response = new HashMap<String, String>();
		response.put("code", "OK");
		this.simpleMailer(object.getEmail(), "ObjectText", "Content");
		return response;
	 }
	 
	 public void simpleMailer(String receiver, String objectText, String content) {

			final String username = env.getProperty("spring.mail.username");
			final String password = env.getProperty("spring.mail.password");

			java.util.Properties props = new java.util.Properties();
			props.put("mail.smtp.auth", env.getProperty("spring.mail.properties.mail.smtp.auth"));
			props.put("mail.smtp.starttls.enable", env.getProperty("spring.mail.properties.mail.smtp.starttls.enable"));
			props.put("mail.smtp.ssl.trust", env.getProperty("spring.mail.host"));
			props.put("mail.smtp.host", env.getProperty("spring.mail.host"));
			props.put("mail.smtp.port", env.getProperty("spring.mail.port"));

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(username, password);
				}
			});

			try {
				Message message = new MimeMessage(session);
				message.setFrom(new InternetAddress(username));
				message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(receiver));
				message.setSubject(objectText);
				message.setText(content);
				Transport.send(message);

			} catch (MessagingException e) {
				e.printStackTrace();
			}

		}

}
