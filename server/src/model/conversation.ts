import mongoose, { Schema, Model } from 'mongoose';
import { Conversation } from '../interfaces/interface';

const conversationSchema: Schema<Conversation> = new Schema({
    members: {
        type: [String],
        required: true,
    }
}, {
    timestamps: true
});

const Conversations: Model<Conversation> = mongoose.model<Conversation>('Conversation', conversationSchema);

export default Conversations;
