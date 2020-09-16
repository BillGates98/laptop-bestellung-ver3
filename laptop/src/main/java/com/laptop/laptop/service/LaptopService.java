package com.laptop.laptop.service;

import java.util.List;
import java.util.Optional;

import com.laptop.laptop.model.Laptop;

public interface LaptopService {
	Laptop save(Laptop data);
	Laptop update(Laptop data);
	void delete(Laptop data);
	Optional<Laptop> getById(Long id);
	List<Laptop> findAll();
}
