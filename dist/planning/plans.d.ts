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
    createTemplatesForRegisters: z.ZodBoolean;
    createTasksForCostCenters: z.ZodBoolean;
    createScenariosFromActuals: z.ZodBoolean;
    createScenariosPerTask: z.ZodBoolean;
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
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    rootTaskId: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean;
    createTasksForCostCenters: boolean;
    createScenariosFromActuals: boolean;
    createScenariosPerTask: boolean;
    periodLength: number;
    companyId: string;
    thousands: boolean;
    owner: string;
}, {
    id: string;
    name: string;
    description: string;
    status: "done" | "in_progress";
    createdAt: Date;
    periodFrom: string;
    periodTo: string;
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    rootTaskId: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean;
    createTasksForCostCenters: boolean;
    createScenariosFromActuals: boolean;
    createScenariosPerTask: boolean;
    periodLength: number;
    companyId: string;
    thousands: boolean;
    owner: string;
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
    createTemplatesForRegisters: z.ZodBoolean;
    createTasksForCostCenters: z.ZodBoolean;
    createScenariosFromActuals: z.ZodBoolean;
    createScenariosPerTask: z.ZodBoolean;
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
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    rootTaskId: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean;
    createTasksForCostCenters: boolean;
    createScenariosFromActuals: boolean;
    createScenariosPerTask: boolean;
    periodLength: number;
    companyId: string;
    thousands: boolean;
    owner: string;
}, {
    id: string;
    name: string;
    description: string;
    status: "done" | "in_progress";
    createdAt: Date;
    periodFrom: string;
    periodTo: string;
    basedOnPlanId: string | null;
    legalEntityId: string;
    actualsFrom: string;
    rootTaskId: string;
    comparisonPlans: {
        planId: string;
        taskId: string;
    }[];
    createTemplatesForRegisters: boolean;
    createTasksForCostCenters: boolean;
    createScenariosFromActuals: boolean;
    createScenariosPerTask: boolean;
    periodLength: number;
    companyId: string;
    thousands: boolean;
    owner: string;
}>, "many">;
export declare type GetPlansResponse = z.infer<typeof getPlansResponseSchema>;
