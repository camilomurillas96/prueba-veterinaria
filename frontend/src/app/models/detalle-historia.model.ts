import { Colaborador } from './colaborador.model';
import { HistoriaClinica } from './historia-clinica.model';
export interface DetalleHistoriaClinica {
  id?: number;
  temperatura: string;
  peso: number;
  frecuenciaCardiaca: number;
  frecuenciaRespiratoria: number;
  fechaHora: string;
  alimentacion: string;
  habitad: string;
  observacion: string;
  colaborador: Colaborador;
  historiaClinica: HistoriaClinica;
}