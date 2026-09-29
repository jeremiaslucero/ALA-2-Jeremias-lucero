import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

function leer(mensaje:string):string{
    const respuesta:string|null=prompt(mensaje);
    return respuesta ===null?"":respuesta;
}
function convertirOpcion(texto:string,min:number,max:number):number|null{
    if(texto.trim()===""){
        return null;
    }
    const numero:number =Number(texto);
    if(!Number.isInteger(numero)||numero<min||numero>max){
        return null;
    }
    return numero;
}
export function pedirOpcion(mensaje:string,min:number,max:number):number{
    let opcion:number|null=convertirOpcion(leer(mensaje),min,max);
    while(opcion===null){
        console.log(`opcion no valida.ingregresa un numero entre  ${min}y ${max}.`);
    }
    return opcion;
}
export function pedirOpcionOpcional(mensaje:string,min:number,max:number):number|null{
    let resultado:number|null=null;
    let terminado:boolean=false;
    while(!terminado){
        const texto:string =leer(mensaje);
        if(texto.trim()===""){
            terminado=true;
        }else{
            const opcion:number|null=convertirOpcion(texto,min,max);
            if(opcion===null){
                console.log(`opcion no valida.ingrese un numero entre ${min} y ${max},o dejalo vacio`);
            }else{
                resultado=opcion;
                terminado=true;
            }
        }
    }
    return resultado;
}
export function parsearFecha(texto:string):Date|null{
    const partes:string[]=texto.trim().split("/");
    if(partes.length!==3){
        return null;
    }
    const dia:number=Number(partes[0]);
    const mes:number=Number(partes[1]);
    const anio:number=Number(partes[2]);
    if(!Number.isInteger(dia)||!Number.isInteger(mes)||!Number.isInteger(anio)){
        return null;
    }
    const fecha:Date=new Date(anio,mes-1,dia);
    if(fecha.getFullYear()!==anio||fecha.getMonth()!==mes-1||fecha.getDate()!==dia){
        return null;
    }
    return fecha;
}
export function pedirFecha(mensaje: string): Date | null {
    let resultado: Date | null = null;
    let terminado: boolean = false;

    while (!terminado) {
        const texto: string = leer(mensaje);
        if (texto.trim() === "") {
            terminado = true;
        } else {
            const fecha: Date | null = parsearFecha(texto);
            if (fecha === null) {
                console.log("Fecha inválida. Usá el formato DD/MM/AAAA (ej: 25/12/2026).");
            } else {
                resultado = fecha;
                terminado = true;
            }
        }
    }
    return resultado;
}
export function pedirFechaEdicion(mensaje: string, actual: Date | null): Date | null {
    let resultado: Date | null = actual;
    let terminado: boolean = false;
    while (!terminado) {
        const texto: string = leer(mensaje);
        if (texto === "") {
            terminado = true;
        } else if (texto.trim() === "") {
            resultado = null;
            terminado = true;
        } else {
            const fecha: Date | null = parsearFecha(texto);
            if (fecha === null) {
                console.log("Fecha inválida. Usá el formato DD/MM/AAAA (ej: 25/12/2026).");
            } else {
                resultado = fecha;
                terminado = true;
            }
        }
    }
    return resultado;
}
export function pedirBusqueda(mensaje:string):string{
    return leer(mensaje).trim();
}
export function pedirAccionDetalle(mensaje:string):string{
    let accion:string=leer(mensaje).trim().toUpperCase();
    while(accion!=="E"&& accion!=="0"){
        console.log("opcion no valida.ingresa E para editar o 0 para volver");
        accion=leer(mensaje).trim().toUpperCase()
    }
    return accion;
}
export function pausar():void {
leer("\nprecione enter para continuar");
}