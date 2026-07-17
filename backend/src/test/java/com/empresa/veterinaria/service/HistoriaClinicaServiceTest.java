package com.empresa.veterinaria.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.empresa.veterinaria.model.HistoriaClinica;
import com.empresa.veterinaria.repository.HistoriaClinicaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Arrays;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class HistoriaClinicaServiceTest {

    @Mock
    private HistoriaClinicaRepository repository;

    @InjectMocks
    private HistoriaClinicaService service;

    private HistoriaClinica historia;

    @BeforeEach
    void setUp() {
        historia = new HistoriaClinica();
        historia.setId(1);
        historia.setFechaCreacion(20260716);
    }

    @Test
    void guardar_DebeRetornarHistoria() {
        when(repository.save(any(HistoriaClinica.class))).thenReturn(historia);
        // Si aplicaste el fix de "hidratación" en este servicio, descomenta la siguiente línea:
        // when(repository.findById(1)).thenReturn(Optional.of(historia));

        HistoriaClinica resultado = service.guardar(historia);
        assertNotNull(resultado);
        assertEquals(20260716, resultado.getFechaCreacion());
    }

    @Test
    void obtenerTodas_DebeRetornarLista() {
        when(repository.findAll()).thenReturn(Arrays.asList(historia));
        assertEquals(1, service.obtenerTodas().size());
    }
}
