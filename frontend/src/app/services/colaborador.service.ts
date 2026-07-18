import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';

@Injectable({ providedIn: 'root' })
export class ColaboradorService {
  private apiUrl = 'http://localhost:8080/api/colaboradores';
  constructor(private http: HttpClient) { }
  listar(): Observable<Colaborador[]> { return this.http.get<Colaborador[]>(this.apiUrl); }
  obtenerPorId(id: number): Observable<Colaborador> { return this.http.get<Colaborador>(`${this.apiUrl}/${id}`); }
  crear(colaborador: Colaborador): Observable<Colaborador> { return this.http.post<Colaborador>(this.apiUrl, colaborador); }
  actualizar(colaborador: Colaborador): Observable<Colaborador> { return this.http.put<Colaborador>(this.apiUrl, colaborador); }
  eliminar(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}