const express=require('express');
const router = express.Router();

router.get('/users/signin', (req,res) => { // ruta para crear un login 
    res.render('Users/signin')
});

router.get('/users/signup',(req,res) => {// ruta para registrr los Usuarios 
    res.render('Users/signup')
});

router.post('/users/signup',(req,res)=>{//rUTA PARA RESIVIR LOS DATOS DEL fORMULARIO DEL Registro
    const {name,email,password,confir_password,username,fecha}=req.body;
    const errors=[];
    if (name <= 0){
        errors.push('Ingresa tu Nombre')
    } 
    if(password != confir_password){
        errors.push('Contraseña Incorecta')
    }
    if(password.length <4){
        errors.push('La contraseña debe contener mas de 4 caracteres')
    }
    if(errors.length <=  0){
        res.render('users/signup',{error,name,password,confir_password})
    }
    else{
        res.send('Vamos Okey')
    }
});

module.exports = router;