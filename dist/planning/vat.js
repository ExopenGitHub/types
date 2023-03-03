import { z } from "zod";
import { accountSchema } from "./accounts.js";
export const vatSettingSchema = z.object({
    id: z.string(),
    name: z.string(),
    vatType: z.union([
        z.literal("year"),
        z.literal("quarter"),
        z.literal("monthLt40"),
        z.literal("monthGte40"),
    ]),
    inVatAccounts: z.array(accountSchema),
    outVatAccounts: z.array(accountSchema),
    vatRecAccountAsset: accountSchema,
    vatRecAccountDebt: accountSchema,
    taxAccount: accountSchema,
    checkAccount: accountSchema,
    active: z.boolean(),
    planId: z.string(),
    createdAt: z.date(),
    fiscalyearEnd: z.number(),
    declareDigital: z.boolean(),
    euTrade: z.boolean(),
    individualCompany: z.boolean(),
});
export const getVatSettingsResponseSchema = z.array(vatSettingSchema);
