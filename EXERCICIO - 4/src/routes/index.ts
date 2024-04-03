import express, { Router } from "express";
import aluno from "./aluno";

const app: Router = express.Router();

app.use("/", aluno);

export default app;