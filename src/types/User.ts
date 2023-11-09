import {Role} from "./Role";
import {Catalog} from "./Catalog";

export type User = {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    email: string;
    password: string;
    blocked: boolean;
    role: Role;
    codigo: string;
    conferencias: Catalog;
    escuela: string;
    inscripciones: Inscripcion[];
};
export type Inscripcion = {
    nombre: string;
    apellido: string;
    codigo: string;
    carrera: string;
    asistencia: string;
};