import express, { Router } from "express";
import alunos from "./alunos";
import cursos from "./cursos";

const routes: Router = express.Router();

routes.use("/", alunos);
routes.use("/", cursos);

export default routes;