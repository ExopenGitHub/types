import { z } from "zod";
import { bigIntAsStringSchema } from "../common/bigIntAsStringSchema.js";
import { organizationalUnitSchema } from "./accountingObject.js";
import {
  accountRecipeSchema,
  getAccountRecipesResponseSchema,
} from "./accountRecipes.js";
import { accountSchema } from "./accounts.js";

export const assetTypeSchema = z.object({
  id: bigIntAsStringSchema,
  name: z.string(),
  depreciableAmount: z.number(),
  note: z.string(),
  assetAccount: accountSchema,
  depreciationAccount: accountSchema,
  revaluationAccount: accountSchema,
  writeDownAccount: accountSchema,
  saleCounterAcount: accountSchema,
  accumulatedDepreciationsAccount: accountSchema,
  accumulatedWriteDownsAccount: accountSchema,
  capitalGainsAssetsAccount: accountSchema,
  lossesAssetsAccount: accountSchema,
  createdAt: z
    .date()
    .or(z.string())
    .transform((value) => {
      if (typeof value === "string") {
        return new Date(value);
      }
      return value;
    }),
});

export type AssetType = z.infer<typeof assetTypeSchema>;

export const assetSchema = z.object({
  id: z.string(),
  assetNumber: z.string(),
  description: z.string(),
  assetType: assetTypeSchema,
  organizationalUnitId: organizationalUnitSchema,
  acquisitionValue: z.number(),
  residualValue: z.number(),
  acquisitionDate: z.string(),
  depreciationStartDate: z.string(),
  depreciationPeriodYear: z.number(),
  depreciationPeriodMonth: z.number(),
  depreciationFinalDate: z.string(),
  depreciationMethod: z.literal("linear"),
  scenarioId: z.string(),
  acquisitionAccountRecipe: accountRecipeSchema,
  saleValue: z.number().nullable(),
  saleDate: z.string().nullable(),
  saleAccountRecipe: accountRecipeSchema.nullable(),
  revaluationValue: z.number().nullable(),
  revaluationDate: z.string().nullable(),
  writeDownValue: z.number().nullable(),
  writeDownDate: z.string().nullable(),
  discardedDate: z.string().nullable(),
  taskId: z.string(),
});

export type Asset = z.infer<typeof assetSchema>;

export const getAssetsResponseSchema = z.array(
  assetSchema
    .omit({ acquisitionAccountRecipe: true, saleAccountRecipe: true })
    .extend({
      acquisitionAccountRecipe: getAccountRecipesResponseSchema.element,
      saleAccountRecipe: getAccountRecipesResponseSchema.element.nullable(),
    })
);

export type GetAssetsResponse = z.infer<typeof getAssetsResponseSchema>;

export const getAssetTypesResponseSchema = z.array(assetTypeSchema);

export type GetAssetTypesResponse = z.infer<typeof getAssetTypesResponseSchema>;
