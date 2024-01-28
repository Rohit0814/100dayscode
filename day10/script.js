// var arr = [1,2,3,4,5,6,7];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// function print(n){
//     console.log(n);
// }

// arr.forEach(print);

// function factorial(n){
//     var fact=1;
//     for(var i=1;i<=n;i++){
//         fact=fact*i;
//     }
//     return fact;
// }

// function ncr(n,r,factorial){
//     return factorial(n)/(factorial(r)*factorial(n-r));
// }

// console.log(ncr(2,4,factorial));


// for(var i in arr){
//     console.log(arr[i]);
// }

var stu = {
    name : 'abc',
    rollno : 122,
    marks : 70,
    address:{
        state: 'jharkhand',
        city:'ranchi',
        pin : 834001
    }
};

// console.log(stu.name);
// for(var prop in stu){
//     console.log(prop, stu[prop]);
// }

// var keys = Object.keys(stu);
var keys = Object.getOwnPropertyNames(stu);




