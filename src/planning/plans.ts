export enum PlanStatus {
  InProgress = "in_progress",
  Done = "done",
}

export type Plan = {
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
  comparisonPlans: { planId: string; taskId: string }[];
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
