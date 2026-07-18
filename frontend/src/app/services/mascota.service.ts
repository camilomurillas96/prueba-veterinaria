import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private apiUrl = `${API_BASE_URL}/mascotas`;
  constructor(private http: HttpClient) { }
  listar(): Observable<Mascota[]> { return this.http.get<Mascota[]>(this.apiUrl); }
  obtenerPorId(id: number): Observable<Mascota> { return this.http.get<Mascota>(`${this.apiUrl}/${id}`); }
  crear(mascota: Mascota): Observable<Mascota> { return this.http.post<Mascota>(this.apiUrl, mascota); }
  actualizar(mascota: Mascota): Observable<Mascota> { return this.http.put<Mascota>(`${this.apiUrl}/${mascota.id}`, mascota); }
  eliminar(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}