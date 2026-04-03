const User = require('../models/User')

exports.findAllUsers = () => User.find();
exports.withId = (userId) => User.findById(userId)
