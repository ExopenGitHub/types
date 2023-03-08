import { z } from "zod";

export type ConversationReferenceType = "objectTransaction" | "task";

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

export type ConversationMessage = z.infer<typeof conversationMessageSchema>;

export const conversationSchema = z.object({
  id: z.number(),
  planId: z.bigint(),
  companyDomainId: z.string(),
  createdAt: z.date(),
  taskId: z.bigint(),
  conversationMessages: z.array(conversationMessageSchema),
});

export type Conversation = z.infer<typeof conversationSchema>;

export const getConversationResponseSchema = conversationSchema;

export type GetConversationResponse = z.infer<
  typeof getConversationResponseSchema
>;

export const getConversationsResponseSchema = z.array(conversationSchema);

export type GetConversationsResponse = z.infer<
  typeof getConversationsResponseSchema
>;
