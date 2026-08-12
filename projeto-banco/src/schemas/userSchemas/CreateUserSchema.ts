import z from 'zod';

export const CreateUserSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must have at least 3 characters')
        .max(100, 'Name must have at most 100 characters'),

    email: z
        .email('Invalid email'),

    password: z.string()
        .min(6, 'Password must has at least 6 characters')
        .max(256, 'Password must has in maximum 256 characters')
        .regex(/^(?=.*[A-Z])/, "Password must has at least one upper character")
        .regex(/^(?=.*[a-z])/, 'Password must has one lower character')
        .regex(/^(?=.*[0-9])/, 'Password must has one number')
        .regex(/^(?=.*[!@#$%&*{}_\[\]/\\])/, 'Password must has one special character')
});

export type CreateUserSchema = z.infer<typeof CreateUserSchema>;