const mongoose = require('mongoose')
const Conversation = mongoose.Schema

const conversationSchema = new Conversation({
    members:{
        type: Array
    }
},{
    timestamps: true
})

const Conversations = mongoose.model('Conversation', conversationSchema);

module.exports = Conversations
