import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Mascota } from 'src/app/models/mascota.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({ selector: 'app-mascota-form', template: `
<div class="container mt-4">
  <h3>{{ isEdit ? 'Editar' : 'Nueva' }} Mascota</h3>
  <div class="card p-4">
    <div class="mb-3"><label>Nombre</label><input [(ngModel)]="mascota.nombre" class="form-control"></div>
    <div class="mb-3"><label>Raza</label><input [(ngModel)]="mascota.raza" class="form-control"></div>
    <div class="mb-3"><label>Sexo</label>
      <select [(ngModel)]="mascota.sexo" class="form-control"><option value="Macho">Macho</option><option value="Hembra">Hembra</option></select>
    </div>
    <div class="mb-3"><label>Dueño (Usuario)</label>
      <select [(ngModel)]="mascota.usuario.id" class="form-control">
        <option *ngFor="let u of usuarios" [value]="u.id">{{u.nombre}} {{u.apellido}}</option>
      </select>
    </div>
    <button (click)="guardar()" class="btn btn-success">Guardar</button>
  </div>
</div>
`})
export class MascotaFormComponent implements OnInit {
  mascota: Mascota = { nombre: '', raza: '', sexo: 'Macho', usuario: {} as Usuario };
  usuarios: Usuario[] = [];
  isEdit = false;

  constructor(private service: MascotaService, private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(data => this.usuarios = data);
    const id = this.route.snapshot.params['id'];
    if (id) { this.isEdit = true; this.service.obtenerPorId(id).subscribe(data => this.mascota = data); }
  }

  guardar() {
    const req = this.isEdit ? this.service.actualizar(this.mascota) : this.service.crear(this.mascota);
    req.subscribe(() => { alert('Guardado'); this.router.navigate(['/mascotas']); });
  }
}