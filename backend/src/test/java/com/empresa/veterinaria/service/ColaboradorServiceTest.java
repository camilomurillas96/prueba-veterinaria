package com.empresa.veterinaria.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.empresa.veterinaria.model.Colaborador;
import com.empresa.veterinaria.repository.ColaboradorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Arrays;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class ColaboradorServiceTest {

    @Mock
    private ColaboradorRepository repository;

    @InjectMocks
    private ColaboradorService service;

    private Colaborador colaborador;

    @BeforeEach
    void setUp() {
        colaborador = new Colaborador();
        colaborador.setId(1);
        colaborador.setNombre("Carlos");
        colaborador.setCargo("Veterinario");
        colaborador.setEspecialidad("Cirujano");
    }

    @Test
    void guardar_DebeRetornarColaborador() {
        when(repository.save(any(Colaborador.class))).thenReturn(colaborador);
        Colaborador resultado = service.guardar(colaborador);
        assertNotNull(resultado);
        assertEquals("Cirujano", resultado.getEspecialidad());
    }

    @Test
    void obtenerTodos_DebeRetornarLista() {
        when(repository.findAll()).thenReturn(Arrays.asList(colaborador));
        assertFalse(service.obtenerTodos().isEmpty());
    }

    @Test
    void obtenerPorId_DebeRetornarColaborador() {
        when(repository.findById(1)).thenReturn(Optional.of(colaborador));
        assertTrue(service.obtenerPorId(1).isPresent());
    }
}