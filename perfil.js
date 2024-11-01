// Micro desafío 1:
// 1. En Visual Studio Code crear la carpeta de trabajo y dentro de ella inicializar un repositorio local y vincularlo con un repositorio remoto cuyo nombre debe tener la siguiente nomenclatura: nombreApellido_tp11
// 2. Crear un archivo llamado perfil.js
// 3. Desarrolla un programa que le indique al usuario - en base a su perfil o responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una variable llamada: “perfil” y asignarle alguno de estos valores:
// a. administrador
// b. asistente
// c. invitado.
// 4. Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el console.log():
// a. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el mensaje: “Debe especificar el perfil del usuario”.
// b. Si es un perfil“administrador - ADMINISTRADOR - Administrador”, la consola debe mostrar este mensaje: “Usted tiene todos los privilegios de uso del sistema”.
// c. Si es un perfil“asistente - ASISTENTE - Asistente”, la consola debe mostrar este mensaje: “Usted sólo tiene permisos de registrar, modificar y consultar datos”.
// d. Si es un perfil“invitado - INVITADO - Invitado”, la consola debe mostrar este mensaje: “Usted sólo tiene permisos de consultar datos”.
// e. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar este mensaje: “Debe especificar un perfil válido”.
// 5. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo? Para probar las diferentes respuestas asigna diferentes valores a la variable “perfil”

let perfil = "AdMinistrAdoR";

switch (perfil.toLowerCase()) {
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema.");
        break;
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.")
        break;
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos.");
        break;
    default:
        console.log("Debe especificar un perfil válido");
        break;
    }