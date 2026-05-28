var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre : "Andres",
    miAutomovil : [
        pintura = {
            marca : "Marca",
            precio : 20000,
            color : "Verde"
        },
        vendedor = {
            nombre : "Cristian",
            edad : 2,

            ayudante : {
            nombre : "Julio"
        }
        }
    ]
}

var miArray = ["Cristian",2020,34.9,true, ["Otro Array","Array",7900], miFuncion(permitido), persona]

console.log(miArray[6].nombre)
console.log(miArray[6].miAutomovil[1].ayudante.nombre)