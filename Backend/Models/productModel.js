import mongoose from 'mongoose'

//Schema for product details
const productSchema = new mongoose.Schema({
    Name : {
        type: String,
        required : true
     },
     Category : String,
     Price : {
        type: Number,
        required : true
     },
     Image_URL : String,
     DiscountPrice : Number,
     Rating : Number,
     Ingredients : [String]
});

//included index for category field
productSchema.index({Category:1});


const productModel = mongoose.model('product', productSchema);

export default productModel;