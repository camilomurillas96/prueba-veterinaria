import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { MascotaListComponent } from './components/mascotas/mascota-list/mascota-list.component';
import { MascotaFormComponent } from './components/mascotas/mascota-form/mascota-form.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'nuevo-usuario', component: UsuarioFormComponent },
  { path: 'editar-usuario/:id', component: UsuarioFormComponent },

  { path: 'mascotas', component: MascotaListComponent },
  { path: 'mascotas/nuevo', component: MascotaFormComponent },
  { path: 'mascotas/editar/:id', component: MascotaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
