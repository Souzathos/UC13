import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

const categoryService = new CategoryService();

export class CategoryController {
    async list(req: Request, res: Response) {
        try {
            const categories = await categoryService.list();
            return res.json(categories);
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const category = await categoryService.show(id);
            return res.json(category);
        } catch (err: any) {
            return res.status(404).json({ message: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const category = await categoryService.create(name);
            return res.status(201).json(category);
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { name } = req.body;
            const category = await categoryService.update(id, name);
            return res.json(category);
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await categoryService.delete(id);
            return res.status(204).send();
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }
}