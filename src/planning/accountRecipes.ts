import { z } from "zod";
import { accountSchema } from "./accounts.js";
import { ACCOUNT_RECIPE_MODULE_TAGS } from "./constants.js";

const commonAccountRecipeSchema = z.object({
  id: z.string(),
  amount: z.number(),
  account: accountSchema,
  offsetDays: z.union([z.number(), z.null()]),
  amountType: z.union([z.literal("fixed"), z.literal("percent")]),
});

export const subAccountRecipeSchema = commonAccountRecipeSchema.extend({
  parentId: z.string(),
});

export type AccountRecipeSubRow = z.infer<typeof subAccountRecipeSchema>;

export const accountRecipeRowSchema = commonAccountRecipeSchema.extend({
  subItems: z.array(subAccountRecipeSchema),
});

export type AccountRecipeRow = z.infer<typeof accountRecipeRowSchema>;

export type AccountRecipeModuleTag =
  | "common"
  | "sale"
  | "account"
  | "asset"
  | "employee"
  | "activity_lts"
  | "employee_pp";

export const accountRecipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  moduleTag: z.enum(ACCOUNT_RECIPE_MODULE_TAGS),
  versionId: z.string(),
  accountRecipeRows: z.array(accountRecipeRowSchema),
  createdAt: z.date(),
});

export type AccountRecipe = z.infer<typeof accountRecipeSchema>;

export const getAccountRecipesResponseSchema = z.array(
  z.object({
    id: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    name: z.string(),
    moduleTag: z.enum(ACCOUNT_RECIPE_MODULE_TAGS),
    versionId: z.string(),
    jsonRows: z.array(
      z.object({
        accountId: z.string(),
        accountName: z.string(),
        accountNumber: z.string(),
        accountRecipeId: z.string(),
        amount: z.number(),
        amountType: z.union([z.literal("fixed"), z.literal("percent")]),
        id: z.string(),
        offsetDays: z.union([z.number(), z.null()]),
        parentId: z.union([z.string(), z.null()]),
      })
    ),
  })
);

export type GetAccountRecipesResponse = z.infer<
  typeof getAccountRecipesResponseSchema
>;
