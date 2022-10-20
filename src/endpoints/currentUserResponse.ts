export interface AccessGroup {
  groupId: number;
  name: string;
  companyId: number;
  readOnly: boolean;
  settings: Record<string, string>;
}

export type AccessGroupObject = {
  id: number;
  groupId: number;
  name: string;
  objectId: string;
  objectType:
    | "PbiEmbeddedReport"
    | "CompanyPbiReport"
    | "JsReport"
    | "Mart"
    | "Udd";
};

export interface CurrentUserApiResponse {
  name: string;
  email: string;
  companyIds: number[];
  accessGroups: AccessGroup[];
  accessGroupsObjects: AccessGroupObject[];
  superAdmin: boolean;
}
