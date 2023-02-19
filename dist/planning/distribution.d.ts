import { z } from "zod";
export declare const distributionSchema: z.ZodObject<{
    id: z.ZodString;
    amount: z.ZodNumber;
    objectTransactionId: z.ZodString;
    organizationalUnit: z.ZodObject<{
        code: z.ZodString;
        id: z.ZodString;
        active: z.ZodBoolean;
        name: z.ZodString;
        createdAt: z.ZodDate;
        planId: z.ZodString;
        syncStatus: z.ZodNullable<z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    }, {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    amount: number;
    objectTransactionId: string;
    organizationalUnit: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
}, {
    id: string;
    amount: number;
    objectTransactionId: string;
    organizationalUnit: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
}>;
export declare type Distribution = z.infer<typeof distributionSchema>;
