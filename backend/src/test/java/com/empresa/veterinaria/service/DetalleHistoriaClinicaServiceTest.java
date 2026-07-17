package com.empresa.veterinaria.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.empresa.veterinaria.model.DetalleHistoriaClinica;
import com.empresa.veterinaria.repository.DetalleHistoriaClinicaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class DetalleHistoriaClinicaServiceTest {

    @Mock
    private DetalleHistoriaClinicaRepository repository;

    @InjectMocks
    private DetalleHistoriaClinicaService service;

    private DetalleHistoriaClinica detalle;

    @BeforeEach
    void setUp() {
        detalle = new DetalleHistoriaClinica();
        detalle.setId(1);
        detalle.setTemperatura("38.5");
        detalle.setPeso(new BigDecimal(12.50));
        detalle.setObservacion("Paciente estable");
    }

    @Test
    void guardar_DebeRetornarDetalle() {
        // Simulamos el comportamiento del fix: primero guarda y luego consulta
        when(repository.save(any(DetalleHistoriaClinica.class))).thenReturn(detalle);
        when(repository.findById(1)).thenReturn(Optional.of(detalle));

        DetalleHistoriaClinica resultado = service.guardar(detalle);

        assertNotNull(resultado);
        assertEquals("38.5", resultado.getTemperatura());
        // Verifica que se llamó tanto al save como al findById
        verify(repository, times(1)).save(detalle);
        verify(repository, times(1)).findById(1);
    }

    @Test
    void obtenerTodos_DebeRetornarLista() {
        when(repository.findAll()).thenReturn(Arrays.asList(detalle));
        assertFalse(service.obtenerTodos().isEmpty());
    }

    @Test
    void eliminar_DebeEjecutarRepositoryDelete() {
        doNothing().when(repository).deleteById(1);
        service.eliminar(1);
        verify(repository, times(1)).deleteById(1);
    }
}
