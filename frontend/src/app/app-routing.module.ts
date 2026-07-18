import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { MascotaListComponent } from './components/mascotas/mascota-list/mascota-list.component';
import { MascotaFormComponent } from './components/mascotas/mascota-form/mascota-form.component';

import { ColaboradorListComponent } from './components/colaboradores/colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './components/colaboradores/colaborador-form/colaborador-form.component';

import { HistoriaListComponent } from './components/historias/historia-list/historia-list.component';
import { HistoriaFormComponent } from './components/historias/historia-form/historia-form.component';

import { DetalleListComponent } from './components/detalles/detalle-list/detalle-list.component';
import { DetalleFormComponent } from './components/detalles/detalle-form/detalle-form.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'nuevo-usuario', component: UsuarioFormComponent },
  { path: 'editar-usuario/:id', component: UsuarioFormComponent },

  { path: 'mascotas', component: MascotaListComponent },
  { path: 'mascotas/nuevo', component: MascotaFormComponent },
  { path: 'mascotas/editar/:id', component: MascotaFormComponent },

  { path: 'colaboradores', component: ColaboradorListComponent },
  { path: 'nuevo-colaborador', component: ColaboradorFormComponent },
  { path: 'editar-colaborador/:id', component: ColaboradorFormComponent },

  { path: 'historias', component: HistoriaListComponent },
  { path: 'nueva-historia', component: HistoriaFormComponent },

  { path: 'detalles', component: DetalleListComponent },
  { path: 'nuevo-detalle', component: DetalleFormComponent },
  
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
