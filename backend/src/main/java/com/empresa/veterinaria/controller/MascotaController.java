package com.empresa.veterinaria.controller;

import com.empresa.veterinaria.model.Mascota;
import com.empresa.veterinaria.service.MascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mascotas")
@CrossOrigin(origins = "*")
public class MascotaController {

    @Autowired
    private MascotaService mascotaService;

    @GetMapping
    public ResponseEntity<List<Mascota>> listar() {
        return new ResponseEntity<>(mascotaService.obtenerTodas(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Mascota> crear(@RequestBody Mascota mascota) {
        Mascota nuevaMascota = mascotaService.guardar(mascota);
        return new ResponseEntity<>(nuevaMascota, HttpStatus.CREATED);
    }
}