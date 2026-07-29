import { Request, Response } from "express";
import { User, users } from "../models/User";

export class UserController {
    createUser(req:Request, res:Response){
        const {name, age, email, password} = req.body

        if(!name || !age ||!email || !password) {
            return res.status(400).json({message: 'name, age, email and password are obrigatory'})
        }
        const id = users.length + 1
        const user:User = new User(id, name, age, email, password)

        users.push(user)
        return res.status(201).json({message: "user created with sucess"})
    }


    getUsers(req:Request, res:Response) {
        return res.status(200).json(users)
    }

    updateUser(req:Request, res:Response) {
        const id:number = Number(req.params.id)
        const {name, age, email, password} = req.body

        if(!name || !age ||!email || !password) {
            return res.status(400).json({message: 'name, age, email and password are obrigatory'})
        }


        const user = users.find((user) => user.id)

        if(!user) {
            return res.status(404).json({message: "not found"})
        }

        user.name = name
        user.email = email
        user.age = age
        user.password = password

        const safeUser = {...user, password}
        return res.status(200).json({message: "user updated with sucess", user:user})

    }
}