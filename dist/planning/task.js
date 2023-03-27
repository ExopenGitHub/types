import { z } from "zod";
import { organizationalUnitSchema } from "./accountingObject.js";
import { TASK_STATUS } from "./constants.js";
const taskStatusSchema = z.enum(TASK_STATUS);
export const taskSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    targetType: z.string().or(z.null()),
    targetAmount: z.number().or(z.null()),
    owner: z.string(),
    ownerMd5: z.string(),
    assignedTo: z.string().or(z.null()),
    assignedToMd5: z.string().or(z.null()),
    versionId: z.string(),
    status: taskStatusSchema,
    organizationalUnits: z.array(organizationalUnitSchema),
    active: z.boolean(),
    versionName: z.string(),
    parentId: z.string().or(z.null()),
    parentStatus: taskStatusSchema.or(z.null()),
    distributable: z.boolean(),
    dueDate: z.date(),
    rootTaskId: z.string(),
});
export const getTasksResponseSchema = z.array(taskSchema);
