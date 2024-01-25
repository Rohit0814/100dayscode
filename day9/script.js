// function host(){
//     var i=0;
//     console.log(i);
//     i=0;
// }
// host();

//function variable scope.....

// var j=0;
// function x(){
//     var i=0;
// }

function outer(){
    var varOuter=10;
    function inner(){
        console.log(varOuter);
    }
    console.log('inner function '+inner());
}

console.log('Outer function '+outer());