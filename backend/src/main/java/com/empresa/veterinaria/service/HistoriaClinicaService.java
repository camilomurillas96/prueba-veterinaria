package com.empresa.veterinaria.service;

import com.empresa.veterinaria.model.HistoriaClinica;
import com.empresa.veterinaria.repository.HistoriaClinicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class HistoriaClinicaService {

    @Autowired
    private HistoriaClinicaRepository repository;

    public List<HistoriaClinica> obtenerTodas() { return repository.findAll(); }
    public Optional<HistoriaClinica> obtenerPorId(Integer id) { return repository.findById(id); }
    public HistoriaClinica guardar(HistoriaClinica historia) { return repository.save(historia); }
    public void eliminar(Integer id) { repository.deleteById(id); }
}