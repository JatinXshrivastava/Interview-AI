import app from "./src/app"
import dotenv from "dotenv" 
import { connectToDB } from "./src/database/db";
dotenv.config() ; 

connectToDB() ; 

app.listen(process.env.PORT,() => {
    console.log(`Server running at port ${process.env.PORT}`) 
})