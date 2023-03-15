import { z } from "zod";
export declare const bigIntAsStringSchema: z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodString]>, string, string | bigint>;
