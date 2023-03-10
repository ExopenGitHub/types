import { z } from "zod";
export declare type ConversationReferenceType = "objectTransaction" | "task";
export declare const MAX_LENGTH_MESSAGE = 2500;
declare const conversationMessageSchema: z.ZodObject<{
    message: z.ZodString;
    conversationId: z.ZodNumber;
    planId: z.ZodBigInt;
    companyDomainId: z.ZodString;
    replyId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    createdAt: z.ZodDate;
    lastEditedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
    lastEditedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    deleted: z.ZodBoolean;
    deletedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
    deletedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    createdBy: z.ZodString;
    taskId: z.ZodBigInt;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    message: string;
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    conversationId: number;
    taskId: bigint;
    replyId: number | null;
    lastEditedAt: Date | null;
    lastEditedBy: string | null;
    deleted: boolean;
    deletedAt: Date | null;
    deletedBy: string | null;
    createdBy: string;
}, {
    message: string;
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    conversationId: number;
    taskId: bigint;
    replyId: number | null;
    lastEditedAt: Date | null;
    lastEditedBy: string | null;
    deleted: boolean;
    deletedAt: Date | null;
    deletedBy: string | null;
    createdBy: string;
}>;
export declare type ConversationMessage = z.infer<typeof conversationMessageSchema>;
export declare const conversationSchema: z.ZodObject<{
    id: z.ZodNumber;
    planId: z.ZodBigInt;
    companyDomainId: z.ZodString;
    createdAt: z.ZodDate;
    taskId: z.ZodBigInt;
    conversationMessages: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        conversationId: z.ZodNumber;
        planId: z.ZodBigInt;
        companyDomainId: z.ZodString;
        replyId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        createdAt: z.ZodDate;
        lastEditedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
        lastEditedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        deleted: z.ZodBoolean;
        deletedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
        deletedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdBy: z.ZodString;
        taskId: z.ZodBigInt;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }, {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    taskId: bigint;
    conversationMessages: {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }[];
}, {
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    taskId: bigint;
    conversationMessages: {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }[];
}>;
export declare type Conversation = z.infer<typeof conversationSchema>;
export declare const getConversationResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    planId: z.ZodBigInt;
    companyDomainId: z.ZodString;
    createdAt: z.ZodDate;
    taskId: z.ZodBigInt;
    conversationMessages: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        conversationId: z.ZodNumber;
        planId: z.ZodBigInt;
        companyDomainId: z.ZodString;
        replyId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        createdAt: z.ZodDate;
        lastEditedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
        lastEditedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        deleted: z.ZodBoolean;
        deletedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
        deletedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdBy: z.ZodString;
        taskId: z.ZodBigInt;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }, {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    taskId: bigint;
    conversationMessages: {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }[];
}, {
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    taskId: bigint;
    conversationMessages: {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }[];
}>;
export declare type GetConversationResponse = z.infer<typeof getConversationResponseSchema>;
export declare const getConversationsResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    planId: z.ZodBigInt;
    companyDomainId: z.ZodString;
    createdAt: z.ZodDate;
    taskId: z.ZodBigInt;
    conversationMessages: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        conversationId: z.ZodNumber;
        planId: z.ZodBigInt;
        companyDomainId: z.ZodString;
        replyId: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        createdAt: z.ZodDate;
        lastEditedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
        lastEditedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        deleted: z.ZodBoolean;
        deletedAt: z.ZodUnion<[z.ZodDate, z.ZodNull]>;
        deletedBy: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        createdBy: z.ZodString;
        taskId: z.ZodBigInt;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }, {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    taskId: bigint;
    conversationMessages: {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }[];
}, {
    id: number;
    createdAt: Date;
    planId: bigint;
    companyDomainId: string;
    taskId: bigint;
    conversationMessages: {
        message: string;
        id: number;
        createdAt: Date;
        planId: bigint;
        companyDomainId: string;
        conversationId: number;
        taskId: bigint;
        replyId: number | null;
        lastEditedAt: Date | null;
        lastEditedBy: string | null;
        deleted: boolean;
        deletedAt: Date | null;
        deletedBy: string | null;
        createdBy: string;
    }[];
}>, "many">;
export declare type GetConversationsResponse = z.infer<typeof getConversationsResponseSchema>;
export declare const getReadConversationsResponseSchema: z.ZodArray<z.ZodObject<{
    user: z.ZodString;
    planId: z.ZodBigInt;
    companyDomainId: z.ZodString;
    conversationId: z.ZodNumber;
    taskId: z.ZodBigInt;
    messageId: z.ZodNumber;
    updatedAt: z.ZodDate;
    conversation: z.ZodObject<{
        conversationMessages: z.ZodTuple<[z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>], null>;
    }, "strip", z.ZodTypeAny, {
        conversationMessages: [{
            id: number;
        }];
    }, {
        conversationMessages: [{
            id: number;
        }];
    }>;
}, "strip", z.ZodTypeAny, {
    user: string;
    planId: bigint;
    companyDomainId: string;
    conversationId: number;
    taskId: bigint;
    messageId: number;
    updatedAt: Date;
    conversation: {
        conversationMessages: [{
            id: number;
        }];
    };
}, {
    user: string;
    planId: bigint;
    companyDomainId: string;
    conversationId: number;
    taskId: bigint;
    messageId: number;
    updatedAt: Date;
    conversation: {
        conversationMessages: [{
            id: number;
        }];
    };
}>, "many">;
export declare type GetReadConversationsResponse = z.infer<typeof getReadConversationsResponseSchema>;
export {};
