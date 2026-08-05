import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

const productService = new ProductService();

export class ProductController {
    async list(req: Request, res: Response) {
        try {
            const products = await productService.list();
            return res.json(products);
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const product = await productService.show(id);
            return res.json(product);
        } catch (err: any) {
            return res.status(404).json({ message: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, description, categoryId } = req.body;
            const product = await productService.create(name, description, categoryId);
            return res.status(201).json(product);
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { name, description, categoryId } = req.body;
            const product = await productService.update(id, name, description, categoryId);
            return res.json(product);
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await productService.delete(id);
            return res.status(204).send();
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }
}