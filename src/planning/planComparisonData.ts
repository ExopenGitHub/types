import { z } from "zod";
import {
  accountLinkSchema,
  getAccountLinksResponseSchema,
} from "./accountLinks.js";
import { assetSchema, getAssetsResponseSchema } from "./assets.js";
import {
  employeePerPersonSchema,
  employeeSettingSchema,
  getEmployeePerPersonResponseSchema,
  getEmployeeSettingsResponseSchema,
} from "./employees.js";
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
  employeePerPersons: z.array(employeePerPersonSchema),
  employeeSettings: z.array(employeeSettingSchema),
});

export type PlanComparisonData = z.infer<typeof planComparisonDataSchema>;

export const getPlanComparisonDataResponseSchema = z.array(
  z.object({
    plan: getPlansResponseSchema.element,
    allScenarios: getAllScenariosResponseSchema,
    accountLinks: getAccountLinksResponseSchema,
    assets: getAssetsResponseSchema,
    employeePerPersons: getEmployeePerPersonResponseSchema,
    vatSettings: getVatSettingsResponseSchema,
    employeeSettings: getEmployeeSettingsResponseSchema,
    taskModules: z.array(taskModuleSchema),
  })
);

export type GetPlanComparisonDataResponse = z.infer<
  typeof getPlanComparisonDataResponseSchema
>;