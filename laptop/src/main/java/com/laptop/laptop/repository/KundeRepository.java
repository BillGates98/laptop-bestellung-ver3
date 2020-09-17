package com.laptop.laptop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.laptop.laptop.model.Kunde;

public interface KundeRepository extends JpaRepository<Kunde, Long> {
	
	@Query("SELECT kunde FROM Kunde kunde WHERE kunde.Email = :email")
	List<Kunde> findKundeByEmail(@Param("email") String email);
}
