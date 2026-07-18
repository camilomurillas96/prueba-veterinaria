import { Mascota } from './mascota.model';
export interface HistoriaClinica {
  id?: number;
  fechaCreacion: number;
  mascota: Mascota;
}