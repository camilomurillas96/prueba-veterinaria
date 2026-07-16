package com.empresa.veterinaria.service;

import com.empresa.veterinaria.model.Colaborador;
import com.empresa.veterinaria.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository repository;

    public List<Colaborador> obtenerTodos() { return repository.findAll(); }
    public Optional<Colaborador> obtenerPorId(Integer id) { return repository.findById(id); }
    public Colaborador guardar(Colaborador colaborador) { return repository.save(colaborador); }
    public void eliminar(Integer id) { repository.deleteById(id); }
}