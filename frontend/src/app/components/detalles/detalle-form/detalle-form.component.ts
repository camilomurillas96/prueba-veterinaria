import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleHistoriaService } from 'src/app/services/detalle-historia.service';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { DetalleHistoriaClinica } from 'src/app/models/detalle-historia.model';

@Component({ selector: 'app-detalle-form', template: `
<div class="container mt-4">
  <h3>Registrar Control Médico</h3>
  <div class="card p-4 row flex-row">
    <div class="col-md-6 mb-3"><label>Historia Clínica ID</label>
      <select [(ngModel)]="detalle.historiaClinica.id" class="form-control">
        <option *ngFor="let h of historias" [value]="h.id">Historia #{{h.id}} (Mascota: {{h.mascota?.nombre}})</option>
      </select>
    </div>
    <div class="col-md-6 mb-3"><label>Veterinario (Colaborador)</label>
      <select [(ngModel)]="detalle.colaborador.id" class="form-control">
        <option *ngFor="let c of colaboradores" [value]="c.id">{{c.nombre}} ({{c.cargo}})</option>
      </select>
    </div>
    <div class="col-md-3 mb-3"><label>Temp.</label><input [(ngModel)]="detalle.temperatura" class="form-control"></div>
    <div class="col-md-3 mb-3"><label>Peso</label><input type="number" [(ngModel)]="detalle.peso" class="form-control"></div>
    <div class="col-md-3 mb-3"><label>Frec. Cardíaca</label><input type="number" [(ngModel)]="detalle.frecuenciaCardiaca" class="form-control"></div>
    <div class="col-md-3 mb-3"><label>Frec. Respiratoria</label><input type="number" [(ngModel)]="detalle.frecuenciaRespiratoria" class="form-control"></div>
    <div class="col-md-4 mb-3"><label>Fecha y Hora</label><input type="datetime-local" [(ngModel)]="detalle.fechaHora" class="form-control"></div>
    <div class="col-md-4 mb-3"><label>Alimentación</label><input [(ngModel)]="detalle.alimentacion" class="form-control"></div>
    <div class="col-md-4 mb-3"><label>Hábitat</label><input [(ngModel)]="detalle.habitad" class="form-control"></div>
    <div class="col-md-12 mb-3"><label>Observaciones</label><textarea [(ngModel)]="detalle.observacion" class="form-control"></textarea></div>
    <button (click)="guardar()" class="btn btn-success mt-3">Guardar Control</button>
  </div>
</div>
`})
export class DetalleFormComponent implements OnInit {
  detalle: DetalleHistoriaClinica = { temperatura: '', peso: 0, frecuenciaCardiaca: 0, frecuenciaRespiratoria: 0, fechaHora: '', alimentacion: '', habitad: '', observacion: '', colaborador: {} as any, historiaClinica: {} as any };
  historias: any[] = []; colaboradores: any[] = [];
  constructor(private service: DetalleHistoriaService, private colabService: ColaboradorService, private histService: HistoriaClinicaService, private router: Router) {}
  ngOnInit(): void {
    this.histService.listar().subscribe(d => this.historias = d);
    this.colabService.listar().subscribe(d => this.colaboradores = d);
  }
  guardar() { this.service.crear(this.detalle).subscribe(() => { alert('Control Guardado'); this.router.navigate(['/detalles']); }); }
}