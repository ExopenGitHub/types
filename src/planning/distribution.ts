import { z } from "zod";
import { organizationalUnitSchema } from "./accountingObject.js";

export const distributionSchema = z.object({
  id: z.string(),
  amount: z.number(),
  objectTransactionId: z.string(),
  organizationalUnit: organizationalUnitSchema.or(z.null()),
});

export type Distribution = z.infer<typeof distributionSchema>;
