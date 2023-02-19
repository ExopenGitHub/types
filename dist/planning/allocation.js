import { z } from "zod";
export const allocationSchema = z.object({
    id: z.string(),
    period: z.string(),
    amount: z.number().nullable(),
    allocationKeyId: z.string(),
});
export const allocationKeySchema = z
    .object({
    id: z.string(),
    name: z.string(),
    allocations: z.array(allocationSchema),
    objectTransaction: z.union([z.string(), z.null()]),
    createdAt: z.string(),
    keyType: z.string(),
})
    .and(z.object({
    accountId: z.union([z.string(), z.null()]),
    organizationalUnitId: z.union([z.string(), z.null()]),
})
// waiting for support for null as discriminator key: https://github.com/colinhacks/zod/pull/1589
// z.discriminatedUnion("accountId", [
//   z.object({
//     accountId: z.string(),
//     organizationalUnitId: z.string(),
//   }),
//   z.object({
//     accountId: z.null(),
//     organizationalUnitId: z.null(),
//   }),
// ])
);
