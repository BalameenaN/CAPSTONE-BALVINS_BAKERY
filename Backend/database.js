import mongoose from 'mongoose'

//connecting to DB
async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB connected successfully");

    } catch (e) {
        console.log(e);
    }
}

export default connectDB