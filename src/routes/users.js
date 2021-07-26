const express=require('express');
const router = express.Router();

router.get('/users/signin', (req,res) => {
    res.render('Users/signin')
});

router.get('/users/signup',(req,res) => {
    res.render('Users/signup')
});

module.exports = router;