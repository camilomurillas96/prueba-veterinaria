import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { MascotaListComponent } from './components/mascotas/mascota-list/mascota-list.component';
import { MascotaFormComponent } from './components/mascotas/mascota-form/mascota-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    MascotaListComponent,
    MascotaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
