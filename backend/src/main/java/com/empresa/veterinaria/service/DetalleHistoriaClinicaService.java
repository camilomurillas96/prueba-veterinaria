package com.empresa.veterinaria.service;

import com.empresa.veterinaria.model.DetalleHistoriaClinica;
import com.empresa.veterinaria.repository.DetalleHistoriaClinicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DetalleHistoriaClinicaService {

    @Autowired
    private DetalleHistoriaClinicaRepository repository;

    public List<DetalleHistoriaClinica> obtenerTodos() { return repository.findAll(); }
    public Optional<DetalleHistoriaClinica> obtenerPorId(Integer id) { return repository.findById(id); }
    public DetalleHistoriaClinica guardar(DetalleHistoriaClinica detalle) { return repository.save(detalle); }
    public void eliminar(Integer id) { repository.deleteById(id); }
}