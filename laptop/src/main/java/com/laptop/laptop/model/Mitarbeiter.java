package com.laptop.laptop.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public  class Mitarbeiter  
{ 
	// Attributes
	// Mitarbeiter : 1 
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String email;
	private String vorname;
	private String nachname;
	private String vorgesetzer;
	private String rollen;
	private String password;
	private Long parentid;
	
	public Mitarbeiter() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mitarbeiter(Long id, String username, String email, String vorname, String nachname, String vorgesetzer,
			String rollen, String password, Long parentid) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.vorname = vorname;
		this.nachname = nachname;
		this.vorgesetzer = vorgesetzer;
		this.rollen = rollen;
		this.password = password;
		this.parentid = parentid;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getVorname() {
		return vorname;
	}

	public void setVorname(String vorname) {
		this.vorname = vorname;
	}

	public String getNachname() {
		return nachname;
	}

	public void setNachname(String nachname) {
		this.nachname = nachname;
	}

	public String getVorgesetzer() {
		return vorgesetzer;
	}

	public void setVorgesetzer(String vorgesetzer) {
		this.vorgesetzer = vorgesetzer;
	}

	public String getRollen() {
		return rollen;
	}

	public void setRollen(String rollen) {
		this.rollen = rollen;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getParentid() {
		return parentid;
	}

	public void setParentid(Long parentid) {
		this.parentid = parentid;
	}

} //End Class Projet


