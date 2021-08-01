
const express=require('express'); // decalramos la variable exppres 
const path = require('path')
const exphbs=require('express-handlebars')
const  methodOverride=require('method-override')
const   session =require('express-session')
const flash = require('connect-flash')
// Inizilation 

const app = express(); // Iniciamos el framework Express 
require('./database')//Inicializamos la conexion con la base de datos 


//Seting : Podemos configurar las vistas las plantillas,vistas relacinado con le framework en General 

app.set('port', process.env.PORT || 3000) // Elegimos un puerto o el del servicio
app.set('views',path.join(__dirname,'views')); //me permite unir directorios 
app.engine('.hbs',exphbs({ // utizamos una especie de plantilla para reutilizarla  
     defaultLayout: 'main',
     layoutsDir:path.join(app.set('views'),'layouts'),
     partialsDir:path.join(app.set('views'),'partials') ,//Pequeñas partes de html que podems reutilizar en cualquier vista 
     extname:'.hbs',
     
}));
app.set('view engine', '.hbs')
//midelwares // Todasl as funciones 
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method')); //estendems las funciones de los formularios 
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(flash())

app.use((req,res,next)=> {
    res.locals.success_msg=req.flash('success_msg')
    res.locals.error_msg=req.flash('error_msg')
    next()
})


//Global Variable 

//Routes : las url 
app.use(require('./routes/index'))
app.use(require('./routes/users'))
app.use(require('./routes/notes'))
//Static file 
app.use(express.static(path.join(__dirname,'public')))


// Server is lisen  
app.listen(app.get('port'),() =>{
console.log('Server on port',app.get('port'))
});