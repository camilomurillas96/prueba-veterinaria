import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private apiUrl = 'http://localhost:8080/api/mascotas';
  constructor(private http: HttpClient) { }
  listar(): Observable<Mascota[]> { return this.http.get<Mascota[]>(this.apiUrl); }
  obtenerPorId(id: number): Observable<Mascota> { return this.http.get<Mascota>(`${this.apiUrl}/${id}`); }
  crear(mascota: Mascota): Observable<Mascota> { return this.http.post<Mascota>(this.apiUrl, mascota); }
  actualizar(mascota: Mascota): Observable<Mascota> { return this.http.put<Mascota>(this.apiUrl, mascota); }
  eliminar(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}