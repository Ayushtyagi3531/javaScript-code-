const score =499
console.log(score)

const balance=new Number(100)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const value=123.554
console.log(value.toPrecision(3))


const number=1000000
console.log(number.toLocaleString('en-In'))



//math module
console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(2.49))
console.log(Math.floor(2.79))
console.log(Math.ceil(2.89))

console.log(Math.floor((Math.random()*10)+1))



const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))
