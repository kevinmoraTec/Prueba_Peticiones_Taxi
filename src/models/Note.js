// Primero para guardar los datos debemos crear un modelo de datos 

const mogoose = require('mongoose')
const {Schema}=mogoose; // Declaramos el esque ma de datos para utilizarlo

const NoteSchema= new Schema({ // Lo que hacemos aqui es definir como van a luzir mis notas que propiedades van a tener 
    title: {type: String, require: true},
    descripcion: {type: String,require:true},
    date: {type : Date,default: Date.now} // default es is no le asignamos un dato 


});

module.exports =  mogoose.model('Note',NoteSchema) //Necesitamos dos parametros 

