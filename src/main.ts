import{tarea}from "./tipos";
import{pedirOpcion}from  "./entrada";
import{mostrarMenuPrincipal}from "./vistas";
import{menuVerTareas,pantallaBuscar,pantallaAgregar}from "./menus";

function main():void{
    const tareas:tarea[]=[];
    let salir:boolean=false;
    while(!salir){
        mostrarMenuPrincipal();
        const opcion:number=pedirOpcion("ingrese una opcion",1,4);
            switch(opcion){
                case 1: 
                    menuVerTareas(tareas);
                    break;
                case 2:
                    pantallaBuscar(tareas);
                    break;
                case 3:
                    pantallaAgregar(tareas);
                    break;
                case 4:
                    console.log("saliendo...");
                    salir=true;
                    break:
            }
    }
}
main();