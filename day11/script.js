// var i=0;
// function sayHello(){
//         if(i==10){
//             clearInterval(id);
//             return;
//         }
//         console.log(i);
//         i++;
// }

// sayHello();

// setTimeout(sayHello,2000);     execute only once

// var  id=setInterval(sayHello,1000);

// var heading=document.getElementsByTagName('h1');
// console.log(heading);
// heading[0].innerHTML = 'changed';


// var outerDiv=document.getElementById('outerdiv');
// console.log(outerDiv);
// outerDiv.style.backgroundColor = 'red';
// outerDiv.style.color = 'white';


// var secondDiv = document.getElementsByClassName('secondDiv');
// console.log(secondDiv);
// secondDiv[0].style.backgroundColor='blue';


// var haeding2=document.querySelector('#outerdiv h1');
// console.log(haeding2);
// haeding2.style.color="cyan";

// var heading3 = document.querySelectorAll('#outerdiv h1');
// console.log(heading3);

// heading3[1].style.backgroundColor='blue'

var changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click',function(){
    if(document.body.style.backgroundColor == 'blue')
        document.body.style.backgroundColor = 'white';
    else
        document.body.style.backgroundColor = 'blue';
});

var pro1 = 'mobile';
var pro2="laptop";
var pro3="earphone";
var secondDiv = document.getElementsByClassName('secondDiv');
secondDiv[0].innerHTML=`
<ul>
</ul>
`;