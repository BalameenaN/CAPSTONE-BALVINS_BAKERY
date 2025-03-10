import mongoose from 'mongoose'

//schema for user details
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Email: String,
    Password: String,
    Address: {
        type: String,
        required: true
    },
})

const userModel = mongoose.model('user',userSchema);

export default userModel;