package com.laptop.laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.laptop.laptop.model.Kunde;

public interface KundeRepository extends JpaRepository<Kunde, Long> {
	
}
