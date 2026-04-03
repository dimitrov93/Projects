const Portfolio = require('../models/Portfolio')

exports.find = () => Portfolio.find()
exports.findOne = (id) => Portfolio.findById(id)
exports.create = (data) => Portfolio.create(data)
exports.update = (id, data) => Portfolio.updateOne({_id: id},{$set: data},{ new: true })
exports.deletePortoflio = (id) => Portfolio.findByIdAndDelete(id)