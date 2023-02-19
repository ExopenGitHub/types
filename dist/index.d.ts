export declare type DimensionType = "costcenter" | "project" | "customer" | "product" | "supplier";
export interface DimensionObject {
    id: string;
    code: string;
    name: string;
}
export interface HierarchyNode {
    id: string;
    name: string;
    children: string[];
    objects: string[];
    parentId: string | null;
}
export interface DimensionHierarchy {
    objects: Record<string, DimensionObject>;
    nodes: Record<string, HierarchyNode>;
    root: string[];
    unMapped: string[];
}
export * from "./endpoints/index.js";
export * from "./planning/index.js";
