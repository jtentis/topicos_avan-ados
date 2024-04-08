import express from "express";
import "./database/connection"
import routes from "./routes/routes";

const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(4000, () => console.log(`Servidor na porta: ${4000}`))