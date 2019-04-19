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

db_url = 'mongodb://localhost:27017/mongoosesample';

//mongoose.connect(db_url);

mongoose.connection.on('connected',function(){
    console.log('mongoose connection open to ' + db_url);
});

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error '+ err);
});

mongoose.connection.on('disconnected',function(){
    console.log('mongoose connection disconnected');
    
});

//disconnect()

mongoose.connect('db_url',function(err){
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
        var schema = new mongoose.Schema({ num:Number, name: String, size: String});
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ size: 'small' });
        doc1.save(function(err,doc){
            console.log(doc);
        });
        //console.log(doc1.size);//'small'
    }
});
setTimeout(function(){
    mongoose.disconnect(function(){
        console.log("断开连接");
    });
},3000);