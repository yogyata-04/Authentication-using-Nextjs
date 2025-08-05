import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:String,
})

//there is possibility that model is already present in MongoDB so we don't want it to reloaded, in express model file does not run again and again but in next we will run file quite often
const User=mongoose.models.users|| mongoose.model("users",userSchema);

export default User;

//some people keep token in another model but we will go with this approach where we have token in user model only