import  express  from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";

import  bodyParser  from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


import User from "./Router/User.js"


const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(cookieParser())
dotenv.config({ path: "backend/config/config.env" });

app.use(User);
mongoose.connect("mongodb://localhost:27017/apponitment" , {
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(function (){
    console.log("connection sucessful");
}).catch(function(err){
    console.log(err);
});
    



app.get("/" , (req , res)=>{
    res.send("Hello From Server");
})

app.listen(5000 , ()=>{
    console.log("server is running on port 5000")
})