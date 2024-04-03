import express, { Router } from "express";
import aluno from "./aluno";

const v1: Router = express.Router();

v1.use("/", aluno);

export default v1;