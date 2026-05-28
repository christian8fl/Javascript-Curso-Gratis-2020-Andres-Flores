// OPERADORES EN JAVASCRIPT
// Variables base para los ejemplos 
var numero = 8;
var estudiante = 'Andres Flores';

console.log("=== 1. OPERADORES ARITMÉTICOS ===");
// Sirven para realizar operaciones matemáticas básicas
console.log("Suma (8 + 2):", numero + 2);               // 10
console.log("Resta (8 - 3):", numero - 3);              // 5
console.log("Multiplicación (8 * 4):", numero * 4);     // 32
console.log("División (8 / 2):", numero / 2);           // 4
console.log("Módulo o Residuo (8 % 3):", numero % 3);   // 2 (El sobrante)
console.log("Exponente o Potencia (8 ** 2):", numero ** 2); // 64 (8 al cuadrado)


console.log("\n=== 2. OPERADORES DE ASIGNACIÓN ===");
// Permiten asignar valores de forma abreviada modificando la misma variable
var asignacion = 8; 

asignacion += 2;  // Equivalente a: asignacion = asignacion + 2
console.log("Suma y asigna (+=):", asignacion);         // 10

asignacion -= 3;  // Equivalente a: asignacion = asignacion - 3
console.log("Resta y asigna (-=):", asignacion);         // 7

asignacion *= 2;  // Equivalente a: asignacion = asignacion * 2
console.log("Multiplica y asigna (*=):", asignacion);    // 14

asignacion /= 2;  // Equivalente a: asignacion = asignacion / 2
console.log("Divide y asigna (/=):", asignacion);        // 7

asignacion %= 3;  // Equivalente a: asignacion = asignacion % 3
console.log("Módulo y asigna (%=):", asignacion);        // 1

var potenciaAsig = 8;
potenciaAsig **= 2; // Equivalente a: potenciaAsig = potenciaAsig ** 2
console.log("Potencia y asigna (**=):", potenciaAsig);  // 64


console.log("\n=== 3. OPERADORES DE COMPARACIÓN ===");
// Comparan dos valores y devuelven un booleano (true o false)
var a = 8;
var b = '8';

console.log("Igualdad simple (==) - Solo valor:", a == b);    // true 
console.log("Igualdad estricta (===) - Valor y Tipo:", a === b); // false 

console.log("Diferencia simple (!=):", a != b);             // false 
console.log("Diferencia estricta (!==):", a !== b);         // true 

console.log("Mayor que (>):", numero > 5);                  // true
console.log("Menor que (<):", numero < 10);                 // true
console.log("Mayor o igual que (>=):", numero >= 8);        // true
console.log("Menor o igual que (<=):", numero <= 7);        // false


console.log("\n=== 4. OPERADORES LÓGICOS ===");
// Combinan multiples condiciones booleans

// AND (&&): Da 'true' SOLO si todas las condiciones se cumplen
var esMayorDeEdad = true;
var tienePermiso = false;
console.log("Operador AND (&&):", (numero === 8) && (estudiante === 'Andres Flores')); // true (Ambas se cumplen)
console.log("Operador AND falso (&&):", esMayorDeEdad && tienePermiso);               // false

// OR (||): Da 'true' si al menos UNA condición se cumple
console.log("Operador OR (||):", (numero === 5) || (estudiante === 'Andres Flores'));  // true (La segunda se cumple)

// NOT (!): Invierte el valor booleano
console.log("Operador NOT (!) para true:", !esMayorDeEdad); // false


console.log("\n=== 5. OPERADOR CONDICIONAL TERNARIO ===");
// Estructura simplificada: condición ? si_es_verdadero : si_es_falso
var resultadoTernario = (numero >= 8) ? "Acceso concedido a " + estudiante : "Acceso denegado";
console.log("Resultado del ternario:", resultadoTernario); // "Acceso concedido a Andres Flores"