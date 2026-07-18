import { Component, OnInit } from '@angular/core';
import { DetalleHistoriaService } from 'src/app/services/detalle-historia.service';
import { DetalleHistoriaClinica } from 'src/app/models/detalle-historia.model';

@Component({ selector: 'app-detalle-list', template: `
<div class="container mt-4">
  <h3>Controles (Detalles HC) <button routerLink="/nuevo-detalle" class="btn btn-sm btn-success float-end">Registrar Control</button></h3>
  <table class="table table-striped">
    <thead class="table-dark"><tr><th>ID</th><th>Fecha</th><th>Historia ID</th><th>Temp.</th><th>Peso</th><th>Veterinario</th></tr></thead>
    <tbody>
      <tr *ngFor="let d of detalles">
        <td>{{d.id}}</td><td>{{d.fechaHora | date:'short'}}</td><td>{{d.historiaClinica.id}}</td>
        <td>{{d.temperatura}}</td><td>{{d.peso}} kg</td><td>{{d.colaborador.nombre}}</td>
      </tr>
    </tbody>
  </table>
</div>
`})
export class DetalleListComponent implements OnInit {
  detalles: DetalleHistoriaClinica[] = [];
  constructor(private service: DetalleHistoriaService) {}
  ngOnInit(): void { this.service.listar().subscribe(data => this.detalles = data); }
}
