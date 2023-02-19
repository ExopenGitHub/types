import { OrganizationalUnit, BenefitObject } from "./accountingObject.js";
import { Account } from "./accounts.js";
export declare type PersonnelType = {
    id: string;
    name: string;
    salaryAccount: Account;
    holidayPayAccount: Account;
    ChangeAccruedHolidayPayAccount: Account;
    createdAt: string;
    planId: string;
};
export declare type PersonnelAgreement = {
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
export declare type DistributionEmployee = {
    id: string;
    amount: number;
    employeeId: string;
    organizationalUnit: OrganizationalUnit;
};
export declare type EmployeeAllocation = {
    id: string;
    period: string;
    amount: number;
    employeeAllocationKeyId: string;
};
export declare type KeyClass = "vacation" | "servicelevel";
export declare type EmployeeAllocationKey = {
    id: string;
    name: string;
    allocations: EmployeeAllocation[];
    employeeId: string;
    createdAt: string;
    keyType: string;
    keyClass: KeyClass;
    organizationalUnitId: string | null;
};
export declare type EmployeePerPerson = {
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
