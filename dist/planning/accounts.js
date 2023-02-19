import { z } from "zod";
export const accountSchema = z.object({
    id: z.string(),
    accountNumber: z.string(),
    accountName: z.string(),
});
