import { z } from "zod";
import { bigIntAsStringSchema } from "../common/bigIntAsStringSchema.js";
export const legacyAccountSchema = z.object({
    id: z.string(),
    accountNumber: z.string(),
    accountName: z.string(),
});
export const accountSchema = legacyAccountSchema.extend({
    id: bigIntAsStringSchema,
});
