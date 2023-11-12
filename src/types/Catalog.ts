import { DateSchema } from "yup";

export type Catalog = {
  id: string;
  tema_conferencia: string;
  descripcion: string;
  foto: {
    url: string; 
  };
  expositor: string;
  fecha: Date;
  hora: DateSchema;
  dirigido: string;
  disponible: boolean;
  solicitado_por:string; 
  miconf: boolean;
  inscripciones: Inscripcion[];
  repositorio: string;
  salons: any;
};


export type Inscripcion = {
    nombre: string;
    apellido: string;
    codigo: string;
    carrera: string;
    asistencia: string;
};