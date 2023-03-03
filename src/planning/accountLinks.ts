import { z } from "zod";
import {
  accountRecipeSchema,
  getAccountRecipesResponseSchema,
} from "./accountRecipes.js";
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

export type AccountLink = z.infer<typeof accountLinkSchema>;

export const getAccountLinksResponseSchema = z.array(
  accountLinkSchema
    .omit({ accountRecipes: true })
    .extend({ accountRecipes: getAccountRecipesResponseSchema })
);

export type GetAccountLinksResponse = z.infer<
  typeof getAccountLinksResponseSchema
>;
