const Message = require('../models/Message')

exports.withId = (msgId) => Message.findById(msgId)
exports.create = (msgData) => Message.create(msgData)
exports.findAllMsg = () => Message.find();
exports.delete = (dataId) => Message.deleteOne({_id: dataId})
exports.update = (id, data) => Message.findByIdAndUpdate({_id: id},{$set: data},{ new: true })

// exports.create = (taskData) => Task.create(taskData)
// exports.addComment = (id, data) => Task.updateOne({_id: id}, {$push: {comments: data}})
// exports.changeStatus = (id, data) => Task.updateOne({_id: id}, {$set:data} ,{ new: true });