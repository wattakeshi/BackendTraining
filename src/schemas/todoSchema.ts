import { z } from "zod";

export const todoSchema = z.object({
    taskname: z.string()
        .min(3, { message: "O nome deve ter pelo menos 3 caracteres" })
        .max(100, { message: "O nome está muito longo" }),
    done: z.boolean().refine(val => val !== undefined, { message: "O status done é obrigatório" })

});

export type TaskInput = z.infer<typeof todoSchema>