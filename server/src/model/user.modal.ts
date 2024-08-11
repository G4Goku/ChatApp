import mongoose, { Schema, Model } from 'mongoose';
import { User } from '../interfaces/interface';

const userSchema: Schema<User> = new Schema({
    userName:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const Users: Model<User> = mongoose.model<User>('User', userSchema);

module.exports = Users
