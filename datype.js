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



//for primitive datatype stack is used for memory storage

//it store the copy the variable and also it change the change the copy value not change the actual value for example
let a=12
let b=a
b=10
console.log(a)
console.log(b)


//for non primitive datatype the heap is used for the memory storage and takes the refernce of the actual value 

let my={
    name:'Ayush Tyagi'
}
let my2=my

my2.value='Tyagi'
console.log(my)
console.log(my2)