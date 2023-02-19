import { z } from "zod";
import { getGeneralObjectsResponseSchema } from "./accountingObject.js";
import {
  accountObjectTransactions,
  baseObjectTransactions,
  generalObjectTransactionSchema,
  objectTransactionSchema,
} from "./objectTransactions.js";

export const scenarioSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  name: z.string(),
  description: z.union([z.string(), z.null()]),
  active: z.boolean(),
  objectTransactions: z.array(objectTransactionSchema),
  taskIds: z.array(z.string()),
  baseline: z.boolean(),
});

export type Scenario = z.infer<typeof scenarioSchema>;

const generalObjectTransactionFromResponse = generalObjectTransactionSchema
  .omit({ generalObject: true })
  .extend({
    generalObject: getGeneralObjectsResponseSchema.element,
  });

type GeneralObjectTransactionFromResponse = z.infer<
  typeof generalObjectTransactionFromResponse
>;

export const getScenarioResponseSchema = scenarioSchema
  .omit({ objectTransactions: true })
  .extend({
    objectTransactions: z.array(
      z.discriminatedUnion("refType", [
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("sale"),
        }),
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("sale_pro"),
        }),
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("sale_lts"),
        }),
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("employee"),
        }),
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("employee_pro"),
        }),
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("employee_lts"),
        }),
        generalObjectTransactionFromResponse.omit({ refType: true }).extend({
          refType: z.literal("activity_lts"),
        }),
        ...accountObjectTransactions,
        ...baseObjectTransactions,
      ])
    ),
  })
  .strict();

export type GetScenarioResponse = z.infer<typeof getScenarioResponseSchema>;

export const getAllScenariosResponseSchema = z.array(getScenarioResponseSchema);

export type GetAllScenariosResponse = z.infer<
  typeof getAllScenariosResponseSchema
>;

export const isGeneralObjectTransactionGetScenarioResponse = (
  objectTransaction: GetAllScenariosResponse[number]["objectTransactions"][number]
): objectTransaction is GeneralObjectTransactionFromResponse => {
  return (
    objectTransaction.refType === "sale" ||
    objectTransaction.refType === "sale_lts" ||
    objectTransaction.refType === "sale_pro" ||
    objectTransaction.refType === "activity_lts" ||
    objectTransaction.refType === "employee_lts" ||
    objectTransaction.refType === "employee_pro" ||
    objectTransaction.refType === "employee"
  );
};
