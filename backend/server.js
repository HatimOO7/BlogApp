import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import userRoute from "./routes/user.route.js"
dotenv.config()
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000

app.use("/api/v1/user", userRoute)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server listen at port ${PORT}`);
    
})
