import { z } from "zod";
import { legacyAccountSchema } from "./accounts.js";
import { distributionSchema } from "./distribution.js";
import { perValueSchema } from "./enums.js";
import { generalObjectSchema, accountingObjectBaseSchema, } from "./accountingObject.js";
import { allocationKeySchema } from "./allocation.js";
const generalObjectRefTypes = [
    "sale",
    "sale_pro",
    "sale_lts",
    "employee",
    "employee_pro",
    "employee_lts",
    "activity_lts",
];
const generalObjectRefTypeLiteralArray = generalObjectRefTypes.map((refType) => z.literal(refType));
const accountObjectRefTypes = [
    "account",
    "account_pro",
    "account_lts",
    "ib",
];
const accountObjectRefTypeLiteralArray = accountObjectRefTypes.map((refType) => z.literal(refType));
const emptyDim = z.object({
    id: z.null(),
    name: z.null(),
    code: z.null(),
});
const objectTransactionDim = z.union([accountingObjectBaseSchema, emptyDim]);
export const baseObjectTransactionSchema = z.object({
    id: z.string(),
    spread: z.number().nullable(),
    periodFrom: z.string(),
    periodTo: z.string(),
    // enums can't be used as discriminator values
    // waiting for https://github.com/colinhacks/zod/pull/1589
    // refType: moduleSchemaRefTypeSchema,
    savedScenarioId: z.string(),
    allocationKey: z.union([allocationKeySchema, z.null()]),
    // generalObject: z.null(),
    // account: z.null(),
    distribution: z.array(distributionSchema),
    customerDim: objectTransactionDim,
    supplierDim: objectTransactionDim,
    projectDim: objectTransactionDim,
    productDim: objectTransactionDim,
    costBearerDim: objectTransactionDim,
    per: perValueSchema,
    conversationId: z.number().or(z.null()),
});
export const isAccountObjectTransaction = (objectTransaction) => {
    return (objectTransaction.refType === "account" ||
        objectTransaction.refType === "account_pro" ||
        objectTransaction.refType === "account_lts" ||
        objectTransaction.refType === "ib");
};
export const isGeneralObjectTransaction = (objectTransaction) => {
    return (objectTransaction.refType === "sale" ||
        objectTransaction.refType === "sale_pro" ||
        objectTransaction.refType === "sale_lts" ||
        objectTransaction.refType === "employee" ||
        objectTransaction.refType === "employee_pro" ||
        objectTransaction.refType === "employee_lts" ||
        objectTransaction.refType === "activity_lts");
};
export const generalObjectTransactionSchema = baseObjectTransactionSchema
    // .omit({ generalObject: true })
    .extend({
    refType: z.union(generalObjectRefTypeLiteralArray),
    generalObject: generalObjectSchema,
    quantity: z.number(),
});
export const accountObjectTransactionSchema = baseObjectTransactionSchema
    // .omit({ account: true })
    .extend({
    refType: z.union(accountObjectRefTypeLiteralArray),
    account: legacyAccountSchema,
    amount: z.number(),
});
export const baseObjectTransactions = [
    baseObjectTransactionSchema.extend({ refType: z.literal("asset") }),
    baseObjectTransactionSchema.extend({ refType: z.literal("employee_pp") }),
    baseObjectTransactionSchema.extend({ refType: z.literal("common") }),
];
export const accountObjectTransactions = [
    accountObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("account") }),
    accountObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("account_pro") }),
    accountObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("account_lts") }),
    accountObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("ib") }),
];
export const objectTransactionSchema = z.discriminatedUnion("refType", [
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("sale") }),
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("sale_pro") }),
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("sale_lts") }),
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("employee") }),
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("employee_pro") }),
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("employee_lts") }),
    generalObjectTransactionSchema
        .omit({ refType: true })
        .extend({ refType: z.literal("activity_lts") }),
    ...accountObjectTransactions,
    ...baseObjectTransactions,
]);
