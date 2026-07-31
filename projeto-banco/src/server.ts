import express from 'express'
import { AppDataSource } from './config/dataSource'

const port = 3000
const app = express()

app.use(express.json())

AppDataSource.initialize().then(() => {
    console.log('banco conectado')

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
    })
}).catch(() => {
    console.error('Banco de dados não conectado')
})