export const DIM_TYPES = [
  "customer",
  "supplier",
  "project",
  "product",
  "costcenter",
  "costbearer",
] as const;

export const SYNC_STATUS = [
  "new-in-plan",
  "changed-in-plan",
  "sync-updated",
  "sync-new",
  "sync-ok",
  "sync-only-in-plan",
] as const;

export const ACCOUNT_RECIPE_MODULE_TAGS = [
  "common",
  "sale",
  "account",
  "asset",
  "employee",
  "activity_lts",
  "employee_pp",
  "financing",
] as const;

export const MODULE_REF_TYPE = [
  "sale",
  "sale_pro",
  "sale_lts",
  "account",
  "account_pro",
  "account_lts",
  "employee",
  "employee_pro",
  "employee_lts",
  "activity_lts",
  "ib",
  "asset",
  "employee_pp",
  "common",
] as const;

export const PER_VALUE = [
  "whole_period",
  "year",
  "quarter",
  "month",
  "week",
  "day",
] as const;
