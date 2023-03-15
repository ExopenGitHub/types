import { z } from "zod";
import { bigIntAsStringSchema } from "../common/bigIntAsStringSchema.js";

export const legacyAccountSchema = z.object({
  id: z.string(),
  accountNumber: z.string(),
  accountName: z.string(),
});

export type LegacyAccount = z.infer<typeof legacyAccountSchema>;

export const accountSchema = legacyAccountSchema.extend({
  id: bigIntAsStringSchema,
});

export type Account = z.infer<typeof accountSchema>;
