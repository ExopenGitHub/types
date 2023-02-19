import { z } from "zod";
import { DIM_TYPES, PER_VALUE } from "./constants.js";
export const perValueSchema = z.enum(PER_VALUE);
export const dimTypeSchema = z.enum(DIM_TYPES);
