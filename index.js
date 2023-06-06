const express = require('express');

// App creacion
const app = express()

//Puerto servidor backend
const puerto = 4000

//Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

//Escuchar peticiones
app.listen( puerto, () => {
    console.log(`Servidor corriendo en el puerto ${ puerto }`)
} )