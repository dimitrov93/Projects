const mongoose  = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
      title: {
        type: String,
      },
      content: {
        type: String,
      },
      userId: {
          type: mongoose.Types.ObjectId,
          ref: 'User'
      },
      userName: {
        type: String
      },
    },
    { timestamps: true }
  );

const Message = mongoose.model('Message',messageSchema )
module.exports = Message