 const mongoose=require('mongoose')

 new Schema({
     name:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required:true},
    confir_password:{type:String,required:true},
    username:{type:String,required:true},

 })