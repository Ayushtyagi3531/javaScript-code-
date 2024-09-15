//primitive datatype

// 7 Types String , Number , Boolean, null  , undefined   , Symbol ,BigInt

const score=100
console.log(score)

const islogin=true
let user;

const id=Symbol(12)
const anid=Symbol(12)

console.log(id==anid)
// Reference (Non primitive ) Array, Objects  ,Functions

const heroes=['Ayush','Tyagi']
console.log(heroes)
let myobj={
    name:'Ayush',
    surname:'Tyagi'
}
console.log(myobj)

const myfun=function(){
    console.log('Ayush Tyagi')
}
console.log(typeof myfun)
