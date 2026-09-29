export type Estado="pendiente"|"en curso"|"terminada"|"cancelada";
export type Dificultad=1|2|3;
export type CriterioOrden="titulo"|"vencimiento"|"creacion";
export interface Tarea{
    titulo:string;
    descripcion:string;
    estado:Estado;
    dificultad:Dificultad;
    creado:Date;
    ultimaEdicion:Date;
    vencimiento:Date|null;
}