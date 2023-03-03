import { z } from "zod";

export const planSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  periodFrom: z.string(),
  periodTo: z.string(),
  basedOnPlanId: z.string().or(z.null()),
  legalEntityId: z.string(),
  actualsFrom: z.string(),
  status: z.union([z.literal("in_progress"), z.literal("done")]),
  rootTaskId: z.string(),
  createdAt: z.date(),
  comparisonPlans: z.array(
    z.object({ planId: z.string(), taskId: z.string() })
  ),
  createTemplatesForRegisters: z.boolean(),
  createTasksForCostCenters: z.boolean(),
  createScenariosFromActuals: z.boolean(),
  createScenariosPerTask: z.boolean(),
  periodLength: z.number(),
  companyId: z.string(),
  thousands: z.boolean(),
  owner: z.string(),
});

export type Plan = z.infer<typeof planSchema>;

export const getPlansResponseSchema = z.array(planSchema);

export type GetPlansResponse = z.infer<typeof getPlansResponseSchema>;
