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
        console.log(e);
    }

})

export default userRouter;