import { z } from "zod";
export declare const planSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    periodFrom: z.ZodString;
    periodTo: z.ZodString;
    basedOnPlanId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    legalEntityId: z.ZodString;
    actualsFrom: z.ZodString;
    status: z.ZodUnion<[z.ZodLiteral<"in_progress">, z.ZodLiteral<"done">]>;
    rootTaskId: z.ZodString;
    createdAt: z.ZodDate;
    comparisonPlans: z.ZodArray<z.ZodObject<{
        planId: z.ZodString;
        taskId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        planId: string;
        taskId: string;
    }, {
        planId: string;
        taskId: string;
    }>, "many">;
    createTemplatesForRegisters: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    createTasksForCostCenters: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    createScenariosFromActuals: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    createScenariosPerTask: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    periodLength: z.ZodNumber;
    companyId: z.ZodString;
    thousands: z.ZodBoolean;
    owner: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    status: "done" | "in_progress";
    createdAt: Date;
    periodFrom: string;
    periodTo: string;
    owner: string;
    rootTaskId: string;
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean | null;
    createTasksForCostCenters: boolean | null;
    createScenariosFromActuals: boolean | null;
    createScenariosPerTask: boolean | null;
    periodLength: number;
    companyId: string;
    thousands: boolean;
}, {
    id: string;
    name: string;
    description: string;
    status: "done" | "in_progress";
    createdAt: Date;
    periodFrom: string;
    periodTo: string;
    owner: string;
    rootTaskId: string;
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean | null;
    createTasksForCostCenters: boolean | null;
    createScenariosFromActuals: boolean | null;
    createScenariosPerTask: boolean | null;
    periodLength: number;
    companyId: string;
    thousands: boolean;
}>;
export declare type Plan = z.infer<typeof planSchema>;
export declare const getPlansResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    periodFrom: z.ZodString;
    periodTo: z.ZodString;
    basedOnPlanId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    legalEntityId: z.ZodString;
    actualsFrom: z.ZodString;
    status: z.ZodUnion<[z.ZodLiteral<"in_progress">, z.ZodLiteral<"done">]>;
    rootTaskId: z.ZodString;
    createdAt: z.ZodDate;
    comparisonPlans: z.ZodArray<z.ZodObject<{
        planId: z.ZodString;
        taskId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        planId: string;
        taskId: string;
    }, {
        planId: string;
        taskId: string;
    }>, "many">;
    createTemplatesForRegisters: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    createTasksForCostCenters: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    createScenariosFromActuals: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    createScenariosPerTask: z.ZodUnion<[z.ZodBoolean, z.ZodNull]>;
    periodLength: z.ZodNumber;
    companyId: z.ZodString;
    thousands: z.ZodBoolean;
    owner: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    status: "done" | "in_progress";
    createdAt: Date;
    periodFrom: string;
    periodTo: string;
    owner: string;
    rootTaskId: string;
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean | null;
    createTasksForCostCenters: boolean | null;
    createScenariosFromActuals: boolean | null;
    createScenariosPerTask: boolean | null;
    periodLength: number;
    companyId: string;
    thousands: boolean;
}, {
    id: string;
    name: string;
    description: string;
    status: "done" | "in_progress";
    createdAt: Date;
    periodFrom: string;
    periodTo: string;
    owner: string;
    rootTaskId: string;
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean | null;
    createTasksForCostCenters: boolean | null;
    createScenariosFromActuals: boolean | null;
    createScenariosPerTask: boolean | null;
    periodLength: number;
    companyId: string;
    thousands: boolean;
}>, "many">;
export declare type GetPlansResponse = z.infer<typeof getPlansResponseSchema>;
