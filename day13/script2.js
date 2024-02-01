// function file2() { 
//     var file2="file2";
//     console.log(file2);
//  }

//  file2();


// const myPromise = new Promise((resolve,reject)=>{
//     const a=2,b=5;
//     const c=a+b;
//     if(c==4){
//         resolve(`yes! ${a} + ${b} = 4`);
//     }
//     else{
//         reject(`No! ${a} + ${b} != 4`)
//     }
// }) 

// myPromise.then((m)=>{
//     console.log(m);
// }).catch((err)=>{
//     console.log(err);
// })


// const old=[1,2,3,4,5];

// const newArray = [...old,7,8,9];
// console.log(old);
// console.log(newArray);

function x(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    console.log(sum);
}

x();

