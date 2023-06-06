const express = require("express");
require("dotenv").config();

// App creacion
const app = express();

//Mostrar directorio public
app.use(express.static("public"));

//Rutas

//auth - crear - login - token renew
app.use("/api/auth", require("./routes/auth"));
//crud

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
