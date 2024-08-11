
import { Document } from 'mongoose';

export interface Conversation extends Document {
    members: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Message extends Document {
    ConversationId: string;
    text: string;
    sender: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface User extends Document {
    userName: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}


