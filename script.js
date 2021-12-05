
var num=5;
let pi=3.14;
const name = 'arijit';

let num1=51;
let num2=65;
let num3=69;
let num4=89;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num3);
console.log(num1/num4);

const num5=.025;
console.log(typeof num1);

/*let n=100;
let count=1;
for(let i=0; i<n; i++){
  
    if(i%3==0){
        console.log(count);
        count++;
        document.write(i+" ");
    }
    
}


let r=8;
switch(s){
    case r:
        document.write(r);
        break;
    case s:
        document.write(s);
        break;
    default:
        document.write(null);
        break;    
}*/


let person={
    name: "arijit",
    age: 22,
    hobby: "art",
};

console.log(person.name);
console.log(person.age);

let arr=[1,2,5,6,3,9,8];

function arrCalling(num){
    //console.log("The "+num);
    return num;
}

console.log(arrCalling(arr[5]));



let doc = document;
doc = document.images;
console.log(doc);
document.write(doc);