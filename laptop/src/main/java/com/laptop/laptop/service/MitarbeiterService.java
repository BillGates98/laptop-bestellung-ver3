package com.laptop.laptop.service;

import java.util.List;
import java.util.Optional;

import com.laptop.laptop.model.Mitarbeiter;

public interface MitarbeiterService {
	Mitarbeiter save(Mitarbeiter data);
	Mitarbeiter update(Mitarbeiter data);
	void delete(Mitarbeiter data);
	Optional<Mitarbeiter> getById(Long id);
	List<Mitarbeiter> findAll();
	List<Mitarbeiter> findByParentid(Long parentid);
	Mitarbeiter auth(String username, String password);
	Mitarbeiter getByEmail(String email);
}
