import { OrganizationalUnit, BenefitObject } from "./accountingObject.js";
import { Account } from "./accounts.js";

export type PersonnelType = {
  id: string;
  name: string;
  salaryAccount: Account;
  holidayPayAccount: Account;
  ChangeAccruedHolidayPayAccount: Account;
  createdAt: string;
  planId: string;
};

export type PersonnelAgreement = {
  id: string;
  salaryRevisionMonth: string;
  holidayPay: number;
  holidayAllowance: number;
  vacationDays: number;
  groupInsurance: number;
  name: string;
  createdAt: string;
  planId: string;
};

export type DistributionEmployee = {
  id: string;
  amount: number;
  employeeId: string;
  organizationalUnit: OrganizationalUnit;
};

export type EmployeeAllocation = {
  id: string;
  period: string;
  amount: number;
  employeeAllocationKeyId: string;
};

export type KeyClass = "vacation" | "servicelevel";

export type EmployeeAllocationKey = {
  id: string;
  name: string;
  allocations: EmployeeAllocation[];
  employeeId: string;
  createdAt: string;
  keyType: string;
  keyClass: KeyClass;
  organizationalUnitId: string | null;
};

export type EmployeePerPerson = {
  id: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  employmentDate: string;
  birthDate: string;
  employedToDate: string;
  salaryForm: "Hour" | "Month";
  personnelTypeId: PersonnelType;
  personnelAgreementId: PersonnelAgreement;
  monthlySalary: number;
  hourlyPay: number;
  salaryRevisionPercent: number;
  active: boolean;
  scenarioId: string;
  distribution: DistributionEmployee[];
  serviceLevelAllocationKeyId: EmployeeAllocationKey;
  vacationAllocationKeyId: EmployeeAllocationKey;
  benefits: BenefitObject[];
  taskId: string;
};
