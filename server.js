//callback function structure
// function callback(){
//     console.log('now adding is successfully completed');
    
// }

// const add= function(a,b,prince){
//     var result = a+b;
//     console.log("result:"+result);//main function work complete
//     prince();
// }

// add(3,4,function(){
//     console.log("add completed");
    
// });
// add(3,4,()=>console.log("add completed"));








//fs and os use 
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi '+user.username+'!\n',()=>{
//     console.log('file is created');
    
// });





//from notes.js put into the server.js and use it
const notes = require('./notes.js')

console.log("server file is available");

var age = notes.age;
var result = notes.addNumber(age+18,10);

console.log(age);
console.log('result is now:'+result);


//lodash
var _ = require('lodash');
var data = ["person","person",1,2,1,2,'name','age','2'];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString(true));




