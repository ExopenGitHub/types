import { z } from "zod";
import { ACCOUNT_RECIPE_MODULE_TAGS } from "./constants.js";
export declare const subAccountRecipeSchema: z.ZodObject<{
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
}>;
export declare type AccountRecipeSubRow = z.infer<typeof subAccountRecipeSchema>;
export declare const accountRecipeRowSchema: z.ZodObject<{
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
}>;
export declare type AccountRecipeRow = z.infer<typeof accountRecipeRowSchema>;
export declare type AccountRecipeModuleTag = typeof ACCOUNT_RECIPE_MODULE_TAGS[number];
export declare const accountRecipeSchema: z.ZodObject<{
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
}>;
export declare type AccountRecipe = z.infer<typeof accountRecipeSchema>;
export declare const getAccountRecipesResponseSchema: z.ZodArray<z.ZodObject<{
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
export declare type GetAccountRecipesResponse = z.infer<typeof getAccountRecipesResponseSchema>;
export declare const createAccountRecipeBodySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "financing"]>;
    rows: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        amount: z.ZodNumber;
        offsetDays: z.ZodNumber;
        amountType: z.ZodString;
        subItems: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            amount: z.ZodNumber;
            offsetDays: z.ZodNumber;
            amountType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }, {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }, {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
    rows: {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }[];
}, {
    name: string;
    description: string;
    moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
    rows: {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }[];
}>;
export declare type CreateAccountRecipeBody = z.infer<typeof createAccountRecipeBodySchema>;
export declare const createAccountRecipeParamsSchema: z.ZodObject<{
    planId: z.ZodString;
    companyDomainId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    planId: string;
    companyDomainId: string;
}, {
    planId: string;
    companyDomainId: string;
}>;
export declare type CreateAccountRecipeParams = z.infer<typeof createAccountRecipeParamsSchema>;
declare const createAccountRecipeInput: z.ZodObject<{
    planId: z.ZodString;
    companyDomainId: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "financing"]>;
    rows: z.ZodArray<z.ZodObject<{
        accountId: z.ZodString;
        amount: z.ZodNumber;
        offsetDays: z.ZodNumber;
        amountType: z.ZodString;
        subItems: z.ZodArray<z.ZodObject<{
            accountId: z.ZodString;
            amount: z.ZodNumber;
            offsetDays: z.ZodNumber;
            amountType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }, {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }, {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
    rows: {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }[];
    planId: string;
    companyDomainId: string;
}, {
    name: string;
    description: string;
    moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "financing";
    rows: {
        amount: number;
        offsetDays: number;
        amountType: string;
        subItems: {
            amount: number;
            offsetDays: number;
            amountType: string;
            accountId: string;
        }[];
        accountId: string;
    }[];
    planId: string;
    companyDomainId: string;
}>;
export declare type CreateAccountRecipeInput = z.infer<typeof createAccountRecipeInput>;
export {};
