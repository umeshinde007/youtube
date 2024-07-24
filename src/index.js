import dotenv from "dotenv";
import mongoose from "mongoose"; 
import connectDb from "./db/index.js";
dotenv.config({
    path:'./env'
})

connectDb()




/*
import {db_name} from './constant'
import express from "express";
const app=express();

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        app.on("error",(error)=>{
             console.log("unable to connect ",error);
             
        })

        app.listen(`${process.env.PORT}`,()=>{
            console.log(`App is running on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR",error);
        throw(error);
    }

})()
    */