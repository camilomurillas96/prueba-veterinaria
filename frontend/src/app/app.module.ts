import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { MascotaListComponent } from './components/mascotas/mascota-list/mascota-list.component';
import { MascotaFormComponent } from './components/mascotas/mascota-form/mascota-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColaboradorListComponent } from './components/colaboradores/colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './components/colaboradores/colaborador-form/colaborador-form.component';
import { HistoriaListComponent } from './components/historias/historia-list/historia-list.component';
import { HistoriaFormComponent } from './components/historias/historia-form/historia-form.component';
import { DetalleListComponent } from './components/detalles/detalle-list/detalle-list.component';
import { DetalleFormComponent } from './components/detalles/detalle-form/detalle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    MascotaListComponent,
    MascotaFormComponent,
    ColaboradorListComponent,
    ColaboradorFormComponent,
    HistoriaListComponent,
    HistoriaFormComponent,
    DetalleListComponent,
    DetalleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
