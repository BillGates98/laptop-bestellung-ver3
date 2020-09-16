package com.laptop.laptop.service;

import java.util.List;
import java.util.Optional;

import com.laptop.laptop.model.Kunde;

public interface KundeService {
	Kunde save(Kunde kunde);
	Kunde update(Kunde kunde);
	void delete(Kunde kunde);
	Optional<Kunde> getById(Long id);
	List<Kunde> findAll();
}
