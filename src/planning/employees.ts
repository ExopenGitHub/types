import { z } from "zod";
import {
  benefitObjectSchema,
  organizationalUnitSchema,
} from "./accountingObject.js";
import { getAccountRecipesResponseSchema } from "./accountRecipes.js";
import { legacyAccountSchema } from "./accounts.js";

export const personnelTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  salaryAccount: legacyAccountSchema,
  holidayPayAccount: legacyAccountSchema,
  ChangeAccruedHolidayPayAccount: legacyAccountSchema,
  createdAt: z.string(),
  planId: z.string(),
});

export type PersonnelType = z.infer<typeof personnelTypeSchema>;

export const personnelAgreementSchema = z.object({
  id: z.string(),
  salaryRevisionMonth: z.string(),
  holidayPay: z.number(),
  holidayAllowance: z.number(),
  vacationDays: z.number(),
  groupInsurance: z.number().or(z.null()),
  name: z.string(),
  createdAt: z.string(),
  planId: z.string(),
});

export type PersonnelAgreement = z.infer<typeof personnelAgreementSchema>;

export const distributionEmployeeSchema = z.object({
  id: z.string(),
  amount: z.number(),
  employeeId: z.string(),
  organizationalUnit: organizationalUnitSchema,
});

export type DistributionEmployee = z.infer<typeof distributionEmployeeSchema>;

export const employeeAllocationSchema = z.object({
  id: z.string(),
  period: z.string(),
  amount: z.number(),
  employeeAllocationKeyId: z.string(),
});

export type EmployeeAllocation = z.infer<typeof employeeAllocationSchema>;

export const keyClassSchema = z.union([
  z.literal("vacation"),
  z.literal("servicelevel"),
]);

export type KeyClass = z.infer<typeof keyClassSchema>;

export const employeeAllocationKeySchema = z.object({
  id: z.string(),
  name: z.string(),
  allocations: z.array(employeeAllocationSchema),
  employeeId: z.string().or(z.null()),
  createdAt: z.string(),
  keyType: z.string(),
  keyClass: keyClassSchema,
  organizationalUnitId: z.string().or(z.null()),
});

export type EmployeeAllocationKey = z.infer<typeof employeeAllocationKeySchema>;

export const employeePerPersonSchema = z.object({
  id: z.string(),
  employeeCode: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  employmentDate: z.string(),
  birthDate: z.string(),
  employedToDate: z.string().or(z.null()),
  salaryForm: z.literal("Hour").or(z.literal("Month")),
  personnelTypeId: personnelTypeSchema,
  personnelAgreementId: personnelAgreementSchema,
  monthlySalary: z.number().or(z.null()),
  hourlyPay: z.number().or(z.null()),
  salaryRevisionPercent: z.number().or(z.null()),
  active: z.boolean(),
  scenarioId: z.string().or(z.null()),
  distribution: z.array(distributionEmployeeSchema),
  serviceLevelAllocationKeyId: employeeAllocationKeySchema,
  vacationAllocationKeyId: employeeAllocationKeySchema,
  benefits: z.array(benefitObjectSchema),
  taskId: z.string().or(z.null()),
});

export type EmployeePerPerson = z.infer<typeof employeePerPersonSchema>;

export const getEmployeePerPersonResponseSchema = z.array(
  employeePerPersonSchema.omit({ benefits: true }).extend({
    benefits: z.array(
      benefitObjectSchema
        .omit({ accountRecipes: true })
        .extend({ accountRecipes: getAccountRecipesResponseSchema })
    ),
  })
);

export type GetEmployeePerPersonResponse = z.infer<
  typeof getEmployeePerPersonResponseSchema
>;

export const employeeSettingSchema = z.object({
  id: z.string(),
  socialSecurityAccount: legacyAccountSchema,
  socialSecurityHolidayPayAccount: legacyAccountSchema,
  pensionAccount: legacyAccountSchema,
  groupInsuranceAccount: legacyAccountSchema,
  specialPayrollTaxAccount: legacyAccountSchema,
  employeeTaxesDebtAccount: legacyAccountSchema,
  socialSecurityDebtAccount: legacyAccountSchema,
  accruedHolidayPayDebtAccount: legacyAccountSchema,
  accruedSocialSecurityDebtAccount: legacyAccountSchema,
  checkAccount: legacyAccountSchema,
  name: z.string(),
  active: z.boolean(),
  createdAt: z.date(),
  planId: z.string(),
});

export type EmployeeSetting = z.infer<typeof employeeSettingSchema>;

export const getEmployeeSettingsResponseSchema = z.array(employeeSettingSchema);

export type GetEmployeeSettingsResponse = z.infer<
  typeof getEmployeeSettingsResponseSchema
>;
