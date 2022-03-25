const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    userId:             { type: String, required: true },
    products: [
        {
            productId:  { type: String, required: true },
            quantity:   { type: Number, required: true }
        }
    ],
    totalPrice:         { type: Number, required: true }        

}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);