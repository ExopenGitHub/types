import { z } from "zod";
export declare const personnelTypeSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    salaryAccount: z.ZodObject<{
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
    holidayPayAccount: z.ZodObject<{
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
    ChangeAccruedHolidayPayAccount: z.ZodObject<{
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
    planId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    planId: string;
    salaryAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    holidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    ChangeAccruedHolidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}, {
    id: string;
    name: string;
    createdAt: string;
    planId: string;
    salaryAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    holidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    ChangeAccruedHolidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}>;
export declare type PersonnelType = z.infer<typeof personnelTypeSchema>;
export declare const personnelAgreementSchema: z.ZodObject<{
    id: z.ZodString;
    salaryRevisionMonth: z.ZodString;
    holidayPay: z.ZodNumber;
    holidayAllowance: z.ZodNumber;
    vacationDays: z.ZodNumber;
    groupInsurance: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    name: z.ZodString;
    createdAt: z.ZodString;
    planId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    planId: string;
    salaryRevisionMonth: string;
    holidayPay: number;
    holidayAllowance: number;
    vacationDays: number;
    groupInsurance: number | null;
}, {
    id: string;
    name: string;
    createdAt: string;
    planId: string;
    salaryRevisionMonth: string;
    holidayPay: number;
    holidayAllowance: number;
    vacationDays: number;
    groupInsurance: number | null;
}>;
export declare type PersonnelAgreement = z.infer<typeof personnelAgreementSchema>;
export declare const distributionEmployeeSchema: z.ZodObject<{
    id: z.ZodString;
    amount: z.ZodNumber;
    employeeId: z.ZodString;
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
    organizationalUnit: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
    employeeId: string;
}, {
    id: string;
    amount: number;
    organizationalUnit: {
        code: string;
        id: string;
        active: boolean;
        name: string;
        createdAt: Date;
        planId: string;
        syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
    };
    employeeId: string;
}>;
export declare type DistributionEmployee = z.infer<typeof distributionEmployeeSchema>;
export declare const employeeAllocationSchema: z.ZodObject<{
    id: z.ZodString;
    period: z.ZodString;
    amount: z.ZodNumber;
    employeeAllocationKeyId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    amount: number;
    period: string;
    employeeAllocationKeyId: string;
}, {
    id: string;
    amount: number;
    period: string;
    employeeAllocationKeyId: string;
}>;
export declare type EmployeeAllocation = z.infer<typeof employeeAllocationSchema>;
export declare const keyClassSchema: z.ZodUnion<[z.ZodLiteral<"vacation">, z.ZodLiteral<"servicelevel">]>;
export declare type KeyClass = z.infer<typeof keyClassSchema>;
export declare const employeeAllocationKeySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    allocations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        period: z.ZodString;
        amount: z.ZodNumber;
        employeeAllocationKeyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        amount: number;
        period: string;
        employeeAllocationKeyId: string;
    }, {
        id: string;
        amount: number;
        period: string;
        employeeAllocationKeyId: string;
    }>, "many">;
    employeeId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    createdAt: z.ZodString;
    keyType: z.ZodString;
    keyClass: z.ZodUnion<[z.ZodLiteral<"vacation">, z.ZodLiteral<"servicelevel">]>;
    organizationalUnitId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    keyType: string;
    createdAt: string;
    allocations: {
        id: string;
        amount: number;
        period: string;
        employeeAllocationKeyId: string;
    }[];
    organizationalUnitId: string | null;
    employeeId: string | null;
    keyClass: "vacation" | "servicelevel";
}, {
    id: string;
    name: string;
    keyType: string;
    createdAt: string;
    allocations: {
        id: string;
        amount: number;
        period: string;
        employeeAllocationKeyId: string;
    }[];
    organizationalUnitId: string | null;
    employeeId: string | null;
    keyClass: "vacation" | "servicelevel";
}>;
export declare type EmployeeAllocationKey = z.infer<typeof employeeAllocationKeySchema>;
export declare const employeePerPersonSchema: z.ZodObject<{
    id: z.ZodString;
    employeeCode: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    employmentDate: z.ZodString;
    birthDate: z.ZodString;
    employedToDate: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    salaryForm: z.ZodUnion<[z.ZodLiteral<"Hour">, z.ZodLiteral<"Month">]>;
    personnelTypeId: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        salaryAccount: z.ZodObject<{
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
        holidayPayAccount: z.ZodObject<{
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
        ChangeAccruedHolidayPayAccount: z.ZodObject<{
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
        planId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }>;
    personnelAgreementId: z.ZodObject<{
        id: z.ZodString;
        salaryRevisionMonth: z.ZodString;
        holidayPay: z.ZodNumber;
        holidayAllowance: z.ZodNumber;
        vacationDays: z.ZodNumber;
        groupInsurance: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        name: z.ZodString;
        createdAt: z.ZodString;
        planId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    }, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    }>;
    monthlySalary: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    hourlyPay: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    salaryRevisionPercent: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    active: z.ZodBoolean;
    scenarioId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    distribution: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        amount: z.ZodNumber;
        employeeId: z.ZodString;
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
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }, {
        id: string;
        amount: number;
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }>, "many">;
    serviceLevelAllocationKeyId: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        allocations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            period: z.ZodString;
            amount: z.ZodNumber;
            employeeAllocationKeyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }>, "many">;
        employeeId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdAt: z.ZodString;
        keyType: z.ZodString;
        keyClass: z.ZodUnion<[z.ZodLiteral<"vacation">, z.ZodLiteral<"servicelevel">]>;
        organizationalUnitId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }>;
    vacationAllocationKeyId: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        allocations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            period: z.ZodString;
            amount: z.ZodNumber;
            employeeAllocationKeyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }>, "many">;
        employeeId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdAt: z.ZodString;
        keyType: z.ZodString;
        keyClass: z.ZodUnion<[z.ZodLiteral<"vacation">, z.ZodLiteral<"servicelevel">]>;
        organizationalUnitId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }>;
    benefits: z.ZodArray<z.ZodObject<{
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
        amountPercent: number;
        taxType: "Yes" | "No";
        socType: "No" | "Social" | "Special";
    }>, "many">;
    taskId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    distribution: {
        id: string;
        amount: number;
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }[];
    employeeCode: string;
    firstName: string;
    lastName: string;
    employmentDate: string;
    birthDate: string;
    employedToDate: string | null;
    salaryForm: "Hour" | "Month";
    personnelTypeId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    personnelAgreementId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    };
    monthlySalary: number | null;
    hourlyPay: number | null;
    salaryRevisionPercent: number | null;
    scenarioId: string | null;
    serviceLevelAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    vacationAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    benefits: {
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
        amountPercent: number;
        taxType: "Yes" | "No";
        socType: "No" | "Social" | "Special";
    }[];
    taskId: string | null;
}, {
    id: string;
    active: boolean;
    distribution: {
        id: string;
        amount: number;
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }[];
    employeeCode: string;
    firstName: string;
    lastName: string;
    employmentDate: string;
    birthDate: string;
    employedToDate: string | null;
    salaryForm: "Hour" | "Month";
    personnelTypeId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    personnelAgreementId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    };
    monthlySalary: number | null;
    hourlyPay: number | null;
    salaryRevisionPercent: number | null;
    scenarioId: string | null;
    serviceLevelAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    vacationAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    benefits: {
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
        amountPercent: number;
        taxType: "Yes" | "No";
        socType: "No" | "Social" | "Special";
    }[];
    taskId: string | null;
}>;
export declare type EmployeePerPerson = z.infer<typeof employeePerPersonSchema>;
export declare const getEmployeePerPersonResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    active: z.ZodBoolean;
    distribution: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        amount: z.ZodNumber;
        employeeId: z.ZodString;
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
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }, {
        id: string;
        amount: number;
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }>, "many">;
    employeeCode: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    employmentDate: z.ZodString;
    birthDate: z.ZodString;
    employedToDate: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    salaryForm: z.ZodUnion<[z.ZodLiteral<"Hour">, z.ZodLiteral<"Month">]>;
    personnelTypeId: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        salaryAccount: z.ZodObject<{
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
        holidayPayAccount: z.ZodObject<{
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
        ChangeAccruedHolidayPayAccount: z.ZodObject<{
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
        planId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    }>;
    personnelAgreementId: z.ZodObject<{
        id: z.ZodString;
        salaryRevisionMonth: z.ZodString;
        holidayPay: z.ZodNumber;
        holidayAllowance: z.ZodNumber;
        vacationDays: z.ZodNumber;
        groupInsurance: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        name: z.ZodString;
        createdAt: z.ZodString;
        planId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    }, {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    }>;
    monthlySalary: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    hourlyPay: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    salaryRevisionPercent: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    scenarioId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    serviceLevelAllocationKeyId: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        allocations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            period: z.ZodString;
            amount: z.ZodNumber;
            employeeAllocationKeyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }>, "many">;
        employeeId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdAt: z.ZodString;
        keyType: z.ZodString;
        keyClass: z.ZodUnion<[z.ZodLiteral<"vacation">, z.ZodLiteral<"servicelevel">]>;
        organizationalUnitId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }>;
    vacationAllocationKeyId: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        allocations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            period: z.ZodString;
            amount: z.ZodNumber;
            employeeAllocationKeyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }, {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }>, "many">;
        employeeId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdAt: z.ZodString;
        keyType: z.ZodString;
        keyClass: z.ZodUnion<[z.ZodLiteral<"vacation">, z.ZodLiteral<"servicelevel">]>;
        organizationalUnitId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }, {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    }>;
    taskId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    benefits: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        id: z.ZodString;
        active: z.ZodBoolean;
        name: z.ZodString;
        amount: z.ZodNumber;
        createdAt: z.ZodDate;
        planId: z.ZodString;
        syncStatus: z.ZodNullable<z.ZodEnum<["new-in-plan", "changed-in-plan", "sync-updated", "sync-new", "sync-ok", "sync-only-in-plan"]>>;
        refType: z.ZodEnum<["sale", "employee", "activity", "benefit"]>;
        amountPercent: z.ZodNumber;
        taxType: z.ZodUnion<[z.ZodLiteral<"Yes">, z.ZodLiteral<"No">]>;
        socType: z.ZodUnion<[z.ZodLiteral<"Social">, z.ZodLiteral<"Special">, z.ZodLiteral<"No">]>;
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
        amountPercent: number;
        taxType: "Yes" | "No";
        socType: "No" | "Social" | "Special";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    distribution: {
        id: string;
        amount: number;
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }[];
    employeeCode: string;
    firstName: string;
    lastName: string;
    employmentDate: string;
    birthDate: string;
    employedToDate: string | null;
    salaryForm: "Hour" | "Month";
    personnelTypeId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    personnelAgreementId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    };
    monthlySalary: number | null;
    hourlyPay: number | null;
    salaryRevisionPercent: number | null;
    scenarioId: string | null;
    serviceLevelAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    vacationAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    benefits: {
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
        amountPercent: number;
        taxType: "Yes" | "No";
        socType: "No" | "Social" | "Special";
    }[];
    taskId: string | null;
}, {
    id: string;
    active: boolean;
    distribution: {
        id: string;
        amount: number;
        organizationalUnit: {
            code: string;
            id: string;
            active: boolean;
            name: string;
            createdAt: Date;
            planId: string;
            syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan" | null;
        };
        employeeId: string;
    }[];
    employeeCode: string;
    firstName: string;
    lastName: string;
    employmentDate: string;
    birthDate: string;
    employedToDate: string | null;
    salaryForm: "Hour" | "Month";
    personnelTypeId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        holidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
        ChangeAccruedHolidayPayAccount: {
            id: string;
            accountNumber: string;
            accountName: string;
        };
    };
    personnelAgreementId: {
        id: string;
        name: string;
        createdAt: string;
        planId: string;
        salaryRevisionMonth: string;
        holidayPay: number;
        holidayAllowance: number;
        vacationDays: number;
        groupInsurance: number | null;
    };
    monthlySalary: number | null;
    hourlyPay: number | null;
    salaryRevisionPercent: number | null;
    scenarioId: string | null;
    serviceLevelAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    vacationAllocationKeyId: {
        id: string;
        name: string;
        keyType: string;
        createdAt: string;
        allocations: {
            id: string;
            amount: number;
            period: string;
            employeeAllocationKeyId: string;
        }[];
        organizationalUnitId: string | null;
        employeeId: string | null;
        keyClass: "vacation" | "servicelevel";
    };
    benefits: {
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
        amountPercent: number;
        taxType: "Yes" | "No";
        socType: "No" | "Social" | "Special";
    }[];
    taskId: string | null;
}>, "many">;
export declare type GetEmployeePerPersonResponse = z.infer<typeof getEmployeePerPersonResponseSchema>;
export declare const employeeSettingSchema: z.ZodObject<{
    id: z.ZodString;
    socialSecurityAccount: z.ZodObject<{
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
    socialSecurityHolidayPayAccount: z.ZodObject<{
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
    pensionAccount: z.ZodObject<{
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
    groupInsuranceAccount: z.ZodObject<{
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
    specialPayrollTaxAccount: z.ZodObject<{
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
    employeeTaxesDebtAccount: z.ZodObject<{
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
    socialSecurityDebtAccount: z.ZodObject<{
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
    accruedHolidayPayDebtAccount: z.ZodObject<{
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
    accruedSocialSecurityDebtAccount: z.ZodObject<{
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
    name: z.ZodString;
    active: z.ZodBoolean;
    createdAt: z.ZodDate;
    planId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    socialSecurityAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityHolidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    pensionAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    groupInsuranceAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    specialPayrollTaxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    employeeTaxesDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedHolidayPayDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedSocialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    socialSecurityAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityHolidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    pensionAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    groupInsuranceAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    specialPayrollTaxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    employeeTaxesDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedHolidayPayDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedSocialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}>;
export declare type EmployeeSetting = z.infer<typeof employeeSettingSchema>;
export declare const getEmployeeSettingsResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    socialSecurityAccount: z.ZodObject<{
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
    socialSecurityHolidayPayAccount: z.ZodObject<{
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
    pensionAccount: z.ZodObject<{
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
    groupInsuranceAccount: z.ZodObject<{
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
    specialPayrollTaxAccount: z.ZodObject<{
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
    employeeTaxesDebtAccount: z.ZodObject<{
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
    socialSecurityDebtAccount: z.ZodObject<{
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
    accruedHolidayPayDebtAccount: z.ZodObject<{
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
    accruedSocialSecurityDebtAccount: z.ZodObject<{
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
    name: z.ZodString;
    active: z.ZodBoolean;
    createdAt: z.ZodDate;
    planId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    socialSecurityAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityHolidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    pensionAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    groupInsuranceAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    specialPayrollTaxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    employeeTaxesDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedHolidayPayDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedSocialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}, {
    id: string;
    active: boolean;
    name: string;
    createdAt: Date;
    planId: string;
    socialSecurityAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityHolidayPayAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    pensionAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    groupInsuranceAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    specialPayrollTaxAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    employeeTaxesDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    socialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedHolidayPayDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    accruedSocialSecurityDebtAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
    checkAccount: {
        id: string;
        accountNumber: string;
        accountName: string;
    };
}>, "many">;
export declare type GetEmployeeSettingsResponse = z.infer<typeof getEmployeeSettingsResponseSchema>;
