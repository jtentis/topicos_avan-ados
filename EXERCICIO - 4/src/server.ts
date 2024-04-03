import express from "express";
import "./database/connection"
import rotas from "./routes";

const app = express();
app.use(express.json());

app.use("/v1", rotas);

app.listen(4000, () => console.log(`Servidor na porta: ${4000}`))