const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    products: [
        {
            productId: {
                type:String
            },
            quanity: {
                type: Number,
                default:1,
            }
        }
    ]
}, {timestamps:true});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;