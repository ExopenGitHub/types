import { z } from "zod";
export declare const accountLinkSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    planId: z.ZodString;
    accounts: z.ZodArray<z.ZodObject<{
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
    accountRecipes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "financing"]>;
        versionId: z.ZodString;
        accountRecipeRows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            account: z.ZodObject<{
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
            amount: z.ZodNumber;
            offsetDays: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
            amountType: z.ZodUnion<[z.ZodLiteral<"fixed">, z.ZodLiteral<"percent">]>;
            subItems: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                account: z.ZodObject<{
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
                amount: z.ZodNumber;
                offsetDays: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
                amountType: z.ZodUnion<[z.ZodLiteral<"fixed">, z.ZodLiteral<"percent">]>;
                parentId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }, {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            account: {
                id: string;
                accountNumber: string;
                accountName: string;
            };
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            subItems: {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }[];
        }, {
            id: string;
            account: {
                id: string;
                accountNumber: string;
                accountName: string;
            };
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            subItems: {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }[];
        }>, "many">;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        accountRecipeRows: {
            id: string;
            account: {
                id: string;
                accountNumber: string;
                accountName: string;
            };
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            subItems: {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }[];
        }[];
        createdAt: Date;
    }, {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        accountRecipeRows: {
            id: string;
            account: {
                id: string;
                accountNumber: string;
                accountName: string;
            };
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            subItems: {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }[];
        }[];
        createdAt: Date;
    }>, "many">;
    active: z.ZodBoolean;
    ibOnly: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    description: string;
    createdAt: Date;
    planId: string;
    accountRecipes: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        accountRecipeRows: {
            id: string;
            account: {
                id: string;
                accountNumber: string;
                accountName: string;
            };
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            subItems: {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }[];
        }[];
        createdAt: Date;
    }[];
    accounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    ibOnly: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    description: string;
    createdAt: Date;
    planId: string;
    accountRecipes: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        accountRecipeRows: {
            id: string;
            account: {
                id: string;
                accountNumber: string;
                accountName: string;
            };
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            subItems: {
                id: string;
                account: {
                    id: string;
                    accountNumber: string;
                    accountName: string;
                };
                amount: number;
                offsetDays: number | null;
                amountType: "fixed" | "percent";
                parentId: string;
            }[];
        }[];
        createdAt: Date;
    }[];
    accounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    ibOnly: boolean;
}>;
export declare type AccountLink = z.infer<typeof accountLinkSchema>;
export declare const getAccountLinksResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodDate;
    planId: z.ZodString;
    accounts: z.ZodArray<z.ZodObject<{
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
    ibOnly: z.ZodBoolean;
    accountRecipes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodDate;
        name: z.ZodString;
        moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "financing"]>;
        versionId: z.ZodString;
        jsonRows: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            accountName: z.ZodString;
            accountNumber: z.ZodString;
            accountRecipeId: z.ZodString;
            amount: z.ZodNumber;
            amountType: z.ZodUnion<[z.ZodLiteral<"fixed">, z.ZodLiteral<"percent">]>;
            id: z.ZodString;
            offsetDays: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
            parentId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            accountNumber: string;
            accountName: string;
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            parentId: string | null;
            accountId: string;
            accountRecipeId: string;
        }, {
            id: string;
            accountNumber: string;
            accountName: string;
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            parentId: string | null;
            accountId: string;
            accountRecipeId: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        createdAt: Date;
        jsonRows: {
            id: string;
            accountNumber: string;
            accountName: string;
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            parentId: string | null;
            accountId: string;
            accountRecipeId: string;
        }[];
    }, {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        createdAt: Date;
        jsonRows: {
            id: string;
            accountNumber: string;
            accountName: string;
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            parentId: string | null;
            accountId: string;
            accountRecipeId: string;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    description: string;
    createdAt: Date;
    planId: string;
    accountRecipes: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        createdAt: Date;
        jsonRows: {
            id: string;
            accountNumber: string;
            accountName: string;
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            parentId: string | null;
            accountId: string;
            accountRecipeId: string;
        }[];
    }[];
    accounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    ibOnly: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    description: string;
    createdAt: Date;
    planId: string;
    accountRecipes: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
        versionId: string;
        createdAt: Date;
        jsonRows: {
            id: string;
            accountNumber: string;
            accountName: string;
            amount: number;
            offsetDays: number | null;
            amountType: "fixed" | "percent";
            parentId: string | null;
            accountId: string;
            accountRecipeId: string;
        }[];
    }[];
    accounts: {
        id: string;
        accountNumber: string;
        accountName: string;
    }[];
    ibOnly: boolean;
}>, "many">;
export declare type GetAccountLinksResponse = z.infer<typeof getAccountLinksResponseSchema>;
