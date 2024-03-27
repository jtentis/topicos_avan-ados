import express from 'express'
import { knex } from './db.js';
import { v4 as uuidv4 } from 'uuid';
const port = 3000

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    try{
        const dados = await knex.select().table('Alunos')
        res.status(200).send({message: dados})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/Alunos', async (req, res) => {
    const {nome, curso} = req.body
    try{
        await knex('Alunos')
        .insert({
            id: uuidv4(),
            nome: nome,
            curso: curso,
        })
        res.status(200).send({message: "Dados inseridos com sucesso!"})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async (req, res) => {
    try{
        await knex.schema.createTable('Alunos', (table) => {
            table.uuid('id').primary()
            table.string('nome')
            table.string('curso')
          })
          res.status(200).send({message: "Tabela criada com sucesso!"})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`Servidor na porta: ${port}`))