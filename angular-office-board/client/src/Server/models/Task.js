const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: Number,
      default: 1
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    userName: {
      type: String
    },
    commentsCount: {
      type: Number,
      default: 0
    },
    comments: {
      type: [],
      default: []
    }
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;