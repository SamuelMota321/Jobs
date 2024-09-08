import { z } from "zod";

export const createJobSchema = z.object({
    position: z
        .string()
        .min(1, "Forneça um título para a vaga"),
    sallary: z
        .string()
        .optional(),
    description: z
        .string()
        .min(1, "Forneça uma descrição para sua vaga")
})