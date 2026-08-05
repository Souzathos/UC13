import express from 'express'
import { AppDataSource } from './config/dataSource'
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from './routes/categoryRoutes'
const port = 3000
const app = express()

app.use(express.json())
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

AppDataSource.initialize().then(() => {
    console.log('banco conectado')

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
    })
}).catch(() => {
    console.error('Banco de dados não conectado')
})