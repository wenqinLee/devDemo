var staff = require('./counter');
var events = require('events');
var util = require('util');

//events
var Person = function(name){
    this.name =name;
}

util.inherits(Person,events.EventEmitter);//继承events.EventEmitter类

var xiaoming = new Person('xiaoming');
var lili = new Person('lili');
var luck = new Person('luck');

var person = [xiaoming,lili,luck];

person.forEach(function(person){
    person.on('speak',function(message){
        console.log(person.name+' said:'+message);
    });
});

xiaoming.emit('speak','hi');
luck.emit('speak','i want money');
lili.emit('speak','i am lili');
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(message){
//     console.log(message);
// });

// myEmitter.emit('someEvent','the event was emitted');


// console.log(staff.sayBye('liwenqin'));
// console.log(staff.count(['react','bootstrap','wepy']));
// console.log('PI is about :'+staff.pi);




