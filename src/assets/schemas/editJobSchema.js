import { z } from "zod";

export const editJobSchema = z.object({
    position: z
        .string()
        .optional(),
    sallary: z
        .string()
        .optional(),
    description: z
        .string()
        .optional(),
})