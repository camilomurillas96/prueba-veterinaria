import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Colaborador } from 'src/app/models/colaborador.model';

@Component({ selector: 'app-colaborador-list', template: `
<div class="container mt-4">
  <h3>Colaboradores <button routerLink="/nuevo-colaborador" class="btn btn-sm btn-success float-end">Nuevo</button></h3>
  <table class="table table-striped">
    <thead class="table-dark"><tr><th>ID</th><th>Nombre</th><th>Cargo</th><th>Especialidad</th><th>Acciones</th></tr></thead>
    <tbody>
      <tr *ngFor="let c of colaboradores">
        <td>{{c.id}}</td><td>{{c.nombre}} {{c.apellido}}</td><td>{{c.cargo}}</td><td>{{c.especialidad}}</td>
        <td>
          <button [routerLink]="['/editar-colaborador', c.id]" class="btn btn-sm btn-primary">Editar</button>
          <button (click)="eliminar(c.id)" class="btn btn-sm btn-danger ms-2">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`})
export class ColaboradorListComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  constructor(private service: ColaboradorService) {}
  ngOnInit(): void { this.service.listar().subscribe(data => this.colaboradores = data); }
  eliminar(id: any) { if(confirm('¿Eliminar?')) this.service.eliminar(id).subscribe(() => this.colaboradores = this.colaboradores.filter(c => c.id !== id)); }
}