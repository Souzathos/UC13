import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";import { Category } from "./Category";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255, nullable: false})
    name: string

    @Column({length: 255, nullable: false})
    description: string

    @ManyToOne(() => Category, category => category.products)
    category: Category
}