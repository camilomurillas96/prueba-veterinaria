import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({ selector: 'app-usuario-list', templateUrl: './usuario-list.component.html' })
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(data => {
      this.usuarios = data;
    });
  }

  eliminar(id: number | undefined): void {
    // Nos aseguramos de que el id no sea undefined antes de proceder
    if (id === undefined) {
      console.error('No se puede eliminar un usuario con id indefinido.');
      return;
    }
    if (confirm('¿Está seguro de eliminar este usuario?')) {
      this.usuarioService.eliminar(id).subscribe(() => {
        this.usuarios = this.usuarios.filter(u => u.id !== id);
      });
    }
  }
}