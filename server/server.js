const path=require('path')
const http=require('http')
const express=require('express')
var route=require('../insta/route.js')
const publicPath=path.join(__dirname,'/../public')
const port=process.env.PORT||3000
let app=express();
let server=http.createServer(app);
var parser=require('body-parser')
app.use(parser.json())
app.use(express.static(publicPath))
app.use(route)

server.listen(port,()=>
{
    console.log("hiiii")
})