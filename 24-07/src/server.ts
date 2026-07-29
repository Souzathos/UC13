import express from 'express'

const app = express()

app.use(express.json()) // Middleware que indica que nossa API lida com JSON

const port = 3000


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})