import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const routes = Router()
const controller = new CategoryController()

routes.get('/categories', controller.list.bind(controller))
routes.get('/categories/:id', controller.show.bind(controller))
routes.post('/categories', controller.create.bind(controller))
routes.put('/categories/:id', controller.update.bind(controller))
routes.delete('/categories/:id', controller.delete.bind(controller))

export default routes