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
};
export declare type OrganizationalUnit = {
    id: string;
    name: string;
    code: string;
};
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
