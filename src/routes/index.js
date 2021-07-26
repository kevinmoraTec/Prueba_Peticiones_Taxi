const express=require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index')// como resouesta muestra o enviale este archivo abaut
});

router.get('/index', (req,res)=>{
    res.render('index')// como resouesta muestra o enviale este archivo abaut
});

router.get('/about', (req,res)=>{
    res.render('about')
});

module.exports = router;