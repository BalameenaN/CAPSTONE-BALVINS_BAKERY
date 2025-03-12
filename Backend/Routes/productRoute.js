import express from 'express'
import productModel from '../Models/productModel.js'

const productRouter = express.Router();

//get request to get all the products
productRouter.get('/',async(req,res)=>{
    console.log("inside /-get");
    try{
        const result = await productModel.find({});
        res.status(200).json(result);
    }catch(e){
        console.log(e);
    }
});

//get the product based on the given id
productRouter.get('/id/:id',async(req,res)=>{
    console.log("inside /id/-get");
    try{
        const result = await productModel.findById(req.params.id);
        res.status(200).json(result);
    }catch(e){
        console.log(e);
    }
});

//post request to create new product
productRouter.post('/',async(req,res)=>{
    console.log("inside /-post");
    try{
        const newDoc = await productModel.create(req.body);
        res.status(200).json(newDoc);
    }catch(e){
        console.log(e);
    }
});

//put request to update property of the product with given id
productRouter.put('/:id',async(req,res)=>{
    console.log("inside /-put");
    try{
        const updatedResult = await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updatedResult);
    }catch(e){
        console.log(e);
    }
});

//delete request to delete the particular product
productRouter.delete('/:id',async(req,res)=>{
    console.log("inside /-delete");
    try{
        const deletedResult = await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedResult);
    }catch(e){
        console.log(e);
    }
});

export default productRouter;
