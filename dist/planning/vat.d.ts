import { z } from "zod";
export declare const vatSettingSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    vatType: z.ZodUnion<[z.ZodLiteral<"year">, z.ZodLiteral<"quarter">, z.ZodLiteral<"monthLt40">, z.ZodLiteral<"monthGte40">]>;
    inVatAccounts: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    outVatAccounts: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    vatRecAccountAsset: z.ZodObject<{
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
    vatRecAccountDebt: z.ZodObject<{
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
    taxAccount: z.ZodObject<{
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
    checkAccount: z.ZodObject<{
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
    active: z.ZodBoolean;
    planId: z.ZodString;
    createdAt: z.ZodDate;
    fiscalyearEnd: z.ZodNumber;
    declareDigital: z.ZodBoolean;
    euTrade: z.ZodBoolean;
    individualCompany: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatType: "year" | "quarter" | "monthLt40" | "monthGte40";
    inVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    outVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    vatRecAccountAsset: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatRecAccountDebt: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    taxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    fiscalyearEnd: number;
    declareDigital: boolean;
    euTrade: boolean;
    individualCompany: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatType: "year" | "quarter" | "monthLt40" | "monthGte40";
    inVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    outVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    vatRecAccountAsset: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatRecAccountDebt: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    taxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    fiscalyearEnd: number;
    declareDigital: boolean;
    euTrade: boolean;
    individualCompany: boolean;
}>;
export declare type VatSetting = z.infer<typeof vatSettingSchema>;
export declare const getVatSettingsResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    vatType: z.ZodUnion<[z.ZodLiteral<"year">, z.ZodLiteral<"quarter">, z.ZodLiteral<"monthLt40">, z.ZodLiteral<"monthGte40">]>;
    inVatAccounts: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    outVatAccounts: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    vatRecAccountAsset: z.ZodObject<{
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
    vatRecAccountDebt: z.ZodObject<{
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
    taxAccount: z.ZodObject<{
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
    checkAccount: z.ZodObject<{
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
    active: z.ZodBoolean;
    planId: z.ZodString;
    createdAt: z.ZodDate;
    fiscalyearEnd: z.ZodNumber;
    declareDigital: z.ZodBoolean;
    euTrade: z.ZodBoolean;
    individualCompany: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatType: "year" | "quarter" | "monthLt40" | "monthGte40";
    inVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    outVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    vatRecAccountAsset: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatRecAccountDebt: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    taxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    fiscalyearEnd: number;
    declareDigital: boolean;
    euTrade: boolean;
    individualCompany: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatType: "year" | "quarter" | "monthLt40" | "monthGte40";
    inVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    outVatAccounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    vatRecAccountAsset: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    vatRecAccountDebt: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    taxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    fiscalyearEnd: number;
    declareDigital: boolean;
    euTrade: boolean;
    individualCompany: boolean;
}>, "many">;
export declare type GetVatSettingsResponse = z.infer<typeof getVatSettingsResponseSchema>;
