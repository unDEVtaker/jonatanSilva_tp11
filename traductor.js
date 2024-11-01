// 1. En la carpeta ya creada crea un nuevo archivol lamado traductor.js
// 2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa una palabra como“perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la misma palabra traducida al idioma inglés. Te recomendamos usarla estructura switch. Puedes ayudarte con Google Traductor.
// 3. Encasodequelapalabraseadistintaalaesperada,deberá smostrar al usuario un mensaje que le informe que“La palabra ingresada es incorrecta”.


// 2- creo la varaible palabra para almacenar el string que ingresa el usuario

let palabra = "perRO";
// let palabra = "gato";
// let palabra = "puerta";
// let palabra = "vantana";
// let palabra = "mesa";

//en esta variable voy a guardar la traduccion que obtengo en el switch
let palabraTraducida;


//estructura switch para evaluar el caso

switch (palabra.toLowerCase()) {
    case "perro":
        palabraTraducida = "dog";
        break;
    case "gato":
        palabraTraducida = "cat";
        break;
    case "ventana":
        palabraTraducida = "window";
        break;
    case "mesa":
        palabraTraducida = "table";
        break;
    default:
        palabraTraducida = "La palabra ingresada es incorrecta";
}

console.log(palabraTraducida);