// IIFE

// (function file1(){
//     let file1="Files";
//     console.log(file1);
// })();


// var i=10;
// function outer(){
//     var j=20;
//     console.log(j);
//     var inner = function(){
//         var k=30;
//         console.log(j,k);
//     }
//     console.log(j);
//     return inner;
// }

// var inner = outer();
// inner();

// var blueBtn=document.querySelector('#bluebtn');
// var greenBtn = document.getElementById('green');

// function clickHandler(color){
//     // document.body.style.backgroundColor=`${color}`;
//     return function(){
//         document.body.style.backgroundColor=`${color}`;
//     }
// }

// blueBtn.addEventListener('click',clickHandler('blue'));
// greenBtn.addEventListener('click',clickHandler('green'));


// function sum(a,b){
//     return a+b;
// };


// var sum=(x,y) => x+y;

// var x=sum(6,7);
// console.log(x);




// blueBtn.addEventListener('click',function(){
//     document.body.style.backgroundColor='blue';
// });

// greenBtn.addEventListener('click',function(){
//     document.body.style.backgroundColor='green';
// });


// var stu={
//     name:'raja',
//     class:"10th"
// }
// console.log(stu);


// let const, Arrow function , class keyword, promise,rest & spread,export & import, map,


// console.log(x);
// const x="abc";

// let name=()=>{
//     console.log('welcome');
// };

// console.log(name());

// const person={
//     test(){
//         let self=this;
//         setTimeout(()=>{
//             console.log(this);
//         },1000);
//     }
// }

// person.test();

// let name="raja";

// document.getElementById("heading").innerHTML = `<ul>
//                                                 <li>Home</li>
//                                                 <li>About</li>
//                                                 </ul>`;
// // document.getElementById("heading").innerHTML = "<ul><li>Home</li><li>About</li></ul>";

var details ={
    name:'Satya',
    contact:'7236726872',
    email:'xyz.gmail.com'
}

// var name=details.name;
// var contact=details.contact;
// var email=details.email;

// let x= [1,2,3,4,5];

// let [a,b,c,d,e] =x;
// console.log(a);

// let {name,contact,email} = details;
// console.log(name);

// console.log(contact);

// console.log(email);

// console.log(details);
// let a=parseInt(prompt("Enter First Number"));
// let b=parseInt(prompt("Enter Second Number"));

// c=a+b;
// document.getElementById("heading").innerHTML =c;




