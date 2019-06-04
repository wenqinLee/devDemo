//import $ from 'jquery'

var express = require('express')
var router = express.Router()

router.get('/api',(req,res,next)=>{
    res.send('api');
    $.get('https://demo.maodou.io/api/course/XxMq6rnNEnruFqYS2',(data,status)=>{
        console.log('status:'+status+data)
    })
    .done(res=>{
        if(res.errcode === -1){
            alert(res.msg)
        }else{
            console.log("success");
        }
    }).fail(err=>{
        alert(err.msg)
    })
})
module.exports = router;