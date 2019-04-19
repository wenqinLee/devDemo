var express = require('express')

var bodyParser = require('body-parser')
var fs = require('fs');
var jsonparser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});

var multer = require('multer')
var upload = multer({dest:'uploads/'})

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express();

//路由中间件
app.use('/',indexRouter);
app.use('/users',usersRouter);

//middleware 介于请求req和响应res之间的操作
// app.use(express.static('public'));

// app.use('/middleware',function(req,res,next){
//     console.log("first middleware");
//     next();
//     console.log('first middleware after');
    
// })




// //指定ejs为指定模板引擎ejs
// app.set('view engine','ejs');


// //接收post数据
// app.post('/',urlencodedParser,function(req,res){
//     console.dir(req.body);
//     res.send("ok");
// })

// //接收post传入的json数据
// app.post('/upload',jsonparser,(req,res)=>{
//     console.dir(req.body)
//     res.send("ok");
// });



// app.get('/form',function(req,res){
//     // var person = req.params.name;
//     // res.render('form',{person:person});
//     var data = {
//         name:"wenqin",
//         age:29,
//         hob:"programmer",
//         hobbie:['eating','fighting','coding'],
//     };
//     res.render('views/form',{data:data});
// });

// app.get('/form/about',function(req,res){
//     res.render('views/about');
// });

// app.get('/', function (req, res) {
//     console.dir(req.query);
//     res.send('home page:' + req.query)
// })

// app.post('/upload',upload.single('logo',function(req,res){
//     res.send({'ret_code':0});
//     }));

app.listen(3000, function () {
    console.log("app is running at 3000 port");
});

