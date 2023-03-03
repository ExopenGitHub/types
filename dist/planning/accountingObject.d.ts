import { z } from "zod";
export declare const dimSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    planId: z.ZodString;
    dimType: z.ZodEnum<["customer", "supplier", "project", "product", "costcenter", "costbearer"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    planId: string;
    dimType: "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
}, {
    id: string;
    name: string;
    planId: string;
    dimType: "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
}>;
export declare type Dim = z.infer<typeof dimSchema>;
export declare const accountingObjectBaseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    name: string;
}, {
    code: string;
    id: string;
    name: string;
}>;
export declare type AccountingObjectBase = z.infer<typeof accountingObjectBaseSchema>;
export declare const accountingObjectSyncSchema: z.ZodObject<{
    code: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    active: z.ZodBoolean;
    planId: z.ZodString;
    createdAt: z.ZodDate;
    syncStatus: z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan";
}, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan";
}>;
export declare type AccountingObjectSync = z.infer<typeof accountingObjectSyncSchema>;
export declare const accountingObjectSchema: z.ZodObject<{
    code: z.ZodString;
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    createdAt: z.ZodDate;
    planId: z.ZodString;
    syncStatus: z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>;
    dim: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        planId: z.ZodString;
        dimType: z.ZodEnum<["customer", "supplier", "project", "product", "costcenter", "costbearer"]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        planId: string;
        dimType: "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
    }, {
        id: string;
        name: string;
        planId: string;
        dimType: "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
    }>;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan";
    dim: {
        id: string;
        name: string;
        planId: string;
        dimType: "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
    };
}, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan";
    dim: {
        id: string;
        name: string;
        planId: string;
        dimType: "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
    };
}>;
export declare type AccountingObject = z.infer<typeof accountingObjectSchema>;
export declare const organizationalUnitSchema: z.ZodObject<{
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
export declare type OrganizationalUnit = z.infer<typeof organizationalUnitSchema>;
export declare type GeneralObjectType = "sale" | "employee" | "activity" | "benefit";
export declare const generalObjectSchema: z.ZodObject<{
    code: z.ZodString;
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    createdAt: z.ZodDate;
    planId: z.ZodString;
    amount: z.ZodNumber;
    refType: z.ZodEnum<["sale", "employee", "activity", "benefit"]>;
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
    syncStatus: z.ZodNullable<z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    amount: number;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    refType: "sale" | "employee" | "activity" | "benefit";
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
}, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    amount: number;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    refType: "sale" | "employee" | "activity" | "benefit";
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
}>;
export declare type GeneralObject = z.infer<typeof generalObjectSchema>;
export declare const benefitObjectSchema: z.ZodObject<{
    code: z.ZodString;
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    amount: z.ZodNumber;
    createdAt: z.ZodDate;
    planId: z.ZodString;
    syncStatus: z.ZodNullable<z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>>;
    refType: z.ZodEnum<["sale", "employee", "activity", "benefit"]>;
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
    amountPercent: z.ZodNumber;
    taxType: z.ZodUnion<[z.ZodLiteral<"Yes">, z.ZodLiteral<"No">]>;
    socType: z.ZodUnion<[z.ZodLiteral<"Social">, z.ZodLiteral<"Special">, z.ZodLiteral<"No">]>;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    amount: number;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    refType: "sale" | "employee" | "activity" | "benefit";
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
    amountPercent: number;
    taxType: "Yes" | "No";
    socType: "No" | "Social" | "Special";
}, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    amount: number;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    refType: "sale" | "employee" | "activity" | "benefit";
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
    amountPercent: number;
    taxType: "Yes" | "No";
    socType: "No" | "Social" | "Special";
}>;
export declare type BenefitObject = z.infer<typeof benefitObjectSchema>;
export declare const getGeneralObjectsResponseSchema: z.ZodArray<z.ZodObject<{
    code: z.ZodString;
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    amount: z.ZodNumber;
    createdAt: z.ZodDate;
    planId: z.ZodString;
    syncStatus: z.ZodNullable<z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>>;
    refType: z.ZodEnum<["sale", "employee", "activity", "benefit"]>;
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
    code: string;
    id: string;
    active: boolean;
    name: string;
    amount: number;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    refType: "sale" | "employee" | "activity" | "benefit";
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
}, {
    code: string;
    id: string;
    active: boolean;
    name: string;
    amount: number;
    createdAt: Date;
    planId: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    refType: "sale" | "employee" | "activity" | "benefit";
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
}>, "many">;
export declare type GetGeneralObjectsResponse = z.infer<typeof getGeneralObjectsResponseSchema>;
