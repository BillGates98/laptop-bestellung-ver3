package com.laptop.laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.laptop.laptop.model.Mitarbeiter;

public interface MitarbeiterRepository extends JpaRepository<Mitarbeiter, Long> {

	@Query("SELECT user FROM Mitarbeiter user WHERE user.username = :username AND user.password = :password")
	Mitarbeiter auth(@Param("username") String username, @Param("password") String password);
	
}
