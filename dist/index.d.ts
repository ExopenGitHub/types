export declare enum PlanStatus {
    InProgress = "in_progress",
    Done = "done"
}
export declare type Plan = {
    id: string;
    name: string;
    description: string;
    periodFrom: string;
    periodTo: string;
    basedOnPlanId: number;
    legalEntityId: string;
    actualsFrom: string;
    status: PlanStatus;
    rootTaskId: string;
    createdAt: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean;
    createTasksForCostCenters: boolean;
    createScenariosFromActuals: boolean;
    createScenariosPerTask: boolean;
    basedOnYear: number;
    periodLength: number;
    companyId: string;
    generateIbBasedOnOb: boolean;
    thousands: boolean;
    owner: string;
};
export declare type DimType = "customer" | "supplier" | "project" | "product" | "costcenter" | "costbearer";
export declare type Dim = {
    id: string;
    name: string;
    planId: string;
    dimType: DimType;
};
export declare type Account = {
    id: string;
    accountNumber: string;
    accountName: string;
};
export interface AccountingObjectBase {
    id: string;
    name: string;
    code: string;
}
export interface AccountingObjectSync extends AccountingObjectBase {
    active: boolean;
    planId: string;
    createdAt: string;
    syncStatus: "new-in-plan" | "changed-in-plan" | "sync-updated" | "sync-new" | "sync-ok" | "sync-only-in-plan";
}
export interface AccountingObject extends AccountingObjectSync {
    dim: Dim;
}
export interface OrganizationalUnit extends AccountingObjectSync {
}
export interface GeneralObjectAccountRecipeRow {
    id: number;
    amount: number;
    account: Account;
    offsetDays: number | null;
    amountType: "fixed" | "percent";
    accountRecipeId: number;
    parentId: number | null;
}
export declare type AccountRecipeSubItems = {
    id: number;
    amount: number;
    account: Account;
    offsetDays: number | null;
    amountType: "fixed" | "percent";
};
export declare type AccountRecipeRow = {
    id: number;
    amount: number;
    account: Account;
    offsetDays: number | null;
    subItems: AccountRecipeSubItems[];
    amountType: "fixed" | "percent";
};
export declare type AccountRecipeModuleTag = "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp";
export declare type AccountRecipe = {
    id: string;
    name: string;
    description: string;
    moduleTag: AccountRecipeModuleTag;
    versionId: string;
    accountRecipeRows: AccountRecipeRow[];
    createdAt: string;
};
export declare type GeneralObjectAccountRecipe = Omit<AccountRecipe, "accountRecipeRows"> & {
    accountRecipeRows: GeneralObjectAccountRecipeRow[];
};
export declare type GeneralObjectType = "sale" | "employee" | "activity" | "benefit";
export interface GeneralObject extends AccountingObjectSync {
    amount: number;
    refType: GeneralObjectType;
    accountRecipes: GeneralObjectAccountRecipe[];
}
export interface BenefitObject extends GeneralObject {
    amountPercent: number;
    taxType: "Yes" | "No";
    socType: "Social" | "Special" | "No";
}
export declare enum TaskStatus {
    InProgress = "in_progress",
    ReadyForReview = "ready_for_review",
    Approved = "approved"
}
export declare type Task = {
    id: string;
    name: string;
    description: string;
    targetType: string;
    targetAmount: number;
    owner: string;
    ownerMd5: string;
    assignedTo: string | null;
    assignedToMd5: string | null;
    dueDate: string;
    distributable: boolean;
    organizationalUnits: OrganizationalUnit[];
    versionId: string;
    versionName: string;
    status: TaskStatus;
    active: boolean;
    rootTaskId: string;
} & ({
    parentId: null;
    parentStatus: null;
} | {
    parentId: string;
    parentStatus: TaskStatus;
});
export declare type DimensionType = "costcenter" | "project" | "customer" | "product" | "supplier";
export interface DimensionObject {
    id: string;
    code: string;
    name: string;
}
export interface HierarchyNode {
    id: string;
    name: string;
    children: string[];
    objects: string[];
    parentId: string | null;
}
export interface DimensionHierarchy {
    objects: Record<string, DimensionObject>;
    nodes: Record<string, HierarchyNode>;
    root: string[];
    unMapped: string[];
}
export * from "./endpoints/index.js";
