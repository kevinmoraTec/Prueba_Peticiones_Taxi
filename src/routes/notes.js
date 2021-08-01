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
               req.flash('success_msg','Nota AgregadaCorrectamente')
                res.redirect('/notes') 

    }       

    
})

router.get('/notes', async(req,res)=>{  // Direccion para listar todas las notas 
 const notes= await Note.find().sort({date:'desc'}).lean() //Listamos todas las notas y las ordenamos de manera desendente
 res.render('notes/all-notes',{notes})//renderizamos la nueva vista y ademas  le pasamos la variable que contine todas las notas 
}) 

router.get('/notes/edit/:id', async (req,res) =>{//cuando me pidan esta ruta voy a enviar este Formulario con su id
    const note =await Note.findById(req.params.id).lean()//consulta a la base de datos para obtener el id  lo guardams en una Costante
    res.render('notes/edit-note',{note}) //Debemos mostar los datos guardados y los que quiere mostrar lo enviamos a la vista 
}) 


router.put('/notes/edit-note/:id',async (req,res)=>{
    const {title,descripcion}=req.body;
   await Note.findByIdAndUpdate(req.params.id,{title,descripcion}).lean()// Funcion para obtener el id y lurgo actualizar con los nuevos datos 
   req.flash('success_msg','Nota Actualizada con Exito !! ')
    res.redirect('/notes')
})

router.delete('/notes/delete/:id', async (req,res)=>{
    await Note.findByIdAndDelete(req.params.id).lean()
    req.flash('success_msg',' Nota eliminada con Exito !! ')
    res.redirect('/notes')
})
module.exports = router;