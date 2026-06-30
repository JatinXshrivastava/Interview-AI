import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        unique : [true, "username already taken"] , 
        require : true 
    } ,
    email : {
        type : String , 
        unique : [true , "user with this email-id already exists"],
        require : true 
    },
    password : {
        type : String , 
        require : true 
    }
})

export const userModel = mongoose.model("users" , userSchema) ; 