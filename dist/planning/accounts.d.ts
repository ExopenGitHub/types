import { z } from "zod";
export declare const legacyAccountSchema: z.ZodObject<{
    id: z.ZodString;
    accountNumber: z.ZodString;
    accountName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    accountNumber: string;
    accountName: string;
}, {
    id: string;
    accountNumber: string;
    accountName: string;
}>;
export declare type LegacyAccount = z.infer<typeof legacyAccountSchema>;
export declare const accountSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    accountName: z.ZodString;
    id: z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodString]>, string, string | bigint>;
}, "strip", z.ZodTypeAny, {
    id: string;
    accountNumber: string;
    accountName: string;
}, {
    id: string | bigint;
    accountNumber: string;
    accountName: string;
}>;
export declare type Account = z.infer<typeof accountSchema>;
