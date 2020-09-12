package com.example.workflow;

/*import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;*/

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
public class GetDataFromDatabase implements JavaDelegate {

	@Override
	public void execute(DelegateExecution execution) throws Exception {
	// Mitarbeiter Eingabe
		String var1 = (String) execution.getVariable("BenutzerName");
		String var2 = (String) execution.getVariable("Email");
		String  var3= (String) execution.getVariable("GerateTyp");
		String var4 = (String) execution.getVariable("Begrundung");  		
	//Spätere Variablen einstellen 
		System.out.println(var3);
		execution.setVariable("Username", var1);
		execution.setVariable("Email", var2);
		execution.setVariable("GerateTyp0", var3);
		execution.setVariable("GerateTyp1", var3);
		execution.setVariable("Bestellgrund", var4);
		//System.out.printf(var1);	
	//Datenbankverbindung:
		String url = "jdbc:postgresql://localhost:5432/postgres?currentSchema=public";
		Connection conn = DriverManager.getConnection(url,"postgres","ejemaster5");
	//Mitarbeiter Details abrufen
		List <String> Mitarbeiter = new ArrayList<>();
		try{
        PreparedStatement stmt = conn.prepareStatement("SELECT vorname,nachname,vorgesetzer,rollen FROM c_mitarbeiter WHERE username =?");
        stmt.setString(1, var1);
        ResultSet rs = stmt.executeQuery();
		//Statement stmt = conn.createStatement();
      //ResultSet rs = stmt.executeQuery("SELECT 'vorname','nachname','vorgesetzer','rollen' FROM c_mitarbeiter WHERE username = '"+ var1+"'");
        while ( rs.next() ) {
            //System.out.println(rs.getString(1)+ "\n" +rs.getString(2)+ "\n" +rs.getString(3)+ "\n" +rs.getString(4));
            Mitarbeiter.add(rs.getString(1));
            Mitarbeiter.add(rs.getString(2));
            Mitarbeiter.add(rs.getString(3));
            Mitarbeiter.add(rs.getString(4));
        				}
			} 
		catch (Exception e) {
			System.err.println("Got an exception! ");
			System.err.println(e.getMessage());
							}
		execution.setVariable("VorName",Mitarbeiter.get(0));
		execution.setVariable("NachName",Mitarbeiter.get(1));
		execution.setVariable("Vorgesetzer",Mitarbeiter.get(2));
		execution.setVariable("Rollen",Mitarbeiter.get(3));
		
	
	//Laptop-Details abrufen
		List <String> lModelList = new ArrayList<>();
		List <Integer> lPriceList = new ArrayList<>();
		try{
	        Statement stmt = conn.createStatement();
	        ResultSet rs;
	        rs = stmt.executeQuery("SELECT laptop_name,laptop_price FROM c_laptop");
	        while ( rs.next() ) {
	            String lModel = rs.getString("laptop_name");
	            int lPrice = rs.getInt("laptop_price");
	            //System.out.println(lModel);
	            lModelList.add(lModel);
	            lPriceList.add(lPrice);
	            }
	        	stmt.close();
	        	conn.close();
				} 
			catch (Exception e) {
				System.err.println("Got an exception! ");
				System.err.println(e.getMessage());
								}
	
	    //Vorgesetzer Input
		String price=String.valueOf(lPriceList.get(0));
		execution.setVariable("Kostenstelle", lModelList.get(0));
		execution.setVariable("Preis",price);
		String var5 = (String) execution.getVariable("Kostenstelle"); 
		String var6 = (String) execution.getVariable("Preis"); 
		execution.setVariable("Bestellreferenz", var5);
		execution.setVariable("Preis1", var6);
	}
	}


