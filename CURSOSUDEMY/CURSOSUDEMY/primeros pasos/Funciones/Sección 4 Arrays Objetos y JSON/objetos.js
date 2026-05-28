var user = "Andres Fores"
var persona = {
    nombre : "Andres",
    sexo : "Masculino"
}

var miObjeto = {
    //clave : valor
    nombre : "Cristian",
    edad : 1995,
    importante : true,
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date()
}

console.log(miObjeto.fecha.getFullYear())

var {nombre} = miObjeto //Desestructuración de un objeto

var otraFuncion = ({texto},{otroObjeto}) => {
    console.log(otroObjeto.sexo)
    console.log(texto)
}

otraFuncion(miObjeto,miObjeto)