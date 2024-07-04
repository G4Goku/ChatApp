const mongoose = require('mongoose')
const Message = mongoose.Schema

const messageSchema = new Message({
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

const Messages = mongoose.model('Message', messageSchema);

module.exports = Messages
