var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
// var fs = require('fs');
// var jsonparser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:true});

var multer = require('multer')
//var upload = multer({dest:'uploads/'})
var app = express();

app.use(express.static('public'));

app.use('/middleware',function(req,res,next){
    console.log("first middleware");
    next();
    console.log('first middleware after');
})

// 设定views变量，意为视图存放的目录
app.set('views', __dirname);
app.set('view engine','html');
app.engine('.html',require('ejs').__express)
//有了静态目录文件，我们还得在启动文件里告诉它这个静态文件路径，需要指定一下
app.use(express.static(require('path').join(__dirname,'public')))


app.get('/', function(req, res) {
    res.render('index');
});
app.get('/login',function(req,res){
    res.render('login')
})
app.get('/home',function(req,res){
    res.render('home')
})
app.get('/form',function(req,res){
    res.render('form')
})
app.get('/api',function(req,res){
    res.render('api')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended :true }))
//app.use(multer())

app.post('/login',function(req,res){
    var user={
        username:'admin',
        password:'admin'
    }
 if(req.body.username==user.username&&req.body.password==user.password)      {
      res.send(200);
    //   res.redirect('login')
   }else{
      res.send( 404 );
   }
});
// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')
// var api = require('./routes/api')


//路由中间件
// app.use('/',indexRouter);
// app.use('/users',usersRouter);
// app.use('/api',api)

//middleware 介于请求req和响应res之间的操作




// //指定ejs为指定模板引擎ejs
//app.set('view engine','ejs');


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

