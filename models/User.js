import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    //This is test please add more 
    email:{
        type:String,
        required: true,
        help: "This field is required"
    }
})

//Write some "pre" functions

//
const User = mongoose.model('User', userSchema)

export default User