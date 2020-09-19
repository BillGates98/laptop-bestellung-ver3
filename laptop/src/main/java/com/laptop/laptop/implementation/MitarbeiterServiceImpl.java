package com.laptop.laptop.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.laptop.laptop.model.Mitarbeiter;
import com.laptop.laptop.repository.MitarbeiterRepository;
import com.laptop.laptop.service.MitarbeiterService;
@Service
public class MitarbeiterServiceImpl implements MitarbeiterService {
	
    private final MitarbeiterRepository MitarbeiterRepository;

    public MitarbeiterServiceImpl(MitarbeiterRepository MitarbeiterRepository) {
        this.MitarbeiterRepository = MitarbeiterRepository;
    }

	@Override
	public Mitarbeiter save(Mitarbeiter Mitarbeiter) {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.save(Mitarbeiter);
	}

	@Override
	public Mitarbeiter update(Mitarbeiter Mitarbeiter) {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.save(Mitarbeiter);
	}

	@Override
	public void delete(Mitarbeiter Mitarbeiter) {
		// TODO Auto-generated method stub
		this.MitarbeiterRepository.delete(Mitarbeiter);
	}

	@Override
	public List<Mitarbeiter> findAll() {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.findAll();
	}

	@Override
	public Optional<Mitarbeiter> getById(Long id) {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.findById(id);
	}

	@Override
	public Mitarbeiter auth(String username, String password) {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.auth(username, password);
	}

	@Override
	public List<Mitarbeiter> findByParentid(Long parentid) {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.findByParentId(parentid);
	}

	@Override
	public Mitarbeiter getByEmail(String email) {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.getByEmail(email);
	}

	@Override
	public List<Mitarbeiter> findParents() {
		// TODO Auto-generated method stub
		return this.MitarbeiterRepository.findParents();
	}

}
