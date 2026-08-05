import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const routes = Router()
const controller = new ProductController()

routes.get('/products', controller.list.bind(controller))
routes.get('/products/:id', controller.show.bind(controller))
routes.post('/products', controller.create.bind(controller))
routes.put('/products/:id', controller.update.bind(controller))
routes.delete('/products/:id', controller.delete.bind(controller))

export default routes