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

});

//get users using id
userRouter.get('/id/:id', async(req,res)=>{
    console.log("inside /id-get");
    try{
        const result = await userModel.findById(req.params.id);
        res.status(200).json(result);
    }catch(e){
        res.status(400).json(e);
    }
   
})

//post request to create new user
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

//put request to update certain property of the user with given id
userRouter.put('/:id', async(req,res)=>{
    console.log("inside /-put");
    try{
        const updatedDoc = await userModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updatedDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

//delete request to delete the user with given id
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