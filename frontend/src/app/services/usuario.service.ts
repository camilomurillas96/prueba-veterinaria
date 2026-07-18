import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${API_BASE_URL}/usuarios`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crear(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  actualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }

  obtenerPorId(id: number): Observable<Usuario> {    
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
