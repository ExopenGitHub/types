import { z } from "zod";
export declare const scenarioSchema: z.ZodObject<{
    id: z.ZodString;
    taskId: z.ZodString;
    name: z.ZodString;
    description: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    active: z.ZodBoolean;
    objectTransactions: z.ZodArray<z.ZodDiscriminatedUnion<"refType", [z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"activity_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"ib">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"asset">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"employee_pp">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"common">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>]>, "many">;
    taskIds: z.ZodArray<z.ZodString, "many">;
    baseline: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    description: string | null;
    taskId: string;
    objectTransactions: ({
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    })[];
    taskIds: string[];
    baseline: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    description: string | null;
    taskId: string;
    objectTransactions: ({
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    })[];
    taskIds: string[];
    baseline: boolean;
}>;
export declare type Scenario = z.infer<typeof scenarioSchema>;
export declare const getScenarioResponseSchema: z.ZodObject<{
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    description: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    taskId: z.ZodString;
    taskIds: z.ZodArray<z.ZodString, "many">;
    baseline: z.ZodBoolean;
    objectTransactions: z.ZodArray<z.ZodDiscriminatedUnion<"refType", [z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"activity_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"ib">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"asset">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"employee_pp">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"common">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>]>, "many">;
}, "strict", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    description: string | null;
    taskId: string;
    objectTransactions: ({
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    })[];
    taskIds: string[];
    baseline: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    description: string | null;
    taskId: string;
    objectTransactions: ({
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    })[];
    taskIds: string[];
    baseline: boolean;
}>;
export declare type GetScenarioResponse = z.infer<typeof getScenarioResponseSchema>;
export declare const getAllScenariosResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    active: z.ZodBoolean;
    name: z.ZodString;
    description: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    taskId: z.ZodString;
    taskIds: z.ZodArray<z.ZodString, "many">;
    baseline: z.ZodBoolean;
    objectTransactions: z.ZodArray<z.ZodDiscriminatedUnion<"refType", [z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"sale_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"employee_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        generalObject: z.ZodObject<{
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
            }[];
        }>;
        quantity: z.ZodNumber;
        refType: z.ZodLiteral<"activity_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }, {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account_pro">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"account_lts">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
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
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"ib">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"asset">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"employee_pp">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>, z.ZodObject<{
        id: z.ZodString;
        spread: z.ZodNullable<z.ZodNumber>;
        periodFrom: z.ZodString;
        periodTo: z.ZodString;
        savedScenarioId: z.ZodString;
        allocationKey: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        }>>, z.ZodNull]>;
        distribution: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amount: z.ZodNumber;
            objectTransactionId: z.ZodString;
            organizationalUnit: z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodNull]>;
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
            } | null;
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
            } | null;
        }>, "many">;
        customerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        supplierDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        projectDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        productDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        costBearerDim: z.ZodUnion<[z.ZodObject<{
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
        }>, z.ZodNull]>;
        per: z.ZodEnum<["whole_period", "year", "quarter", "month", "week", "day"]>;
        conversationId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        refType: z.ZodLiteral<"common">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }, {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    }>]>, "many">;
}, "strict", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    description: string | null;
    taskId: string;
    objectTransactions: ({
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    })[];
    taskIds: string[];
    baseline: boolean;
}, {
    id: string;
    active: boolean;
    name: string;
    description: string | null;
    taskId: string;
    objectTransactions: ({
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "account_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        account: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        amount: number;
        refType: "ib";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "asset";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "employee_pp";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "common";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
    } | {
        id: string;
        refType: "sale";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "sale_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_pro";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "employee_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    } | {
        id: string;
        refType: "activity_lts";
        spread: number | null;
        periodFrom: string;
        periodTo: string;
        savedScenarioId: string;
        allocationKey: ({
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
        } & {
            accountId: string | null;
            organizationalUnitId: string | null;
        }) | null;
        distribution: {
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
            } | null;
        }[];
        customerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        supplierDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        projectDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        productDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        costBearerDim: {
            code: string;
            id: string;
            name: string;
        } | null;
        per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
        conversationId: number | null;
        generalObject: {
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
            }[];
        };
        quantity: number;
    })[];
    taskIds: string[];
    baseline: boolean;
}>, "many">;
export declare type GetAllScenariosResponse = z.infer<typeof getAllScenariosResponseSchema>;
export declare const isGeneralObjectTransactionGetScenarioResponse: (objectTransaction: GetAllScenariosResponse[number]["objectTransactions"][number]) => objectTransaction is {
    id: string;
    refType: "sale" | "employee" | "activity_lts" | "sale_pro" | "sale_lts" | "employee_pro" | "employee_lts";
    spread: number | null;
    periodFrom: string;
    periodTo: string;
    savedScenarioId: string;
    allocationKey: ({
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
    } & {
        accountId: string | null;
        organizationalUnitId: string | null;
    }) | null;
    distribution: {
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
        } | null;
    }[];
    customerDim: {
        code: string;
        id: string;
        name: string;
    } | null;
    supplierDim: {
        code: string;
        id: string;
        name: string;
    } | null;
    projectDim: {
        code: string;
        id: string;
        name: string;
    } | null;
    productDim: {
        code: string;
        id: string;
        name: string;
    } | null;
    costBearerDim: {
        code: string;
        id: string;
        name: string;
    } | null;
    per: "day" | "month" | "year" | "quarter" | "week" | "whole_period";
    conversationId: number | null;
    generalObject: {
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
        }[];
    };
    quantity: number;
};
