var express = require('express')
var app = express()

app.get('/home',(req,res) => res.send("Hola Andres Flores"))
app.post('/login',(req,res) => res.send("Bienvenido usuario"))
app.patch('/actualizar',(req,res) => res.send("Usuario actualizado"))
app.delete('/login',(req,res) => res.send("Bienvenido usuario"))

app.listen(3000,()=>console.log("Escuchando en el puerto 3000"))