package com.empresa.veterinaria.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.empresa.veterinaria.model.Mascota;
import com.empresa.veterinaria.repository.MascotaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Arrays;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class MascotaServiceTest {

    @Mock
    private MascotaRepository repository;

    @InjectMocks
    private MascotaService service;

    private Mascota mascota;

    @BeforeEach
    void setUp() {
        mascota = new Mascota();
        mascota.setId(1);
        mascota.setNombre("Firulais");
        mascota.setRaza("Labrador");
        mascota.setSexo("Macho");
    }

    @Test
    void guardar_DebeRetornarMascota() {
        when(repository.save(any(Mascota.class))).thenReturn(mascota);
        // Si aplicaste el fix de "hidratación" en este servicio, descomenta la siguiente línea:
        // when(repository.findById(1)).thenReturn(Optional.of(mascota));

        Mascota resultado = service.guardar(mascota);

        assertNotNull(resultado);
        assertEquals("Firulais", resultado.getNombre());
    }

    @Test
    void obtenerTodos_DebeRetornarMascotas() {
        when(repository.findAll()).thenReturn(Arrays.asList(mascota));
        assertEquals(1, service.obtenerTodas().size());
    }

    @Test
    void obtenerPorId_DebeRetornarMascota() {
        when(repository.findById(1)).thenReturn(Optional.of(mascota));
        assertTrue(service.obtenerPorId(1).isPresent());
    }
}