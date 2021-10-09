let express = require('express');
let Route = express.Router();
let BA = require('../classes/BA');

Route.get('/',(req,res,next)=>{
    let message = req.flash('message')
    res.render('signup',{message})
})

Route.post('/signup',async(req,res,next)=>{
    let result = await BA.signup(req.body);
    req.flash('message', result.message)
    res.redirect('/')
    next()
}) 
module.exports =Route