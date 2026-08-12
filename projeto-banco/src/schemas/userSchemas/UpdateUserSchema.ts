import z from 'zod'
import { CreateUserSchema } from './CreateUserSchema'

export const UpdateUserScehema = CreateUserSchema.partial()


export type UpdateUserSchema = z.infer<typeof UpdateUserScehema>