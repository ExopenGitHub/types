import { z } from "zod";
export declare const allocationSchema: z.ZodObject<{
    id: z.ZodString;
    period: z.ZodString;
    amount: z.ZodNullable<z.ZodNumber>;
    allocationKeyId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    amount: number | null;
    period: string;
    allocationKeyId: string;
}, {
    id: string;
    amount: number | null;
    period: string;
    allocationKeyId: string;
}>;
export declare type Allocation = z.infer<typeof allocationSchema>;
export declare const allocationKeySchema: z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    allocations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        period: z.ZodString;
        amount: z.ZodNullable<z.ZodNumber>;
        allocationKeyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        amount: number | null;
        period: string;
        allocationKeyId: string;
    }, {
        id: string;
        amount: number | null;
        period: string;
        allocationKeyId: string;
    }>, "many">;
    objectTransaction: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    createdAt: z.ZodString;
    keyType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    keyType: string;
    createdAt: string;
    allocations: {
        id: string;
        amount: number | null;
        period: string;
        allocationKeyId: string;
    }[];
    objectTransaction: string | null;
}, {
    id: string;
    name: string;
    keyType: string;
    createdAt: string;
    allocations: {
        id: string;
        amount: number | null;
        period: string;
        allocationKeyId: string;
    }[];
    objectTransaction: string | null;
}>, z.ZodObject<{
    accountId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    organizationalUnitId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    accountId: string | null;
    organizationalUnitId: string | null;
}, {
    accountId: string | null;
    organizationalUnitId: string | null;
}>>;
export declare type AllocationKey = z.infer<typeof allocationKeySchema>;
