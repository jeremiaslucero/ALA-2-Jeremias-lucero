import { Tarea } from "./tipos";
import { estadoATexto, dificultadAEstrellas } from "./tareas";

export function mostrarMenuPrincipal(): void {
    console.log("\n=== MENÚ PRINCIPAL ===");
    console.log("[1] Ver mis tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Agregar una tarea");
    console.log("[4] Salir");
}
export function mostrarMenuVerTareas(): void {
    console.log("\n=== VER MIS TAREAS ===");
    console.log("[1] Ver todas");
    console.log("[2] Ver pendientes");
    console.log("[3] Ver en curso");
    console.log("[4] Ver terminadas");
    console.log("[0] Volver al menú principal");
}
export function mostrarMenuOrden(): void {
    console.log("\nOrdenar por:");
    console.log("[1] Fecha de creación");
    console.log("[2] Título (A-Z)");
    console.log("[3] Fecha de vencimiento");
}
export function mostrarLista(lista: Tarea[]): void {
    console.log("\n=== TUS TAREAS ===");
    for (let i = 0; i < lista.length; i++) {
        console.log(`[${i + 1}] ${lista[i].titulo}`);
    }
    console.log("[0] Volver");
}
export function mostrarDetalle(tarea: Tarea): void {
    const vencimiento: string = tarea.vencimiento
        ? tarea.vencimiento.toLocaleDateString("es-AR")
        : "Sin datos";

    console.log("\n=== DETALLE DE LA TAREA ===");
    console.log(`  Título:          ${tarea.titulo}`);
    console.log(`  Descripción:     ${tarea.descripcion || "Sin datos"}`);
    console.log(`  Estado:          ${estadoATexto(tarea.estado)}`);
    console.log(`  Dificultad:      ${dificultadAEstrellas(tarea.dificultad)}`);
    console.log(`  Vencimiento:     ${vencimiento}`);
    console.log(`  Creación:        ${tarea.creado.toLocaleString("es-AR")}`);
    console.log(`  Última edición:  ${tarea.ultimaEdicion.toLocaleString("es-AR")}`);
    console.log("\n[E] Editar tarea   [0] Volver");
}