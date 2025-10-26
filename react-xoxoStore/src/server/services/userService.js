const User = require('../models/User')

exports.findAllUsers = () => User.find();
