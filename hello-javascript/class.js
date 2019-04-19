//创建对象 
var people1 = new Object();
people1.name = '对象1';
people1.gender = 'man';
people1.say = function(){
     return this.name + "的性别是：" + this.gender;
}
 console.log(people1.say());

//工厂模式
function createPeople(name,gender){
    var people = new Object();
    people.name = name;
    people.gender = gender;
    people.say = function(){
        console.log(this.name + "的性别是：" +this.gender);
    }
    return people;//作为函数，必须要有返回值；
}
var people02 = createPeople('工厂01','男');
people02.say();

//构造函数模式,构造函数不需要使用return语句返回对象，它的返回时自动完成的
function People(name,gender){
    this.name = name;
    this.gender = gender;
    this.say = function(){
        console.log(this.name + '的性别是：'+this.gender);
    }
}
var lisa =new  People('构造01','女');
lisa.say();

//原型模式:每一个构造函数都有一个prototype属性，被每个实例继承，prototype的属性方法由实例共享。
function People_pro(){//原型对象的构造方法
}
People_pro.prototype.name = '原型模式';
People_pro.prototype.gender ='boy';
People_pro.prototype.say = function(){
    console.log(this.name +'的性别是：' + this.gender);
}
var liming = new People_pro();
var liu = new People_pro();
liming.say();

//构造函数和原型组合模式：用构造函数模式定义属性，用原型模式定义方法
function People_com(name,gender){
    constructor :People_com,
    this.name = name;
    this.gender = gender;
}
People_com.prototype ={
    say:function(){console.log(this.name +'的性别是：' + this.gender);}
}
var com1 = new People_com('组合01','男');
com1.say();
var com2 = new People_com('组合02','女');
com2.say();






