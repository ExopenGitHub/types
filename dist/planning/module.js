import { z } from "zod";
import { MODULE_REF_TYPE } from "./constants.js";
export const moduleSchemaRefTypeSchema = z.enum(MODULE_REF_TYPE);
export const moduleSchema = z.object({
    id: z.string(),
    description: z.string().optional(),
    refType: moduleSchemaRefTypeSchema,
});
export const taskModuleSchema = z.object({
    task: z.string(),
    module: z.string(),
    parentId: z.string().or(z.null()),
});
