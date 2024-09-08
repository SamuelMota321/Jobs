import { z } from "zod";

export const modalSchema = z.object({
    name: z
        .string()
        .min(1, "*Campo obrigatório"),
    email: z
        .string()
        .min(1, "*Campo obrigatório")
        .email("Insira um email válido"),
    linkedin: z
        .string()
        .url()
        .min(1, "*Campo obrigatóriio")
})