import { AppDataSource } from "../config/dataSource";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export class ProductService {
    private repo = AppDataSource.getRepository(Product)
    private categoryRepo = AppDataSource.getRepository(Category)

    async list() {
        return this.repo.find({
            relations: { category: true },
            order: { id: 'ASC' }
        });
    }

    async show(id: number) {
        const product = await this.repo.findOne({
            where: { id },
            relations: { category: true }
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }

    async create(name: string, description: string, categoryId: number) {
        if (!name || !description || !categoryId) {
            throw new Error('Name, description and categoryId are required');
        }

        const category = await this.categoryRepo.findOneBy({ id: categoryId });

        if (!category) {
            throw new Error('Category not found');
        }

        const product = this.repo.create({ name, description, category });

        return this.repo.save(product);
    }

    async update(id: number, name?: string, description?: string, categoryId?: number) {
        const product = await this.repo.findOneBy({ id });

        if (!product) {
            throw new Error('Product not found');
        }

        if (name) {
            product.name = name;
        }

        if (description) {
            product.description = description;
        }

        if (categoryId) {
            const category = await this.categoryRepo.findOneBy({ id: categoryId });

            if (!category) {
                throw new Error('Category not found');
            }

            product.category = category;
        }

        return this.repo.save(product);
    }

    async delete(id: number) {
        const product = await this.repo.findOneBy({ id });

        if (!product) {
            throw new Error('Product not found');
        }

        await this.repo.remove(product);
    }
}