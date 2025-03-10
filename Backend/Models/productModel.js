import mongoose from 'mongoose'

//Schema for product details
const productSchema = new mongoose.Schema({
    Name : {
        type: String,
        required : true
     },
     category : String,
     price : {
        type: Number,
        required : true
     },
     Image_URL : String,
     DiscountPrice : Number,
     Rating : Number,
     Ingredients : [String]
});

const productModel = mongoose.model('product', productSchema);

export default productModel;