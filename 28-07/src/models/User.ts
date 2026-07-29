import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255, nullable: false})
    name: string

    @Column({length: 255, unique: true, nullable: false})
    email: string

    @Column({length: 255, nullable: false})
    password: string
}