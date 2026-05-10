import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDB = async ()=>{
    try {
        const databaseInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`MongoDB Connected !! DB Host : ${databaseInstance.connection.host}`
            )
        
    } catch (error) {
        console.log("MONGODB connection error : ", error);
        process.exit(1)
    }
}


export default connectDB