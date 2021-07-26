const express=require('express');
const router = express.Router();
const Note = require('../models/Note') // para actualixar eliminar editar lo utilizarom con sos metodos 

router.get('/notes/add', (req,res) =>{
    res.render('notes/new-notes')
})

router.post('/notes/new-notes', async (req,res) =>{ // le dice al post que abran prcesos asincronos 
    const{title,descripcion}=req.body //obtenenos el titulo y la descripcion de los imputs por separado y los asigno a una constante
    const errors=[] //creamos un arreglo para enciarle las constantes 
    if(!title){
        errors.push({text:'Inserta un Titilo'})
    }
    if(!descripcion){
        errors.push({text: 'Ingresar un  Texto'})
    }
    if(errors.length > 0){
        res.render('notes/new-notes', {
            errors,  // le eviamos los errores y para uo no escriba todo de nuevo tambien los titulos y errores 
            title,
            descripcion
        });

    }
    else{

        const newNote = new Note({title,descripcion}) // con este metodo obtenemos una nota nueva 
               await newNote.save(); // await para identificar procesos asincronos 
                res.redirect('/notes') 

    }       

    
})

router.get('/notes', async(req,res)=>{
 const notes= await Note.find().sort({date:'desc'}).lean() //Listamos todas las notas y las ordenamos de manera desendente
 res.render('notes/all-notes',{notes})//renderizamos la nueva vista y ademas  le pasamos la variable que contine todas las notas 
}) 

module.exports = router;