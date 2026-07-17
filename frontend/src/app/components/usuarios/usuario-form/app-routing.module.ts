import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from 'src/app/components/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from 'src/app/components/usuarios/usuario-form/usuario-form.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/nuevo', component: UsuarioFormComponent },
  { path: 'usuarios/editar/:id', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
