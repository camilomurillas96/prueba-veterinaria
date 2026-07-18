import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriaClinica } from '../models/historia-clinica.model';

@Injectable({ providedIn: 'root' })
export class HistoriaClinicaService {
  private apiUrl = 'http://localhost:8080/api/historias-clinicas';
  constructor(private http: HttpClient) { }
  listar(): Observable<HistoriaClinica[]> { return this.http.get<HistoriaClinica[]>(this.apiUrl); }
  obtenerPorId(id: number): Observable<HistoriaClinica> { return this.http.get<HistoriaClinica>(`${this.apiUrl}/${id}`); }
  crear(historia: HistoriaClinica): Observable<HistoriaClinica> { return this.http.post<HistoriaClinica>(this.apiUrl, historia); }
  actualizar(historia: HistoriaClinica): Observable<HistoriaClinica> { return this.http.put<HistoriaClinica>(this.apiUrl, historia); }
  eliminar(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}