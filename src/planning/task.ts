import { OrganizationalUnit } from "./accountingObject.js";

export type Task = {
  id: string;
  name: string;
  description: string;
  targetType: string;
  targetAmount: number;
  owner: string;
  ownerMd5: string;
  assignedTo: string | null;
  assignedToMd5: string | null;
  dueDate: string;
  distributable: boolean;
  organizationalUnits: OrganizationalUnit[];
  versionId: string;
  versionName: string;
  status: TaskStatus;
  active: boolean;
  rootTaskId: string;
} & (
  | { parentId: null; parentStatus: null }
  | { parentId: string; parentStatus: TaskStatus }
);

export enum TaskStatus {
  InProgress = "in_progress",
  ReadyForReview = "ready_for_review",
  Approved = "approved",
}
