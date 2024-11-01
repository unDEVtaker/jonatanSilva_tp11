// Enlacarpetayacreadacreaunnuevoarchivollamadotarifa.js
// 2. Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el operador condicional ternario, queremos determinar cuánto va a pagar un hogar segúnsuconsumo.Veamoslospasosaseguir:
// a. Crear una variable “pagoMes” y asignarle un pago actual de energía eléctrica por mes.
// b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de Kilovatios hora de consumomensualporelhogar.
// c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago actual se le incrementará un 20%.
// d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá ningún aumento..
// 3. Una vez obtenido el monto del pago por consumo mostrar al usuario este mensajeporconsola: “Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste  tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarlequesehaajustadoeltotala
// pagar, que será de$14400”

//a- variable pagoMes y asignar valores. 
let pagoMes = 12000;

//b - variable “consumoKWH” y asingnar valor
let consumoKWH = 100;

//c y d- si consumoKWH > 300 kwh mes, incrmento 20%
pagoMes = consumoKWH > 300 ? pagoMes * 1.2 : pagoMes;

//3- Muestro por consola
const mensaje = consumoKWH > 300 
    ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste  tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%). Cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes}.`
    : `El total a pagar es de $${pagoMes}.`

    console.log(mensaje)
