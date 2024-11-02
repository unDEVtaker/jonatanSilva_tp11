// 1. En la carpeta ya creada, crea un nuevo archivo llamado avion.js.
// 2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar el aterrizaje o no.
//Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta que:
// -La velocidad debe estar comprendida entre 268 a 278 km/hr.
// -La altura debe estar comprendida entre 150 m a 300 m.

//variables para la altura y velocidad, y un mensaje para mostrar que parametro corregir
let velocidad = 268;
let altura = 150;

//funcion para chequear si puede aterrizar
function puedeAterrizar(altura, velocidad) {
    if ((velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300)) {
        console.log("El avion puede aterrizar.");
    }
    else {
        console.log("El avion no puede aterrizar.");
        //(adicional de mi parte) agrego otro if para mostra por consola que parametro se tiene que corregir para poder aterrizar
        if (velocidad < 268 || velocidad > 278) {
            console.log("Revise la velocidad, debe estar entre 268 km/hr y 278 km/hr.");
        }
        if (altura < 150 || altura > 300) {
            console.log("Revise la altura, debe estar entre 150 mts y 300 mts.");
        }
    }
}
puedeAterrizar(altura, velocidad);