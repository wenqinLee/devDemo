'use strict'
var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('Hello,world!')
})

app.listen(10001,function(req,res){
    console.log('app is running at localhost://10001')
})