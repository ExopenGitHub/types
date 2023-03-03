import { z } from "zod";
export declare const assetTypeSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    depreciableAmount: z.ZodNumber;
    note: z.ZodString;
    assetAccount: z.ZodObject<{
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
    depreciationAccount: z.ZodObject<{
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
    revaluationAccount: z.ZodObject<{
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
    writeDownAccount: z.ZodObject<{
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
    saleCounterAcount: z.ZodObject<{
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
    accumulatedDepreciationsAccount: z.ZodObject<{
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
    accumulatedWriteDownsAccount: z.ZodObject<{
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
    capitalGainsAssetsAccount: z.ZodObject<{
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
    lossesAssetsAccount: z.ZodObject<{
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
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    depreciableAmount: number;
    note: string;
    assetAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    depreciationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    revaluationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    writeDownAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    saleCounterAcount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedDepreciationsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedWriteDownsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    capitalGainsAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    lossesAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}, {
    id: string;
    name: string;
    createdAt: string;
    depreciableAmount: number;
    note: string;
    assetAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    depreciationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    revaluationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    writeDownAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    saleCounterAcount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedDepreciationsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedWriteDownsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    capitalGainsAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    lossesAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}>;
export declare type AssetType = z.infer<typeof assetTypeSchema>;
export declare const assetSchema: z.ZodObject<{
    id: z.ZodString;
    assetNumber: z.ZodString;
    description: z.ZodString;
    assetType: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        depreciableAmount: z.ZodNumber;
        note: z.ZodString;
        assetAccount: z.ZodObject<{
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
        depreciationAccount: z.ZodObject<{
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
        revaluationAccount: z.ZodObject<{
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
        writeDownAccount: z.ZodObject<{
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
        saleCounterAcount: z.ZodObject<{
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
        accumulatedDepreciationsAccount: z.ZodObject<{
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
        accumulatedWriteDownsAccount: z.ZodObject<{
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
        capitalGainsAssetsAccount: z.ZodObject<{
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
        lossesAssetsAccount: z.ZodObject<{
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
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }, {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
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
    acquisitionValue: z.ZodNumber;
    residualValue: z.ZodNumber;
    acquisitionDate: z.ZodString;
    depreciationStartDate: z.ZodString;
    depreciationPeriodYear: z.ZodNumber;
    depreciationPeriodMonth: z.ZodNumber;
    depreciationFinalDate: z.ZodString;
    depreciationMethod: z.ZodLiteral<"linear">;
    scenarioId: z.ZodString;
    acquisitionAccountRecipe: z.ZodObject<{
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
    }>;
    saleValue: z.ZodNullable<z.ZodNumber>;
    saleDate: z.ZodNullable<z.ZodString>;
    saleAccountRecipe: z.ZodNullable<z.ZodObject<{
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
    revaluationValue: z.ZodNullable<z.ZodNumber>;
    revaluationDate: z.ZodNullable<z.ZodString>;
    writeDownValue: z.ZodNullable<z.ZodNumber>;
    writeDownDate: z.ZodNullable<z.ZodString>;
    discardedDate: z.ZodNullable<z.ZodString>;
    taskId: z.ZodString;
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
    assetType: {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    acquisitionValue: number;
    residualValue: number;
    acquisitionDate: string;
    depreciationStartDate: string;
    depreciationPeriodYear: number;
    depreciationPeriodMonth: number;
    depreciationFinalDate: string;
    depreciationMethod: "linear";
    acquisitionAccountRecipe: {
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
    };
    saleValue: number | null;
    saleDate: string | null;
    saleAccountRecipe: {
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
    revaluationValue: number | null;
    revaluationDate: string | null;
    writeDownValue: number | null;
    writeDownDate: string | null;
    discardedDate: string | null;
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
    assetType: {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    acquisitionValue: number;
    residualValue: number;
    acquisitionDate: string;
    depreciationStartDate: string;
    depreciationPeriodYear: number;
    depreciationPeriodMonth: number;
    depreciationFinalDate: string;
    depreciationMethod: "linear";
    acquisitionAccountRecipe: {
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
    };
    saleValue: number | null;
    saleDate: string | null;
    saleAccountRecipe: {
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
    revaluationValue: number | null;
    revaluationDate: string | null;
    writeDownValue: number | null;
    writeDownDate: string | null;
    discardedDate: string | null;
}>;
export declare type Asset = z.infer<typeof assetSchema>;
export declare const getAssetsResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
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
    scenarioId: z.ZodString;
    taskId: z.ZodString;
    assetNumber: z.ZodString;
    assetType: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        depreciableAmount: z.ZodNumber;
        note: z.ZodString;
        assetAccount: z.ZodObject<{
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
        depreciationAccount: z.ZodObject<{
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
        revaluationAccount: z.ZodObject<{
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
        writeDownAccount: z.ZodObject<{
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
        saleCounterAcount: z.ZodObject<{
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
        accumulatedDepreciationsAccount: z.ZodObject<{
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
        accumulatedWriteDownsAccount: z.ZodObject<{
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
        capitalGainsAssetsAccount: z.ZodObject<{
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
        lossesAssetsAccount: z.ZodObject<{
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
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }, {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }>;
    acquisitionValue: z.ZodNumber;
    residualValue: z.ZodNumber;
    acquisitionDate: z.ZodString;
    depreciationStartDate: z.ZodString;
    depreciationPeriodYear: z.ZodNumber;
    depreciationPeriodMonth: z.ZodNumber;
    depreciationFinalDate: z.ZodString;
    depreciationMethod: z.ZodLiteral<"linear">;
    saleValue: z.ZodNullable<z.ZodNumber>;
    saleDate: z.ZodNullable<z.ZodString>;
    revaluationValue: z.ZodNullable<z.ZodNumber>;
    revaluationDate: z.ZodNullable<z.ZodString>;
    writeDownValue: z.ZodNullable<z.ZodNumber>;
    writeDownDate: z.ZodNullable<z.ZodString>;
    discardedDate: z.ZodNullable<z.ZodString>;
    acquisitionAccountRecipe: z.ZodObject<{
        id: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodDate;
        name: z.ZodString;
        moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "finance"]>;
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    }>;
    saleAccountRecipe: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodDate;
        name: z.ZodString;
        moduleTag: z.ZodEnum<["common", "sale", "account", "asset", "employee", "activity_lts", "employee_pp", "finance"]>;
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    }>>;
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
    assetType: {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    acquisitionValue: number;
    residualValue: number;
    acquisitionDate: string;
    depreciationStartDate: string;
    depreciationPeriodYear: number;
    depreciationPeriodMonth: number;
    depreciationFinalDate: string;
    depreciationMethod: "linear";
    acquisitionAccountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    };
    saleValue: number | null;
    saleDate: string | null;
    saleAccountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    } | null;
    revaluationValue: number | null;
    revaluationDate: string | null;
    writeDownValue: number | null;
    writeDownDate: string | null;
    discardedDate: string | null;
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
    assetType: {
        id: string;
        name: string;
        createdAt: string;
        depreciableAmount: number;
        note: string;
        assetAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        depreciationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        revaluationAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        writeDownAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        saleCounterAcount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedDepreciationsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        accumulatedWriteDownsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        capitalGainsAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        lossesAssetsAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    acquisitionValue: number;
    residualValue: number;
    acquisitionDate: string;
    depreciationStartDate: string;
    depreciationPeriodYear: number;
    depreciationPeriodMonth: number;
    depreciationFinalDate: string;
    depreciationMethod: "linear";
    acquisitionAccountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    };
    saleValue: number | null;
    saleDate: string | null;
    saleAccountRecipe: {
        id: string;
        name: string;
        description: string | null;
        moduleTag: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance";
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
    } | null;
    revaluationValue: number | null;
    revaluationDate: string | null;
    writeDownValue: number | null;
    writeDownDate: string | null;
    discardedDate: string | null;
}>, "many">;
export declare type GetAssetsResponse = z.infer<typeof getAssetsResponseSchema>;
export declare const getAssetTypesResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    depreciableAmount: z.ZodNumber;
    note: z.ZodString;
    assetAccount: z.ZodObject<{
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
    depreciationAccount: z.ZodObject<{
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
    revaluationAccount: z.ZodObject<{
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
    writeDownAccount: z.ZodObject<{
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
    saleCounterAcount: z.ZodObject<{
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
    accumulatedDepreciationsAccount: z.ZodObject<{
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
    accumulatedWriteDownsAccount: z.ZodObject<{
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
    capitalGainsAssetsAccount: z.ZodObject<{
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
    lossesAssetsAccount: z.ZodObject<{
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
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    depreciableAmount: number;
    note: string;
    assetAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    depreciationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    revaluationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    writeDownAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    saleCounterAcount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedDepreciationsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedWriteDownsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    capitalGainsAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    lossesAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}, {
    id: string;
    name: string;
    createdAt: string;
    depreciableAmount: number;
    note: string;
    assetAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    depreciationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    revaluationAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    writeDownAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    saleCounterAcount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedDepreciationsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accumulatedWriteDownsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    capitalGainsAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    lossesAssetsAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}>, "many">;
export declare type GetAssetTypesResponse = z.infer<typeof getAssetTypesResponseSchema>;
