var fs = require('fs');
//线程异步机制
// var readme = fs.readFileSync('readme.txt','utf8',function(err,data){
//     console.log(data);
// });
// // console.log(readme);
// // console.log('finished');


// fs.writeFileSync('writeme.txt',readme);
// var writeme = fs.readFileSync('writeme.txt','utf8');
// console.log(writeme);

// // var waitTill = new Date(new Date().getTime()+3*1000);
// // while (waitTill>new Date()){
// // }
// console.log('finished');

// console.log(fs.readFileSync('writeMe.txt','utf8'));
// fs.unlink("writeme.txt",function(){
//     console.log('delete writeMe.txt file');    
// })

//fs.mkdir('stuff')
//fs.rmdir('stuff')
// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeMe.txt',data,function(){
//             console.log('copy successfully!');
//         })
//     })
// })

// stream流
var myReadStream  = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream  = fs.createWriteStream(__dirname + '/writeMe.txt');
// var data='';
// myReadStream.setEncoding('utf8');
// myReadStream.on('data',function(chunk){
//     //data+=chunk;
//     myWriteStream.write(chunk);
//     // console.log('new chunk received');
//     // console.log(chunk);
// })
// myReadStream.on('end',function(){
//     console.log(data);
// })

//管道
myReadStream.pipe(myWriteStream);