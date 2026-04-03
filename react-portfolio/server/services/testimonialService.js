const Testimonial = require('../models/Testimonial')

exports.find = () => Testimonial.find()
exports.create = (data) => Testimonial.create(data)
exports.deleteTestimonial = (id) => Testimonial.findByIdAndDelete(id)
