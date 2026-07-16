package com.empresa.veterinaria.controller;

import com.empresa.veterinaria.model.Colaborador;
import com.empresa.veterinaria.service.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/colaboradores")
@CrossOrigin(origins = "*")
public class ColaboradorController {

    @Autowired
    private ColaboradorService service;

    @GetMapping
    public ResponseEntity<List<Colaborador>> listar() {
        return new ResponseEntity<>(service.obtenerTodos(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Colaborador> crear(@RequestBody Colaborador colaborador) {
        return new ResponseEntity<>(service.guardar(colaborador), HttpStatus.CREATED);
    }
}