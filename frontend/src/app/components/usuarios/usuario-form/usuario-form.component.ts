import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ selector: 'app-usuario-form', templateUrl: './usuario-form.component.html' })
export class UsuarioFormComponent implements OnInit {
  usuario: Usuario = { nombre: '', apellido: '', tipoDocumento: 'CC', documentoIdentificacion: 0, estado: 'ACTIVO', sexo: 1 };
  isEditMode = false;

  constructor(
    private usuarioService: UsuarioService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.usuarioService.obtenerPorId(id).subscribe(data => this.usuario = data);
    }
  }

  guardar() {
    const operacion = this.isEditMode 
      ? this.usuarioService.actualizar(this.usuario) 
      : this.usuarioService.crear(this.usuario);

    operacion.subscribe(() => {
      alert(this.isEditMode ? 'Actualizado correctamente' : 'Creado con éxito');
      this.router.navigate(['/usuarios']);
    });
  }
}
