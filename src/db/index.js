import mongoose  from "mongoose";
import { db_name } from "../constant.js";

const connectDb=async()=>{
    try {
        const connectioInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        //console.log(connectioInstance);
        console.log(`\n MONGODB connected !!! DB HOST : ${connectioInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1);

    }
}
export default connectDb; 