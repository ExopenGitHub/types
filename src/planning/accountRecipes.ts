import { z } from "zod";
import { legacyAccountSchema } from "./accounts.js";
import { ACCOUNT_RECIPE_MODULE_TAGS } from "./constants.js";

const commonAccountRecipeSchema = z.object({
  id: z.string(),
  amount: z.number(),
  account: legacyAccountSchema,
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

export type AccountRecipeModuleTag = typeof ACCOUNT_RECIPE_MODULE_TAGS[number];

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

export const createAccountRecipeBodySchema = z.object({
  name: z.string(),
  description: z.string(),
  moduleTag: z.enum(ACCOUNT_RECIPE_MODULE_TAGS),
  rows: z.array(
    z.object({
      accountId: z.string(),
      amount: z.number(),
      offsetDays: z.number(),
      amountType: z.string(),
      subItems: z.array(
        z.object({
          accountId: z.string(),
          amount: z.number(),
          offsetDays: z.number(),
          amountType: z.string(),
        })
      ),
    })
  ),
});

export type CreateAccountRecipeBody = z.infer<
  typeof createAccountRecipeBodySchema
>;

export const createAccountRecipeParamsSchema = z.object({
  planId: z.string(),
  companyDomainId: z.string(),
});

export type CreateAccountRecipeParams = z.infer<
  typeof createAccountRecipeParamsSchema
>;

const createAccountRecipeInput = createAccountRecipeParamsSchema.merge(
  createAccountRecipeBodySchema
);

export type CreateAccountRecipeInput = z.infer<typeof createAccountRecipeInput>;
