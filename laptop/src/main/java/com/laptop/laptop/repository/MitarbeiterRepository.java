package com.laptop.laptop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.laptop.laptop.model.Mitarbeiter;

public interface MitarbeiterRepository extends JpaRepository<Mitarbeiter, Long> {

	@Query("SELECT user FROM Mitarbeiter user WHERE user.username = :username AND user.password = :password")
	Mitarbeiter auth(@Param("username") String username, @Param("password") String password);
	
	@Query("SELECT user FROM Mitarbeiter user WHERE user.parentid = :parentid")
	List<Mitarbeiter> findByParentId(@Param("parentid") Long parentid);
	
	@Query("SELECT user FROM Mitarbeiter user WHERE user.parentid = null")
	List<Mitarbeiter> findParents();
	
	@Query("SELECT user FROM Mitarbeiter user WHERE user.email = :email")
	Mitarbeiter getByEmail(@Param("email") String email);
}
