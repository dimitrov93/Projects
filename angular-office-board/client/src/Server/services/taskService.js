const Task = require('../models/Task')

exports.findAllTasks = () => Task.find();
exports.delete = (dataId) => Task.deleteOne({_id: dataId})
