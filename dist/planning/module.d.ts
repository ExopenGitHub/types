import { z } from "zod";
export declare const moduleSchemaRefTypeSchema: z.ZodEnum<["sale", "sale_pro", "sale_lts", "account", "account_pro", "account_lts", "employee", "employee_pro", "employee_lts", "activity_lts", "ib", "asset", "employee_pp", "common", "finance"]>;
export declare const moduleSchema: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    refType: z.ZodEnum<["sale", "sale_pro", "sale_lts", "account", "account_pro", "account_lts", "employee", "employee_pro", "employee_lts", "activity_lts", "ib", "asset", "employee_pp", "common", "finance"]>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    id: string;
    refType: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance" | "sale_pro" | "sale_lts" | "account_pro" | "account_lts" | "employee_pro" | "employee_lts" | "ib";
}, {
    description?: string | undefined;
    id: string;
    refType: "common" | "sale" | "account" | "asset" | "employee" | "activity_lts" | "employee_pp" | "finance" | "sale_pro" | "sale_lts" | "account_pro" | "account_lts" | "employee_pro" | "employee_lts" | "ib";
}>;
export declare type Module = z.infer<typeof moduleSchema>;
export declare const taskModuleSchema: z.ZodObject<{
    task: z.ZodString;
    module: z.ZodString;
    parentId: z.ZodUnion<[z.ZodString, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    module: string;
    parentId: string | null;
    task: string;
}, {
    module: string;
    parentId: string | null;
    task: string;
}>;
export declare type TaskModule = z.infer<typeof taskModuleSchema>;
