import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota.model';

@Component({ selector: 'app-mascota-list', template: `
<div class="container mt-4">
  <h3>Mascotas <button routerLink="/nueva-mascota" class="btn btn-sm btn-success float-end">Nueva</button></h3>
  <table class="table table-striped">
    <thead class="table-dark"><tr><th>ID</th><th>Nombre</th><th>Raza</th><th>Dueño (ID)</th><th>Acciones</th></tr></thead>
    <tbody>
      <tr *ngFor="let m of mascotas">
        <td>{{m.id}}</td><td>{{m.nombre}}</td><td>{{m.raza}}</td><td>{{m.usuario.nombre}} ({{m.usuario.id}})</td>
        <td>
          <button [routerLink]="['/editar-mascota', m.id]" class="btn btn-sm btn-primary">Editar</button>
          <button (click)="eliminar(m.id)" class="btn btn-sm btn-danger ms-2">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`})
export class MascotaListComponent implements OnInit {
  mascotas: Mascota[] = [];
  constructor(private service: MascotaService) {}
  ngOnInit(): void { this.service.listar().subscribe(data => this.mascotas = data); }
  eliminar(id: any) {
    if(confirm('¿Eliminar mascota?')) this.service.eliminar(id).subscribe(() => this.mascotas = this.mascotas.filter(m => m.id !== id));
  }
}