import express from 'express'
import cors from 'cors'
import connectDB from './database.js';
import 'dotenv/config'
import userRouter from './Routes/userRoute.js';

const app = express();

const port = 8080;
app.use(express.json());

//route middleware
app.use('/user',userRouter);

//homepage API
app.get('/',(req,res)=>{
    res.json('Hello from MONGODB!');
})


app.listen(port,()=>{
    console.log("Server is running successfully in:", port);
    connectDB();
})