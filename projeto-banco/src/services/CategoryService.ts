import { AppDataSource } from "../config/dataSource";
import { Category } from "../models/Category";

export class CategoryService {
    private repo = AppDataSource.getRepository(Category)

    async list() {
        return this.repo.find({
            order: { id: 'ASC' }
        });
    }

    async show(id: number) {
        const category = await this.repo.findOneBy({ id });

        if (!category) {
            throw new Error('Category not found');
        }

        return category;
    }

    async create(name: string) {
        if (!name) throw new Error('Nome é obrigatorio');

        const category = this.repo.create({ name });

        return this.repo.save(category);
    }

    async update(id: number, name?: string) {
        const category = await this.repo.findOneBy({ id });

        if (!category) {
            throw new Error('Category not found');
        }

        if (name) {
            category.name = name;
        }

        return this.repo.save(category);
    }

    async delete(id: number) {
        const category = await this.repo.findOne({
            where: { id },
            relations: { products: true }
        });

        if (!category) {
            throw new Error('Category not found');
        }

        if (category.products.length > 0) {
            throw new Error('Cannot delete category with linked products');
        }

        await this.repo.remove(category);
    }
}