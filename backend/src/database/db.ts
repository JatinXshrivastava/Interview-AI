import dotenv from "dotenv" ; 
import mongoose from "mongoose"; 

dotenv.config() ; 

export async function connectToDB() {
    try{
        const uri = process.env.MONGO_DB_URI;
        if (!uri) throw new Error("MONGO_DB_URI is not defined");
        await mongoose.connect(uri);
        console.log("Database connencted successfully !") ; 
    }catch(err){
        console.log(err) ; 
    }
}

