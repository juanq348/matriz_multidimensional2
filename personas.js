const readlineSync = require("readline-sync");

let personas = []

function ingresarPersonas(){
    let nombre = readlineSync.question("Ingrese el nombre: ");
    let apellido = readlineSync.question("Ingrese el apellido: ");
    let dni = readlineSync.question("Ingrese el DNI: ");
    let telefonos = readlineSync.question("Ingrese los telefonos separados por coma: ").split(",");
    let hijos = readlineSync.question("Ingrese los nombres de los hijos separados por coma: ").split(",");

    personas.push([nombre, apellido, dni, telefonos, hijos])
}

function mostrarDatos(){
    console.log("\n Datos de personas:");
    personas.forEach((persona) =>{
        console.log(`Nombre: ${persona[0]} ${persona[1]}, DNI: ${persona[2]}`);
        console.log(`Telefono: ${persona[3].join(", ")}`);
        console.log(`Hijos: ${persona[4].join(", ")}`);
        console.log(`Cantidad de hijos: ${persona[4].length}, Cantidad de telefonos: ${persona[3].length}\n`);
    })
}

function filtrarDni(){
    let dni = readlineSync.question("Ingrese el DNI de la persona que quiera encontrar:");
    let personaEncontrada = personas.find(persona => persona[2] === dni);
    if(personaEncontrada){
        console.log(`Nombre: ${personaEncontrada[0]} ${personaEncontrada[1]}, DNI: ${personaEncontrada[2]}`);
        console.log(`Telefono: ${personaEncontrada[3].join(", ")}`);
        console.log(`Hijos: ${personaEncontrada[4].join(", ")}`);
        console.log(`Cantidad de hijos: ${personaEncontrada[4].length}, Cantidad de telefonos: ${personaEncontrada[3].length}\n`);
    } else{
        console.log("Persona no encontrada");
    }
}

function mostrarMenu(){
    let opcion;
    do{
        console.log("\nMenu:");
        console.log("1.Ingrese nueva persona");
        console.log("2.Mostrar todos los datos");
        console.log("3.Filtrar por DNI");
        console.log("4.Salir")
        opcion = readlineSync.question("Ingrese la opcion: ");

        switch(opcion){
            case "1":
                ingresarPersonas();
                break;
            case "2":
                mostrarDatos();
                break;
            case "3":
                filtrarDni();
                break;
            case "4":
                console.log("Programa finalizado");
                break;
            default:
                console.log("Opcion no valida");
        }
    } while (opcion !== "4");
}

mostrarMenu();