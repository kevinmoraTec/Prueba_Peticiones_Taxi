const mongoose =require('mongoose'); // mongoose para declarar lo metodos de esta libreria 
mongoose.connect('mongodb://localhost/notes-db-app',{// Linea para declarar la conxion y su configuracion
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false  
})
.then(db => console.log('DB is Connected'))// declaramos un promesa o cuando se concte mostramos una mensaje
.catch(err => console.error(err)); // para mostar un eroor de la conexion
