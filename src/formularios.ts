import {tarea}from "./src/tipos";
import{pedirOpciones,pedirOpcionesOpcional,pedirTexto,pedirTextoEdicion,pedirFecha,pedirFechaEdicion,}from "./src/entrada";
import{crearTarea,estadoDesdeNumero,dificultadDesdeNumero,}from "./tareas";
import entrada = require("./src/entrada");
import pedirOpcionOpcional = require("./src/entrada");
export function formularioNuevaTarea():Tarea{
    const titulo:string=pedirTexto("titulo(obligatorio,Max. 100:",100,true);
    const descripcion:string=pedirTexto("descripcion(opcional,max500):",500,false);
    const opcionEstado:number|null=entrada.pedirOpcionOpcional("estado[1] Pendiente [2] En curso[3] Terminada [4] Cancelada(vacio=pendiente)",1,4);
    const opcionDificultad:number|null=pedirOpcionOpcional("Dificultad[1] Facil [2] Medio[3] Dificil(vacio=Facil)",1,3);
    const vencimiento:date|null=pedirFecha("cencimiento DD/MM/AAAA(vacio=sin vencimiento:");
    return crearTarea(titulo,descripcion,estadoDesdeNumero(opcionEstado===null?1:opcionEstado),dificultadDesdeNumero(opcionDificultad===null?1:opcionDificultad),vencimiento);
}
export function formularioEditarTarea(tarea:Tarea):void{
    console.log("\n=== EDITANDO LA TAREA ===");
    console.log("- Dejá vacío para mantener el valor actual.");
    console.log("- Escribí un espacio para borrar un dato opcional.");
    tarea.titulo=pedirTextoEdicion(`nuevo titulo (${tarea.titulo}):`,100,true,tarea.titulo);
    tarea.descripcion=pedirTextoEdicion(`nueva descripcion (${tarea.descripcion||"sin datos"})`,500,false,tarea.descripcion);
    const opcionEstado:number|null=pedirOpcionOpcional( "Nuevo estado [1] Pendiente [2] En curso [3] Terminada [4] Cancel(Vacio=mantener):",1,4);
    if(opcionEstado!==null){
        tarea.estado=estadoDesdeNumero(opcionEstado);
    }
    const opcionDificultad:number|null=pedirOpcionesOpcional("Nueva dificultad [1] Fácil [2] Medio [3] Difícil (vacío = mantener):",1,3);
    if(opcionDificultad!==null){
        tarea.dificultad=dificultadDesdeNumero(opcionDificultad);
    }
    tarea.vencimiento=pedirFechaEdicion(`Nuevo vencimiento DD/MM/AAAA (${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString("es-AR") : "Sin datos"}):`,tarea.vencimiento);
    tarea.ultimaEdicion=new date();
    console.log("la tarea se guardo correctamente.");
}