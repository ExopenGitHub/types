import { z } from "zod";
import { organizationalUnitSchema } from "./accountingObject.js";
import { accountRecipeSchema } from "./accountRecipes.js";
import { accountSchema } from "./accounts.js";

export const amortizationFreePeriodSchema = z.object({
  id: z.string(),
  periodFrom: z.string(),
  periodTo: z.string(),
});

export type AmortizationFreePeriod = z.infer<
  typeof amortizationFreePeriodSchema
>;

export const extraAmortizationSchema = z.object({
  id: z.string(),
  period: z.string(),
  amount: z.number(),
});

export type ExtraAmortization = z.infer<typeof extraAmortizationSchema>;

export const financialAssetTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  note: z.string(),
  template: z.enum(["liability", "transfer"]),
  assetAccount: accountSchema.nullable(),
  liabilityAccount: accountSchema.nullable(),
  interestAccount: accountSchema.nullable(),
  accountRecipe: accountRecipeSchema.nullable(),
  createdAt: z.string(),
  bankOverdraft: z.boolean(),
});

export type FinancialAssetType = z.infer<typeof financialAssetTypeSchema>;

export const financialAssetSchema = z.object({
  id: z.string(),
  assetNumber: z.string(),
  description: z.string(),
  financialAssetType: financialAssetTypeSchema,
  organizationalUnitId: organizationalUnitSchema,
  initialDate: z.string(),
  initialAmount: z.number(),
  interestRate: z.number(),
  residualAmount: z.number(),
  termMonths: z.number(),
  amortizationType: z.enum(["annuity", "straight"]),
  paymentFrequency: z.enum([
    "monthly",
    "quarterly",
    "semiannually",
    "annually",
  ]),
  scenarioId: z.string(),
  taskId: z.string(),
  limitFee: z.number(),
  amortizationFreePeriods: z.array(amortizationFreePeriodSchema),
  extraAmortizations: z.array(extraAmortizationSchema),
});

export type FinancialAsset = z.infer<typeof financialAssetSchema>;

export const getFinancialAssetsResponseSchema = z.array(financialAssetSchema);

export type GetFinancialAssetsResponse = z.infer<
  typeof getFinancialAssetsResponseSchema
>;

export const getFinancialAssetTypesResponseSchema = z.array(
  financialAssetTypeSchema
);

export type GetFinancialAssetTypesResponse = z.infer<
  typeof getFinancialAssetTypesResponseSchema
>;
