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
    comparisonPlans: z.array(z.object({ planId: z.string(), taskId: z.string() })),
    createTemplatesForRegisters: z.boolean().or(z.null()),
    createTasksForCostCenters: z.boolean().or(z.null()),
    createScenariosFromActuals: z.boolean().or(z.null()),
    createScenariosPerTask: z.boolean().or(z.null()),
    periodLength: z.number(),
    companyId: z.string(),
    thousands: z.boolean(),
    owner: z.string(),
});
export const getPlansResponseSchema = z.array(planSchema);
