import { z } from "zod";
import { accountLinkSchema, getAccountLinksResponseSchema, } from "./accountLinks.js";
import { assetSchema, getAssetsResponseSchema } from "./assets.js";
import { employeePerPersonSchema, employeeSettingSchema, getEmployeePerPersonResponseSchema, getEmployeeSettingsResponseSchema, } from "./employees.js";
import { financialAssetSchema, getFinancialAssetsResponseSchema, } from "./financialAssets.js";
import { taskModuleSchema } from "./module.js";
import { getPlansResponseSchema, planSchema } from "./plans.js";
import { getAllScenariosResponseSchema, scenarioSchema } from "./scenario.js";
import { getVatSettingsResponseSchema, vatSettingSchema } from "./vat.js";
export const planComparisonDataSchema = z.object({
    plan: planSchema,
    allScenarios: z.array(scenarioSchema),
    accountLinks: z.array(accountLinkSchema),
    vatSettings: z.array(vatSettingSchema),
    taskModules: z.array(taskModuleSchema),
    assets: z.array(assetSchema),
    financialAssets: z.array(financialAssetSchema),
    employeePerPersons: z.array(employeePerPersonSchema),
    employeeSettings: z.array(employeeSettingSchema),
});
export const getPlanComparisonDataResponseSchema = z.array(z.object({
    plan: getPlansResponseSchema.element,
    allScenarios: getAllScenariosResponseSchema,
    accountLinks: getAccountLinksResponseSchema,
    assets: getAssetsResponseSchema,
    financialAssets: getFinancialAssetsResponseSchema,
    employeePerPersons: getEmployeePerPersonResponseSchema,
    vatSettings: getVatSettingsResponseSchema,
    employeeSettings: getEmployeeSettingsResponseSchema,
    taskModules: z.array(taskModuleSchema),
}));
