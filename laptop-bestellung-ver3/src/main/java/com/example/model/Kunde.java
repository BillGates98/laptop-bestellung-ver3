package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public  class Kunde  
{ 
	//Attributes
	// Mitarbeiter : 1 
	@Id
	@GeneratedValue
	private Long id;
	private String BenutzerName;
	private String Email;
	private String GerateTyp;
	private String Begrundung;
	
	// Vortsetzer : 2
	private String VorNameVort;
	private String NachNameVort;
	private String RollenVort;
	private String DatumVort;
	private String KostenstelleVort;
	private String PreisVort;
	private String FreigabeVort;
	
	// 3
	private String UsernameIt;
	private String EmailIt;
	private String BestellgrundIt;
	private String PreisIt;
	private String BestellreferenzIt;
	
	// 4
	private String RechnungMitKostenstelleIt;
	private String AbgabeBuchIt;
	
	// 5
	private String versanddatumExp;
	private String BestellreferenzExp;
	private String buchhaltungExp;
	
	
	public Kunde() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Kunde(Long id, String benutzerName, String email, String gerateTyp, String begrundung,
			String vorNameVort, String nachNameVort, String rollenVort, String datumVort, String kostenstelleVort,
			String preisVort, String freigabeVort, String usernameIt, String emailIt, String bestellgrundIt,
			String preisIt, String bestellreferenzIt, String rechnungMitKostenstelleIt, String abgabeBuchIt,
			String versanddatumExp, String bestellreferenzExp, String buchhaltungExp) {
		super();
		this.id = id;
		this.BenutzerName = benutzerName;
		this.Email = email;
		this.GerateTyp = gerateTyp;
		this.Begrundung = begrundung;
		this.VorNameVort = vorNameVort;
		this.NachNameVort = nachNameVort;
		this.RollenVort = rollenVort;
		this.DatumVort = datumVort;
		this.KostenstelleVort = kostenstelleVort;
		this.PreisVort = preisVort;
		this.FreigabeVort = freigabeVort;
		this.UsernameIt = usernameIt;
		this.EmailIt = emailIt;
		this.BestellgrundIt = bestellgrundIt;
		this.PreisIt = preisIt;
		this.BestellreferenzIt = bestellreferenzIt;
		this.RechnungMitKostenstelleIt = rechnungMitKostenstelleIt;
		this.AbgabeBuchIt = abgabeBuchIt;
		this.versanddatumExp = versanddatumExp;
		this.BestellreferenzExp = bestellreferenzExp;
		this.buchhaltungExp = buchhaltungExp;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBenutzerName() {
		return BenutzerName;
	}

	public void setBenutzerName(String benutzerName) {
		BenutzerName = benutzerName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getGerateTyp() {
		return GerateTyp;
	}

	public void setGerateTyp(String gerateTyp) {
		GerateTyp = gerateTyp;
	}

	public String getBegrundung() {
		return Begrundung;
	}

	public void setBegrundung(String begrundung) {
		Begrundung = begrundung;
	}

	public String getVorNameVort() {
		return VorNameVort;
	}

	public void setVorNameVort(String vorNameVort) {
		VorNameVort = vorNameVort;
	}

	public String getNachNameVort() {
		return NachNameVort;
	}

	public void setNachNameVort(String nachNameVort) {
		NachNameVort = nachNameVort;
	}

	public String getRollenVort() {
		return RollenVort;
	}

	public void setRollenVort(String rollenVort) {
		RollenVort = rollenVort;
	}

	public String getDatumVort() {
		return DatumVort;
	}

	public void setDatumVort(String datumVort) {
		DatumVort = datumVort;
	}

	public String getKostenstelleVort() {
		return KostenstelleVort;
	}

	public void setKostenstelleVort(String kostenstelleVort) {
		KostenstelleVort = kostenstelleVort;
	}

	public String getPreisVort() {
		return PreisVort;
	}

	public void setPreisVort(String preisVort) {
		PreisVort = preisVort;
	}

	public String getFreigabeVort() {
		return FreigabeVort;
	}

	public void setFreigabeVort(String freigabeVort) {
		FreigabeVort = freigabeVort;
	}

	public String getUsernameIt() {
		return UsernameIt;
	}

	public void setUsernameIt(String usernameIt) {
		UsernameIt = usernameIt;
	}

	public String getEmailIt() {
		return EmailIt;
	}

	public void setEmailIt(String emailIt) {
		EmailIt = emailIt;
	}

	public String getBestellgrundIt() {
		return BestellgrundIt;
	}

	public void setBestellgrundIt(String bestellgrundIt) {
		BestellgrundIt = bestellgrundIt;
	}

	public String getPreisIt() {
		return PreisIt;
	}

	public void setPreisIt(String preisIt) {
		PreisIt = preisIt;
	}

	public String getBestellreferenzIt() {
		return BestellreferenzIt;
	}

	public void setBestellreferenzIt(String bestellreferenzIt) {
		BestellreferenzIt = bestellreferenzIt;
	}

	public String getRechnungMitKostenstelleIt() {
		return RechnungMitKostenstelleIt;
	}

	public void setRechnungMitKostenstelleIt(String rechnungMitKostenstelleIt) {
		RechnungMitKostenstelleIt = rechnungMitKostenstelleIt;
	}

	public String getAbgabeBuchIt() {
		return AbgabeBuchIt;
	}

	public void setAbgabeBuchIt(String abgabeBuchIt) {
		AbgabeBuchIt = abgabeBuchIt;
	}

	public String getVersanddatumExp() {
		return versanddatumExp;
	}

	public void setVersanddatumExp(String versanddatumExp) {
		this.versanddatumExp = versanddatumExp;
	}

	public String getBestellreferenzExp() {
		return BestellreferenzExp;
	}

	public void setBestellreferenzExp(String bestellreferenzExp) {
		BestellreferenzExp = bestellreferenzExp;
	}

	public String getBuchhaltungExp() {
		return buchhaltungExp;
	}

	public void setBuchhaltungExp(String buchhaltungExp) {
		this.buchhaltungExp = buchhaltungExp;
	}
		
} //End Class Projet


