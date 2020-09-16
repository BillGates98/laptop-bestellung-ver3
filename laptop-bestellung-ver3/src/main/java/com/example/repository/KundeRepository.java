package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Kunde;

public interface KundeRepository extends JpaRepository<Kunde, Long> {
	
}
