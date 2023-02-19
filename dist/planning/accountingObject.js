import { z } from "zod";
import { accountRecipeSchema, getAccountRecipesResponseSchema, } from "./accountRecipes.js";
import { SYNC_STATUS } from "./constants.js";
import { dimTypeSchema } from "./enums.js";
export const dimSchema = z.object({
    id: z.string(),
    name: z.string(),
    planId: z.string(),
    dimType: dimTypeSchema,
});
export const accountingObjectBaseSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
});
export const accountingObjectSyncSchema = accountingObjectBaseSchema.extend({
    active: z.boolean(),
    planId: z.string(),
    createdAt: z.date(),
    syncStatus: z.enum(SYNC_STATUS),
});
export const accountingObjectSchema = accountingObjectSyncSchema.extend({
    dim: dimSchema,
});
export const organizationalUnitSchema = accountingObjectSyncSchema
    .omit({ syncStatus: true })
    .extend({
    syncStatus: accountingObjectSyncSchema.shape.syncStatus.nullable(),
});
export const generalObjectSchema = accountingObjectSyncSchema
    .omit({ syncStatus: true })
    .extend({
    amount: z.number(),
    refType: z.enum(["sale", "employee", "activity", "benefit"]),
    accountRecipes: z.array(accountRecipeSchema),
    syncStatus: accountingObjectSyncSchema.shape.syncStatus.nullable(),
});
export const getGeneralObjectsResponseSchema = z.array(generalObjectSchema
    .omit({ accountRecipes: true })
    .extend({ accountRecipes: getAccountRecipesResponseSchema }));
