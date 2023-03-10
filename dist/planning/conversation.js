import { z } from "zod";
export const MAX_LENGTH_MESSAGE = 2500;
const conversationMessageSchema = z.object({
    message: z.string(),
    conversationId: z.number(),
    planId: z.bigint(),
    companyDomainId: z.string(),
    replyId: z.number().or(z.null()),
    createdAt: z.date(),
    lastEditedAt: z.date().or(z.null()),
    lastEditedBy: z.string().or(z.null()),
    deleted: z.boolean(),
    deletedAt: z.date().or(z.null()),
    deletedBy: z.string().or(z.null()),
    createdBy: z.string(),
    taskId: z.bigint(),
    id: z.number(),
});
export const conversationSchema = z.object({
    id: z.number(),
    planId: z.bigint(),
    companyDomainId: z.string(),
    createdAt: z.date(),
    taskId: z.bigint(),
    conversationMessages: z.array(conversationMessageSchema),
});
export const getConversationResponseSchema = conversationSchema;
export const getConversationsResponseSchema = z.array(conversationSchema);
const conversationMessageLastReadSchema = z.object({
    user: z.string(),
    conversationId: z.number(),
    messageId: z.number(),
    taskId: z.bigint(),
    planId: z.bigint(),
    companyDomainId: z.string(),
    updatedAt: z.date(),
});
export const getReadConversationsResponseSchema = z.array(conversationMessageLastReadSchema.extend({
    conversation: z.object({
        conversationMessages: z.tuple([
            z.object({
                id: z.number(),
            }),
        ]),
    }),
}));
