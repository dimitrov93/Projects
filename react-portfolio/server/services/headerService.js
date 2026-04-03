const Header = require('../models/Header')

exports.findUser = () => Header.find();
exports.create = (data) => Header.create(data)
exports.update = (id, data) => Header.updateOne({_id: id},{$set: data},{ new: true })
