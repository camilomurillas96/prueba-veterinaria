import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Colaborador } from 'src/app/models/colaborador.model';

@Component({ selector: 'app-colaborador-form', template: `
<div class="container mt-4">
  <h3>{{ isEdit ? 'Editar' : 'Nuevo' }} Colaborador</h3>
  <div class="card p-4">
    <div class="row">
      <div class="col-md-6 mb-3"><label>Nombre</label><input [(ngModel)]="colab.nombre" class="form-control"></div>
      <div class="col-md-6 mb-3"><label>Apellido</label><input [(ngModel)]="colab.apellido" class="form-control"></div>
      <div class="col-md-6 mb-3"><label>Cargo</label><input [(ngModel)]="colab.cargo" class="form-control"></div>
      <div class="col-md-6 mb-3"><label>Especialidad</label><input [(ngModel)]="colab.especialidad" class="form-control"></div>
      <div class="col-md-6 mb-3"><label>Tipo Doc</label><input [(ngModel)]="colab.tipoDocumento" class="form-control"></div>
      <div class="col-md-6 mb-3"><label>Documento</label><input type="number" [(ngModel)]="colab.documentoIdentificacion" class="form-control"></div>
    </div>
    <button (click)="guardar()" class="btn btn-success">Guardar</button>
  </div>
</div>
`})
export class ColaboradorFormComponent implements OnInit {
  colab: Colaborador = { nombre: '', apellido: '', cargo: '', especialidad: '', tipoDocumento: 'CC', documentoIdentificacion: 0 };
  isEdit = false;
  constructor(private service: ColaboradorService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) { this.isEdit = true; this.service.obtenerPorId(id).subscribe(data => this.colab = data); }
  }
  guardar() {
    const req = this.isEdit ? this.service.actualizar(this.colab) : this.service.crear(this.colab);
    req.subscribe(() => { alert('Guardado'); this.router.navigate(['/colaboradores']); });
  }
}