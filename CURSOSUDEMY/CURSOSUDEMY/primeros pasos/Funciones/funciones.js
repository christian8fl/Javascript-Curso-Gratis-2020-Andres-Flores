// Son un conjunto de sentencias que realizan una tarea
function saludo()
{
    console.log("Hola a todos")
}

// Primera función (suma de dos números)
function miSuma(a,b)
{
    return a + b
}

saludo()
console.log(miSuma(4,5))

// Segunda función (suma de tres números )
var miSumaTres = function (a,b,c){
    return a + b + c
}

saludo()
console.log(miSumaTres(4,5,11))
console.log(miSuma(2,2,2))
var a2 = 4
var b2 = 8
var c2 = 9
console.log(miSuma(a2,b2,c2))
