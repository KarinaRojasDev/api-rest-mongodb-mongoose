require("dotenv").config();

//Importamos express
const express = require("express"); 
const app = express(); 
const morgan = require("morgan");
const connectDB = require("./config/db_mongo");
const PORT = 3000; 


//IMPORTAMOS RUTAS
const routesProvider = require("./routes/providers.routes");


//Parsea los datos que vengan del body(Colocarlo siempre)
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("funciona");
});


//Accedemos a las rutas de libros y autores
app.use("/api/providers", routesProvider); 


app.use((req, res) => {
  res.status(404).json({
    error: "la pagina no existe",
  });
}); 

//Con esto conectamos a MongoDB
connectDB(); 

app.listen(PORT, () =>
  console.log(`El servidor esta escuchando en http:localhost:${PORT}`),
);
