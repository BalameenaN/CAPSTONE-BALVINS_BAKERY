import express from 'express'
import cors from 'cors'
import connectDB from './database.js';
import 'dotenv/config'
import userRouter from './Routes/userRoute.js';
import productRouter from './Routes/productRoute.js';
import orderRouter from './Routes/orderRoute.js';

const app = express();

const port = 8080;
app.use(express.json());
app.use(cors()); // using cors to establish connection between frontend & backend

//route middleware
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

//homepage API
app.get('/', (req, res) => {
    res.json('Hello from MONGODB!');
})


app.listen(port, () => {
    console.log("Server is running successfully in:", port);
    connectDB();
})