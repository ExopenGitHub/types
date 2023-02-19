import { z } from "zod";
export declare const perValueSchema: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
export declare type PerValue = z.infer<typeof perValueSchema>;
export declare const dimTypeSchema: z.ZodEnum<["customer", "supplier", "project", "product", "costcenter", "costbearer"]>;
export declare type DimType = z.infer<typeof dimTypeSchema>;
