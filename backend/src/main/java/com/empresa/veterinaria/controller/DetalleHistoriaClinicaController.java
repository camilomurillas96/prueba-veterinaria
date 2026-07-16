package com.empresa.veterinaria.controller;

import com.empresa.veterinaria.model.DetalleHistoriaClinica;
import com.empresa.veterinaria.service.DetalleHistoriaClinicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/detalles-historia")
@CrossOrigin(origins = "*")
public class DetalleHistoriaClinicaController {

    @Autowired
    private DetalleHistoriaClinicaService service;

    @GetMapping
    public ResponseEntity<List<DetalleHistoriaClinica>> listar() {
        return new ResponseEntity<>(service.obtenerTodos(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DetalleHistoriaClinica> crear(@RequestBody DetalleHistoriaClinica detalle) {
        return new ResponseEntity<>(service.guardar(detalle), HttpStatus.CREATED);
    }
}