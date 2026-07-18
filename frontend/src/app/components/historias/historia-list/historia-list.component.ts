import { Component, OnInit } from '@angular/core';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { HistoriaClinica } from 'src/app/models/historia-clinica.model';

@Component({ selector: 'app-historia-list', template: `
<div class="container mt-4">
  <h3>Historias Clínicas <button routerLink="/nueva-historia" class="btn btn-sm btn-success float-end">Crear</button></h3>
  <table class="table table-striped">
    <thead class="table-dark"><tr><th>ID</th><th>Fecha Creación</th><th>Mascota</th><th>Acciones</th></tr></thead>
    <tbody>
      <tr *ngFor="let h of historias">
        <td>{{h.id}}</td><td>{{h.fechaCreacion}}</td><td>{{h.mascota.nombre}}</td>
        <td><button (click)="eliminar(h.id)" class="btn btn-sm btn-danger ms-2">Eliminar</button></td>
      </tr>
    </tbody>
  </table>
</div>
`})
export class HistoriaListComponent implements OnInit {
  historias: HistoriaClinica[] = [];
  constructor(private service: HistoriaClinicaService) {}
  ngOnInit(): void { this.service.listar().subscribe(data => this.historias = data); }
  eliminar(id: any) { if(confirm('¿Eliminar?')) this.service.eliminar(id).subscribe(() => this.historias = this.historias.filter(h => h.id !== id)); }
}