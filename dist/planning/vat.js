import { z } from "zod";
import { legacyAccountSchema } from "./accounts.js";
export const vatSettingSchema = z.object({
    id: z.string(),
    name: z.string(),
    vatType: z.union([
        z.literal("year"),
        z.literal("quarter"),
        z.literal("monthLt40"),
        z.literal("monthGte40"),
    ]),
    inVatAccounts: z.array(legacyAccountSchema),
    outVatAccounts: z.array(legacyAccountSchema),
    vatRecAccountAsset: legacyAccountSchema,
    vatRecAccountDebt: legacyAccountSchema,
    taxAccount: legacyAccountSchema,
    checkAccount: legacyAccountSchema,
    active: z.boolean(),
    planId: z.string(),
    createdAt: z.date(),
    fiscalyearEnd: z.number(),
    declareDigital: z.boolean(),
    euTrade: z.boolean(),
    individualCompany: z.boolean(),
});
export const getVatSettingsResponseSchema = z.array(vatSettingSchema);
