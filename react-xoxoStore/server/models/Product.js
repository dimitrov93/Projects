const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    categories: {
        type: String,
        enum: ['women', 'men', 'kids'],
        required: [true, 'Category is required!'],
    },
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;