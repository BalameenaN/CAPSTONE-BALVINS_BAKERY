import mongoose from 'mongoose'

//Schema for product details
const orderSchema = new mongoose.Schema({
   Id: [String],
   User_id: Number
});

const orderModel = mongoose.model('order', orderSchema);

export default orderModel;