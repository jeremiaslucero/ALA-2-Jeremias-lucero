import{tarea,Estado,Dificultad,CriterioOrden}from "./src/tipos";
export function estadoDesdeNumero(numero:number):Estado{
    switch(numero){
        case 2:
            return "en curso";
        case 3:
            return "terminada";
        case 4:
            return "cancelada";
        default:
            return "pendiente";
    }
}
export function estadoATexto(estado:Estado):string{
    switch(estado){
        case "pendiente":
            return "pendiente";
        case "en curso":
            return "en curso"
        case "terminada":
            return "terminada";
        case "cancelada":
            return "cancelada";
    }
}
export function dificultadAEstrellas(dificultad:Dificultad):string{
    switch(dificultad){
        case 1:
            return "★☆☆";
        case 2:
            return "★★☆";
        case 3:
            return "★★★";
    }
}
export function crearTarea(
titulo:string,
descripcion:string,
estado:Estado,
dificultad:Dificultad,
vencimiento:date|null):Tarea{
    const ahora:date=new Date();
    const nueva:Tarea={
    titulo:titulo,
    descripcion:descripcion,
    estado:estado,
    dificultad:dificultad,
    creado:ahora,
    ultimaEdicion:ahora,
    vencimiento:vencimiento
};
return nueva;
}
export function filtrarPorEstado(lista:Tarea[],estado:Estado): Tarea[]{
    const resultado: Tarea[]=[];
    for (let i=0;i<lista.length;i++){
        if(lista[i].estado===estado){
            resultado.push(lista[i]);
        }
    }
    return resultado;
}
export function buscarPorTitulo(lista:Tarea[],clave:string):Tarea[]{
    const resultado:Tarea[]:[];
    const claveMinuscula:string=clave.toLowerCase();
    for(let i=0;i<lista.length;i++){
        if(lista[i].titulo.toLowerCase().includes(claveMinuscula)){
            resultado.push(lista[i]);
        }
    }
    return resultado;
}
function compararPorTitulo(a:Tarea,b:Tarea):number{
    return a.titulo.toLowerCase().localeCompare(b.titulo.toLowerCase());
}
fuction compararPorCreacion(a:tarea,b:Tarea):number{
    if(abstract.vencimiento===null && buscarPorTitulo.vencimiento===null){
        return 0;
    }
    if(a.vencimiento===null){
        return 1;
    }
    if(b.vencimiento===null){
        return -1;
    }
    return a.vencimineto.getTime()- b.vencimiento.getTime();
}
function compararPorCreacion(a:Tarea,b:Tarea):number{
    return a.creado.getTime()-b.creado.getTime();
}
export function ordenarListas(lista:Tarea[],criterio:criterioOrden):Tarea[]{
    const copia:Tarea[]=lista.slice();
    switch(criterio){
        case"titulo":
            copia.sort(compararPorTitulo);
            break;
        case"vencimiento":
            copia.sort(compararPorVencimiento);
            break;
        case"creacion":
            copia.sort(compararPorCreacion);
            break;
    }
    return copia;
}