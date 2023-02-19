import { z } from "zod";
export declare const accountSchema: z.ZodObject<{
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
export declare type Account = z.infer<typeof accountSchema>;
