package com.laptop.laptop.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.laptop.laptop.model.Laptop;
import com.laptop.laptop.repository.LaptopRepository;
import com.laptop.laptop.service.LaptopService;

@Service
public class LaptopServiceImpl implements LaptopService {

	private final LaptopRepository LaptopRepository;

	public LaptopServiceImpl(LaptopRepository LaptopRepository) {
		this.LaptopRepository = LaptopRepository;
	}

	@Override
	public Laptop save(Laptop Laptop) {
		// TODO Auto-generated method stub
		return this.LaptopRepository.save(Laptop);
	}

	@Override
	public Laptop update(Laptop Laptop) {
		// TODO Auto-generated method stub
		return this.LaptopRepository.save(Laptop);
	}

	@Override
	public void delete(Laptop Laptop) {
		// TODO Auto-generated method stub
		this.LaptopRepository.delete(Laptop);
	}

	@Override
	public List<Laptop> findAll() {
		// TODO Auto-generated method stub
		return this.LaptopRepository.findAll();
	}

	@Override
	public Optional<Laptop> getById(Long id) {
		// TODO Auto-generated method stub
		return this.LaptopRepository.findById(id);
	}

}
