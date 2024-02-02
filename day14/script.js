// class keyword

class person{
    constructor(uname,uage){
        this.name=uname;
        this.age=uage;
    }
    details(){
        console.log(this.name,this.age);
    }
}

const obj= new person('raja',12);
obj.details();

let x={
    name:'raja',
    address:'ranchi'
}

console.log(x.name);

// Map()

const arr=[1,2,3,4,5,6,7];
const arr2=arr.map(x=>x*2);
console.log(arr2);
