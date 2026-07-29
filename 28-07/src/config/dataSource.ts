import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: 'src/database/banco.db',
    entities: ["src/models/*.ts"],
    synchronize: true,
    logging: true  
})