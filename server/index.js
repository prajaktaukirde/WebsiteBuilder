import express from "express" //server create
import dotenv from "dotenv" // port 8000 accessed
dotenv.config()
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const app=express() //instant in app
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use(cors({
    origin:"http:localhost:5173",
    credentials:true
}))

app.listen(port,()=>{//server run by listen port
    console.log("server started")
    connectDb()
})