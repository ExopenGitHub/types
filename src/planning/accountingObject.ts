import { z } from "zod";
import {
  accountRecipeSchema,
  getAccountRecipesResponseSchema,
} from "./accountRecipes.js";
import { SYNC_STATUS } from "./constants.js";
import { dimTypeSchema } from "./enums.js";

export const dimSchema = z.object({
  id: z.string(),
  name: z.string(),
  planId: z.string(),
  dimType: dimTypeSchema,
});

export type Dim = z.infer<typeof dimSchema>;

export const accountingObjectBaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
});

export type AccountingObjectBase = z.infer<typeof accountingObjectBaseSchema>;

export const accountingObjectSyncSchema = accountingObjectBaseSchema.extend({
  active: z.boolean(),
  planId: z.string(),
  createdAt: z.date(),
  syncStatus: z.enum(SYNC_STATUS),
});

export type AccountingObjectSync = z.infer<typeof accountingObjectSyncSchema>;

export const accountingObjectSchema = accountingObjectSyncSchema.extend({
  dim: dimSchema,
});

export type AccountingObject = z.infer<typeof accountingObjectSchema>;

export const organizationalUnitSchema = accountingObjectSyncSchema
  .omit({ syncStatus: true })
  .extend({
    syncStatus: accountingObjectSyncSchema.shape.syncStatus.nullable(),
  });

export type OrganizationalUnit = z.infer<typeof organizationalUnitSchema>;

export type GeneralObjectType = "sale" | "employee" | "activity" | "benefit";

export const generalObjectSchema = accountingObjectSyncSchema
  .omit({ syncStatus: true })
  .extend({
    amount: z.number(),
    refType: z.enum(["sale", "employee", "activity", "benefit"]),
    accountRecipes: z.array(accountRecipeSchema),
    syncStatus: accountingObjectSyncSchema.shape.syncStatus.nullable(),
  });

export type GeneralObject = z.infer<typeof generalObjectSchema>;

export const benefitObjectSchema = generalObjectSchema.extend({
  amountPercent: z.number(),
  taxType: z.literal("Yes").or(z.literal("No")),
  socType: z.union([
    z.literal("Social"),
    z.literal("Special"),
    z.literal("No"),
  ]),
});

export type BenefitObject = z.infer<typeof benefitObjectSchema>;

export const getGeneralObjectsResponseSchema = z.array(
  generalObjectSchema
    .omit({ accountRecipes: true })
    .extend({ accountRecipes: getAccountRecipesResponseSchema })
);

export type GetGeneralObjectsResponse = z.infer<
  typeof getGeneralObjectsResponseSchema
>;
