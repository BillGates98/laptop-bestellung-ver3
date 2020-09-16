package com.example.implemention;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.model.Kunde;
import com.example.repository.KundeRepository;
import com.example.service.KundeService;
@Service
public class KundeServiceImpl implements KundeService {
	
    private final KundeRepository KundeRepository;

    public KundeServiceImpl(KundeRepository KundeRepository) {
        this.KundeRepository = KundeRepository;
    }

	@Override
	public Kunde save(Kunde Kunde) {
		// TODO Auto-generated method stub
		return this.KundeRepository.save(Kunde);
	}

	@Override
	public Kunde update(Kunde Kunde) {
		// TODO Auto-generated method stub
		return this.KundeRepository.save(Kunde);
	}

	@Override
	public void delete(Kunde Kunde) {
		// TODO Auto-generated method stub
		this.KundeRepository.delete(Kunde);
	}

	@Override
	public List<Kunde> findAll() {
		// TODO Auto-generated method stub
		return this.KundeRepository.findAll();
	}

	@Override
	public Optional<Kunde> getById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
