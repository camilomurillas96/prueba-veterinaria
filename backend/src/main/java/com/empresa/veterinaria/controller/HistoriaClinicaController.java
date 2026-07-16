package com.empresa.veterinaria.controller;

import com.empresa.veterinaria.model.HistoriaClinica;
import com.empresa.veterinaria.service.HistoriaClinicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/historias-clinicas")
@CrossOrigin(origins = "*")
public class HistoriaClinicaController {

    @Autowired
    private HistoriaClinicaService service;

    @GetMapping
    public ResponseEntity<List<HistoriaClinica>> listar() {
        return new ResponseEntity<>(service.obtenerTodas(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<HistoriaClinica> crear(@RequestBody HistoriaClinica historia) {
        return new ResponseEntity<>(service.guardar(historia), HttpStatus.CREATED);
    }
}