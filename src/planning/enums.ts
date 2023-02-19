import { z } from "zod";
import { DIM_TYPES, PER_VALUE } from "./constants.js";

export const perValueSchema = z.enum(PER_VALUE);

export type PerValue = z.infer<typeof perValueSchema>;

export const dimTypeSchema = z.enum(DIM_TYPES);

export type DimType = z.infer<typeof dimTypeSchema>;
