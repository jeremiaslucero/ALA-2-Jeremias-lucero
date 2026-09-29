import { Tarea, CriterioOrden } from "./tipos";
import { pedirOpcion, pedirBusqueda, pedirAccionDetalle, pausar } from "./entrada";
import { filtrarPorEstado, buscarPorTitulo, ordenarLista } from "../tareas";
import { formularioNuevaTarea, formularioEditarTarea } from "./formularios";
import {
    mostrarMenuVerTareas,
    mostrarMenuOrden,
    mostrarLista,
    mostrarDetalle,
} from "./vistas";


function pantallaDetalle(tarea: Tarea): void {
    mostrarDetalle(tarea);
    // CAMBIO: antes cualquier tecla volvía sin avisar. Ahora solo acepta E o 0.
    const accion: string = pedirAccionDetalle("Ingrese una opción: ");
    if (accion === "E") {
        formularioEditarTarea(tarea);
        pausar();
    }
}

function pantallaListado(lista: Tarea[]): void {
    if (lista.length === 0) {
        console.log("\nNo hay tareas para mostrar.");
        pausar();
        return;
    }

    mostrarMenuOrden();
    const opcionOrden: number = pedirOpcion("Ingrese una opción: ", 1, 3);
    let criterio: CriterioOrden = "creacion";
    if (opcionOrden === 2) {
        criterio = "titulo";
    } else if (opcionOrden === 3) {
        criterio = "vencimiento";
    }
    const ordenada: Tarea[] = ordenarLista(lista, criterio);

    mostrarLista(ordenada);

    const seleccion: number = pedirOpcion("Elegí una tarea (o 0 para volver): ", 0, ordenada.length);
    if (seleccion !== 0) {
        pantallaDetalle(ordenada[seleccion - 1]);
    }
}

export function menuVerTareas(tareas: Tarea[]): void {
    let volver: boolean = false;

    while (!volver) {
        mostrarMenuVerTareas();

        const opcion: number = pedirOpcion("Ingrese una opción: ", 0, 4);

        switch (opcion) {
            case 1:
                pantallaListado(tareas);
                break;
            case 2:
                pantallaListado(filtrarPorEstado(tareas, "pendiente"));
                break;
            case 3:
                pantallaListado(filtrarPorEstado(tareas, "en curso"));
                break;
            case 4:
                pantallaListado(filtrarPorEstado(tareas, "terminada"));
                break;
            case 0:
                volver = true;
                break;
        }
    }
}

export function pantallaBuscar(tareas: Tarea[]): void {
    console.log("\n=== BUSCAR UNA TAREA ===");
    const clave: string = pedirBusqueda("Título a buscar (vacío para volver): ");
    if (clave === "") {
        return;
    }

    const encontradas: Tarea[] = buscarPorTitulo(tareas, clave);
    if (encontradas.length === 0) {
        console.log("\nNo hay tareas que coincidan con la búsqueda.");
        pausar();
    } else {
        pantallaListado(encontradas);
    }
}

export function pantallaAgregar(tareas: Tarea[]): void {
    console.log("\n=== AGREGAR UNA TAREA ===");
    const nueva: Tarea = formularioNuevaTarea();
    tareas.push(nueva);
    console.log("\n✔ La tarea se guardó correctamente.");
    pausar();
}