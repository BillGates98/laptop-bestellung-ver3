package com.laptop.laptop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.laptop.laptop.model.Laptop;

public interface LaptopRepository extends JpaRepository<Laptop, Long> {
	
}
