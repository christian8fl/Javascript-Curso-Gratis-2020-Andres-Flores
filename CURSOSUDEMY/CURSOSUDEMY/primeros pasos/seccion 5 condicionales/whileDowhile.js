// consulta While Do While
let contador = 0;

do {
    console.log("Hola Andrés");
    contador++;
} while (contador < 3);

contador = 5; 

do {
    console.log("Hola Andrés"); // Esto se ejecuta SI la primera vez
    contador++;                 // contador ahora vale 6
} while (contador < 3);         // Aquí pregunta: ¿6 < 3? Falso. El bucle se detiene