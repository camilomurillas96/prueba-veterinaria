package com.empresa.veterinaria.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.empresa.veterinaria.model.Usuario;
import com.empresa.veterinaria.repository.UsuarioRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class UsuarioServiceTest {

    @Mock
    private UsuarioRepository repository;

    @InjectMocks
    private UsuarioService service;

    private Usuario usuario;

    @BeforeEach
    void setUp() {
        usuario = new Usuario();
        usuario.setId(1);
        usuario.setNombre("Andres");
        usuario.setApellido("Gonzalez");
        usuario.setTipoDocumento("CC");
        usuario.setDocumentoIdentificacion(123456789);
        usuario.setEstado("ACTIVO");
        usuario.setSexo(1);
    }

    @Test
    void guardar_DebeRetornarUsuario() {
        when(repository.save(any(Usuario.class))).thenReturn(usuario);

        Usuario resultado = service.guardar(usuario);

        assertNotNull(resultado);
        assertEquals("Andres", resultado.getNombre());
        verify(repository, times(1)).save(usuario);
    }

    @Test
    void obtenerTodos_DebeRetornarLista() {
        when(repository.findAll()).thenReturn(Arrays.asList(usuario));

        List<Usuario> lista = service.obtenerTodos();

        assertFalse(lista.isEmpty());
        assertEquals(1, lista.size());
        verify(repository, times(1)).findAll();
    }

    @Test
    void obtenerPorId_DebeRetornarUsuario_CuandoExiste() {
        when(repository.findById(1)).thenReturn(Optional.of(usuario));

        Optional<Usuario> resultado = service.obtenerPorId(1);

        assertTrue(resultado.isPresent());
        assertEquals(123456789, resultado.get().getDocumentoIdentificacion());
    }

    @Test
    void eliminar_DebeEjecutarRepositoryDelete() {
        doNothing().when(repository).deleteById(1);

        service.eliminar(1);

        verify(repository, times(1)).deleteById(1);
    }
}