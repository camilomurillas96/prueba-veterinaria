import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleHistoriaClinica } from '../models/detalle-historia.model';

@Injectable({ providedIn: 'root' })
export class DetalleHistoriaService {
  private apiUrl = 'http://localhost:8080/api/detalles-historia';
  constructor(private http: HttpClient) { }
  listar(): Observable<DetalleHistoriaClinica[]> { return this.http.get<DetalleHistoriaClinica[]>(this.apiUrl); }
  obtenerPorId(id: number): Observable<DetalleHistoriaClinica> { return this.http.get<DetalleHistoriaClinica>(`${this.apiUrl}/${id}`); }
  crear(detalle: DetalleHistoriaClinica): Observable<DetalleHistoriaClinica> { return this.http.post<DetalleHistoriaClinica>(this.apiUrl, detalle); }
  actualizar(detalle: DetalleHistoriaClinica): Observable<DetalleHistoriaClinica> { return this.http.put<DetalleHistoriaClinica>(this.apiUrl, detalle); }
  eliminar(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}