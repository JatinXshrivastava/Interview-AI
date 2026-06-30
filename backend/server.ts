import app from "./src/app"
import dotenv from "dotenv" 
import { connectToDB } from "./src/database/db";
import { authRouter } from "./src/routes/auth.route";
dotenv.config() ; 

connectToDB() ; 

app.use("/api/auth" , authRouter) ; 

app.listen(process.env.PORT,() => {
    console.log(`Server running at port ${process.env.PORT}`) 
})