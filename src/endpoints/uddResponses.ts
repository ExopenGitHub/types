export interface UddHierarchyItem {
  id: string;
  name: string;
  leMasterKey: string;
  value: string;
}

export interface UddHierarchyTree {
  id: string;
  name: string;
  children: UddHierarchyTree[];
  items: UddHierarchyItem[];
  sortOrder: number;
}

export interface UddHierarchyResponse {
  uddHierarchy: {
    hierarchies: UddHierarchyTree[];
  };
  unmapped: UddHierarchyItem[];
  processedChanges: unknown[];
  lastProcessedVersion: string
}