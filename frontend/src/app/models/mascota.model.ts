import { Usuario } from './usuario.model';
export interface Mascota {
  id?: number;
  nombre: string;
  raza: string;
  sexo: string;
  usuario: Usuario;
}