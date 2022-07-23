import express from "express";
import cors from "cors";
import routes from "./src/Routes.js";
import db from "./src/Config/db.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000;

db.sync(()=>{console.log(`Banco de dados conectado com sucesso.`)});
app.listen(port, ()=>{console.log(`Servidor iniciado com sucesso na porta: ${port}`)});