import { z } from "zod";
export declare const amortizationFreePeriodSchema: z.ZodObject<{
    id: z.ZodString;
    periodFrom: z.ZodString;
    periodTo: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    periodFrom: string;
    periodTo: string;
}, {
    id: string;
    periodFrom: string;
    periodTo: string;
}>;
export declare type AmortizationFreePeriod = z.infer<typeof amortizationFreePeriodSchema>;
export declare const extraAmortizationSchema: z.ZodObject<{
    id: z.ZodString;
    period: z.ZodString;
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    amount: number;
    period: string;
}, {
    id: string;
    amount: number;
    period: string;
}>;
export declare type ExtraAmortization = z.infer<typeof extraAmortizationSchema>;
export declare const financialAssetTypeSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    note: z.ZodString;
    template: z.ZodEnum<["liability", "transfer"]>;
    assetAccount: z.ZodNullable<z.ZodObject<{
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
    }>>;
    liabilityAccount: z.ZodNullable<z.ZodObject<{
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
    }>>;
    interestAccount: z.ZodNullable<z.ZodObject<{
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
    }>>;
    accountRecipe: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "finance"]>;
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    }>>;
    createdAt: z.ZodString;
    bankOverdraft: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    template: "liability" | "transfer";
    createdAt: string;
    note: string;
    assetAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    } | null;
    liabilityAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    } | null;
    interestAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    } | null;
    accountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    } | null;
    bankOverdraft: boolean;
}, {
    id: string;
    name: string;
    template: "liability" | "transfer";
    createdAt: string;
    note: string;
    assetAccount: {
        id: string | bigint;
        accountNumber: string;
        accountName: string;
    } | null;
    liabilityAccount: {
        id: string | bigint;
        accountNumber: string;
        accountName: string;
    } | null;
    interestAccount: {
        id: string | bigint;
        accountNumber: string;
        accountName: string;
    } | null;
    accountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    } | null;
    bankOverdraft: boolean;
}>;
export declare type FinancialAssetType = z.infer<typeof financialAssetTypeSchema>;
export declare const financialAssetSchema: z.ZodObject<{
    id: z.ZodString;
    assetNumber: z.ZodString;
    description: z.ZodString;
    financialAssetType: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        note: z.ZodString;
        template: z.ZodEnum<["liability", "transfer"]>;
        assetAccount: z.ZodNullable<z.ZodObject<{
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
        }>>;
        liabilityAccount: z.ZodNullable<z.ZodObject<{
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
        }>>;
        interestAccount: z.ZodNullable<z.ZodObject<{
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
        }>>;
        accountRecipe: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "finance"]>;
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
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        }>>;
        createdAt: z.ZodString;
        bankOverdraft: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    }, {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    }>;
    organizationalUnitId: z.ZodObject<{
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
    initialDate: z.ZodString;
    initialAmount: z.ZodNumber;
    interestRate: z.ZodNumber;
    residualAmount: z.ZodNumber;
    termMonths: z.ZodNumber;
    amortizationType: z.ZodEnum<["annuity", "straight"]>;
    paymentFrequency: z.ZodEnum<["monthly", "quarterly", "semiannually", "annually"]>;
    scenarioId: z.ZodString;
    taskId: z.ZodString;
    limitFee: z.ZodNumber;
    amortizationFreePeriods: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        periodFrom: string;
        periodTo: string;
    }, {
        id: string;
        periodFrom: string;
        periodTo: string;
    }>, "many">;
    extraAmortizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        period: z.ZodString;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        amount: number;
        period: string;
    }, {
        id: string;
        amount: number;
        period: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    organizationalUnitId: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
    scenarioId: string;
    taskId: string;
    assetNumber: string;
    financialAssetType: {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    };
    initialDate: string;
    initialAmount: number;
    interestRate: number;
    residualAmount: number;
    termMonths: number;
    amortizationType: "annuity" | "straight";
    paymentFrequency: "monthly" | "quarterly" | "semiannually" | "annually";
    limitFee: number;
    amortizationFreePeriods: {
        id: string;
        periodFrom: string;
        periodTo: string;
    }[];
    extraAmortizations: {
        id: string;
        amount: number;
        period: string;
    }[];
}, {
    id: string;
    description: string;
    organizationalUnitId: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
    scenarioId: string;
    taskId: string;
    assetNumber: string;
    financialAssetType: {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    };
    initialDate: string;
    initialAmount: number;
    interestRate: number;
    residualAmount: number;
    termMonths: number;
    amortizationType: "annuity" | "straight";
    paymentFrequency: "monthly" | "quarterly" | "semiannually" | "annually";
    limitFee: number;
    amortizationFreePeriods: {
        id: string;
        periodFrom: string;
        periodTo: string;
    }[];
    extraAmortizations: {
        id: string;
        amount: number;
        period: string;
    }[];
}>;
export declare type FinancialAsset = z.infer<typeof financialAssetSchema>;
export declare const getFinancialAssetsResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    assetNumber: z.ZodString;
    description: z.ZodString;
    financialAssetType: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        note: z.ZodString;
        template: z.ZodEnum<["liability", "transfer"]>;
        assetAccount: z.ZodNullable<z.ZodObject<{
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
        }>>;
        liabilityAccount: z.ZodNullable<z.ZodObject<{
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
        }>>;
        interestAccount: z.ZodNullable<z.ZodObject<{
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
        }>>;
        accountRecipe: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "finance"]>;
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
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        }>>;
        createdAt: z.ZodString;
        bankOverdraft: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    }, {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    }>;
    organizationalUnitId: z.ZodObject<{
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
    initialDate: z.ZodString;
    initialAmount: z.ZodNumber;
    interestRate: z.ZodNumber;
    residualAmount: z.ZodNumber;
    termMonths: z.ZodNumber;
    amortizationType: z.ZodEnum<["annuity", "straight"]>;
    paymentFrequency: z.ZodEnum<["monthly", "quarterly", "semiannually", "annually"]>;
    scenarioId: z.ZodString;
    taskId: z.ZodString;
    limitFee: z.ZodNumber;
    amortizationFreePeriods: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        periodFrom: string;
        periodTo: string;
    }, {
        id: string;
        periodFrom: string;
        periodTo: string;
    }>, "many">;
    extraAmortizations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        period: z.ZodString;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        amount: number;
        period: string;
    }, {
        id: string;
        amount: number;
        period: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    organizationalUnitId: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
    scenarioId: string;
    taskId: string;
    assetNumber: string;
    financialAssetType: {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    };
    initialDate: string;
    initialAmount: number;
    interestRate: number;
    residualAmount: number;
    termMonths: number;
    amortizationType: "annuity" | "straight";
    paymentFrequency: "monthly" | "quarterly" | "semiannually" | "annually";
    limitFee: number;
    amortizationFreePeriods: {
        id: string;
        periodFrom: string;
        periodTo: string;
    }[];
    extraAmortizations: {
        id: string;
        amount: number;
        period: string;
    }[];
}, {
    id: string;
    description: string;
    organizationalUnitId: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
    scenarioId: string;
    taskId: string;
    assetNumber: string;
    financialAssetType: {
        id: string;
        name: string;
        template: "liability" | "transfer";
        createdAt: string;
        note: string;
        assetAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        liabilityAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        interestAccount: {
            id: string | bigint;
            accountNumber: string;
            accountName: string;
        } | null;
        accountRecipe: {
            id: string;
            name: string;
            description: string | null;
            moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        } | null;
        bankOverdraft: boolean;
    };
    initialDate: string;
    initialAmount: number;
    interestRate: number;
    residualAmount: number;
    termMonths: number;
    amortizationType: "annuity" | "straight";
    paymentFrequency: "monthly" | "quarterly" | "semiannually" | "annually";
    limitFee: number;
    amortizationFreePeriods: {
        id: string;
        periodFrom: string;
        periodTo: string;
    }[];
    extraAmortizations: {
        id: string;
        amount: number;
        period: string;
    }[];
}>, "many">;
export declare type GetFinancialAssetsResponse = z.infer<typeof getFinancialAssetsResponseSchema>;
export declare const getFinancialAssetTypesResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    note: z.ZodString;
    template: z.ZodEnum<["liability", "transfer"]>;
    assetAccount: z.ZodNullable<z.ZodObject<{
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
    }>>;
    liabilityAccount: z.ZodNullable<z.ZodObject<{
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
    }>>;
    interestAccount: z.ZodNullable<z.ZodObject<{
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
    }>>;
    accountRecipe: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "finance"]>;
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    }>>;
    createdAt: z.ZodString;
    bankOverdraft: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    template: "liability" | "transfer";
    createdAt: string;
    note: string;
    assetAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    } | null;
    liabilityAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    } | null;
    interestAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    } | null;
    accountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    } | null;
    bankOverdraft: boolean;
}, {
    id: string;
    name: string;
    template: "liability" | "transfer";
    createdAt: string;
    note: string;
    assetAccount: {
        id: string | bigint;
        accountNumber: string;
        accountName: string;
    } | null;
    liabilityAccount: {
        id: string | bigint;
        accountNumber: string;
        accountName: string;
    } | null;
    interestAccount: {
        id: string | bigint;
        accountNumber: string;
        accountName: string;
    } | null;
    accountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    } | null;
    bankOverdraft: boolean;
}>, "many">;
export declare type GetFinancialAssetTypesResponse = z.infer<typeof getFinancialAssetTypesResponseSchema>;
