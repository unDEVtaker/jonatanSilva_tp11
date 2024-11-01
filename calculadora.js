// Micro desafío 4 (opcional NO ENTREGABLE):
// 1. Enlacarpetayacreada,creaunnuevoarchivollamadocalculadora.js
// 2. Desarrollar el programa miprimeracalculadora.Queremosque,usando estructura switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se hará en base adosvaloressuministradosyaltipode operaciónindicada: “sumar”,“restar”,“multiplicar”,“dividir”.
// Porejemplo:sielusuario indica que quiere sumarlosvalores 2y2,entoncesla respuesta al usuario debe ser: “Elresultadodesumar2+2es4”.
// 3. Encasodequelaoperaciónaritméticaseadistintaalaesperada,deberás mostrarle un mensajealusuario queleinformeque“Lasoperaciones aceptadasson:sumar-restar-multiplicar-dividir”.

// Varibles para los dos numeros y la operacion
let n1 = 2;
let n2 = 0; 
let operacion = "diVidiR";  //"sumar"; "restar"; "multplicar"; "dividir";

//2- Funcion miPrimeraCalculadora, le paso los parametros.
function miPrimeraCalculadora(n1, n2, operacion) {
    
    // Variable para giardar el resultado
    let resultado;

    // Estructura switch
    switch (operacion.toLowerCase()) {
        case "sumar":
            resultado = n1 + n2;
            console.log(`El resultado de sumar ${n1} + ${n2} es ${resultado}`);
            break;
        case "restar":
            resultado = n1 - n2;
            console.log(`El resultado de restar ${n1} - ${n2} es ${resultado}`);
            break;
        case "multiplicar":
            resultado = n1 * n2;
            console.log(`El resultado de multiplicar ${n1} * ${n2} es ${resultado}`);
            break;
        case "dividir":
            if (n2 !== 0) {
                resultado = n1 / n2;
                console.log(`El resultado de dividir ${n1} / ${n2} es ${resultado}`);
            } else {
                console.log("Error: No se puede dividir por cero.");
            }
            break;
        default:
            console.log("Las operaciones pueden ser: sumar, restar, multiplicar, dividir");
            break;
    }
}

//Llamo a la funcion
miPrimeraCalculadora(n1, n2, operacion);