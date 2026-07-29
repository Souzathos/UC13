export class User {
    public id:number
    public name:string
    public email: string
    public age: number
    public password: string

    constructor(id: number, name: string, age: number, email: string, password: string) {
        this.id = id
        this.name = name
        this.email = email
        this.age = age
        this.password = password
    }
}

export let users:User[] = []