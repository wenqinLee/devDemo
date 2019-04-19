### mongoose 学习笔记

### 安装：
npm install mongoose --save

var mongoosr = require('mongoose');

### connect:创建连接
* 用于创建数据库连接
* mongoose.connect(url(s),[options],[callback] );
    - ulr :'mongodb://用户名:密码@127.0.0.1:27017/数据库名称'
    - 连接多个数据库：mongoose.connect('url01,url02,...',{mongos:true},function(err){//回调函数，连接后的处理
        if(err){
            console.log(err);
        }else{
            console.log("connect successful");
        }
    })
### disconnect():断开连接
* mongoose.connect('db_url',function(err){
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});
setTimeout(function(){
    mongoose.disconnect(function(){
        console.log("断开连接");
    });
},2000);

### Schema：
主要是用于定义MongoDB中collection里document的结构，可以理解为mongoose对表结构的定义，每个Schema会映射到mongodb中的一个collection，schema不具备操作数据库的能力。

* 定义Schema：指定字段名和类型即可
  - String  字符串
  - Number  数字
  - Date    日期
  - Buffer  二进制
  - Boolean 布尔值
  - ObjectId    对象ID
  - Array   数组
* 通过mongoose.Schema开调用Schema，然后使用new方法来创建schema
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema ;
    var mySchema = mongoose.Schema({
        title:String,
        author:String,
        body:String,
        comments:[{body:String,date:Date}],
        date:{type:Date,default:Date.now},
        hidden:Boolean,
        meta:{
            votes:Number,
            fav:Number
        }
    });

### Model
* Model是由Schema编译而成的遐想构造器，具有抽象属性和行为。Model的每一个实例就是一个document，document可以保存到数据库和数据库进行操作，简单说就是model是有schema生成的模型，可以对数据库的操作。
  - 使用model()方法，将Schema编译为Model。model方法的第一个参数是model名称。
  - mongoose.model(`文档名称`,Schema)；
  
* create()
    - 使用save()方法，需要实例化为文档，再使用save方法保存文档。而create()方法，则直接在模型Model上操作，并且可以同时新增多个文档。
    - model.create(doc(s),[callback])
* 文档查询
  - find()查询所有数据
    - Model.find()： dbname.collection.find()
  - findById()通过id来查询
    - Model.findById():temp.findById(aIDArr[0].exec(function(err,doc){
    - console.log(doc);
    - }))
  - findOne()返回查找到的所有实例的第一个
    - model.findOne():temp.findOne({age:{$gt:20}},function(err,doc){
    - console.log(doc);
    - }) 

  