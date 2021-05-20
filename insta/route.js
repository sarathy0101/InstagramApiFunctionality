var {getDp}=require('./controller.js')
var routes=require('express').Router();
routes.get('/dp',getDp)
routes.get('/welcome',(req,res)=>
{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.json("hii")
})
module.exports=routes