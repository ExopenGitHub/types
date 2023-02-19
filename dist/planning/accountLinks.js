import { z } from "zod";
import { accountRecipeSchema, getAccountRecipesResponseSchema, } from "./accountRecipes.js";
import { accountSchema } from "./accounts.js";
export const accountLinkSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    planId: z.string(),
    accounts: z.array(accountSchema),
    accountRecipes: z.array(accountRecipeSchema),
    active: z.boolean(),
    ibOnly: z.boolean(),
    createdAt: z.date(),
});
export const getAccountLinksResponseSchema = z.array(z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    planId: z.string(),
    createdAt: z.date(),
    accounts: z.array(accountSchema),
    accountRecipes: getAccountRecipesResponseSchema,
    active: z.boolean(),
    ibOnly: z.boolean(),
}));
