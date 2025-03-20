import express from 'express'
import orderModel from '../Models/cartOrderModel.js';

const orderRouter = express.Router();

//route for fetching all the orders 
orderRouter.get('/', async (req, res) => {
    console.log("inside /-get");
    try {
        const result = await orderModel.find({});
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }
});

//route for storing the data in db
orderRouter.post('/', async (req, res) => {
    console.log("inside order/-post");
    console.log(req.body);
    try {
        const newDoc = await orderModel.create(req.body);
        res.status(200).json(newDoc);
    } catch (e) {
        console.log(e);
    }
});

export default orderRouter;