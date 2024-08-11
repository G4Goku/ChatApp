import mongoose, { Schema, Model } from 'mongoose';
import { Message } from '../interfaces/interface';

const messageSchema: Schema<Message> = new Schema({
    ConversationId:{
        type: String
    },
    sender:{
        type: String
    },
    text:{
        type: String
    }
},{
    timestamps: true
})

const Messages: Model<Message> = mongoose.model<Message>('Message', messageSchema);

module.exports = Messages
