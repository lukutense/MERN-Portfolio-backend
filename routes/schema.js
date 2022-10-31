/* import express from 'express'; */
import {Schema , model} from 'mongoose'


const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
    },
    email:{
        type: String,
    },
    message:{
        type:String,
    }
}, {
    timestamps: true
})

 const nuevoDato= model('dataForm', schema)

export {nuevoDato}
