import {connect} from 'mongoose'
import { MONGODB_URI } from "./config.js";

export const connectDB= async ()=>{

    try {
        await connect(MONGODB_URI)
        console.log('Connect to MongoDB');
    } catch (error) {
        console.log(error);
    }    
}

