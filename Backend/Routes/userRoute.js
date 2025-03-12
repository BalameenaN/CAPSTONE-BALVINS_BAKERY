import express from 'express'
import userModel from '../Models/userModel.js'

const userRouter = express.Router();

//get request for all the users
userRouter.get('/',async(req,res)=>{
    console.log("inside /-GET");
    try{
        const result = await userModel.find({});
        res.status(200).json(result);
    }catch(e){
        res.status(400).json(e);
    }

})

userRouter.post('/',async(req,res)=>{
    console.log("inside /-post");
    console.log(req.body);
    try{
        const newDoc = await userModel.create(req.body);
        res.status(200).json(newDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

userRouter.put('/:id', async(req,res)=>{
    console.log("inside /-put");
    try{
        const updatedDoc = await userModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updatedDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

userRouter.delete('/:id', async(req,res)=>{
    console.log("inside /-delete");
    try{
        const deletedDoc = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

export default userRouter;