import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { HistoriaClinica } from 'src/app/models/historia-clinica.model';
import { Mascota } from 'src/app/models/mascota.model';

@Component({ selector: 'app-historia-form', template: `
<div class="container mt-4">
  <h3>Apertura Historia Clínica</h3>
  <div class="card p-4">
    <div class="mb-3"><label>Fecha Creación (YYYYMMDD)</label><input type="number" [(ngModel)]="historia.fechaCreacion" class="form-control"></div>
    <div class="mb-3"><label>Mascota</label>
      <select [(ngModel)]="historia.mascota.id" class="form-control">
        <option *ngFor="let m of mascotas" [value]="m.id">{{m.nombre}} (Dueño: {{m.usuario?.nombre}})</option>
      </select>
    </div>
    <button (click)="guardar()" class="btn btn-success">Guardar</button>
  </div>
</div>
`})
export class HistoriaFormComponent implements OnInit {
  historia: HistoriaClinica = { fechaCreacion: 20260716, mascota: {} as Mascota };
  mascotas: Mascota[] = [];
  constructor(private service: HistoriaClinicaService, private mascotaService: MascotaService, private router: Router) {}
  ngOnInit(): void { this.mascotaService.listar().subscribe(data => this.mascotas = data); }
  guardar() { this.service.crear(this.historia).subscribe(() => { alert('Guardado'); this.router.navigate(['/historias']); }); }
}
