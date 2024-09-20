const arr=[1,2,3,4,4,5,6,7]
console.log(arr.length)
console.log(arr[0])


//Array methods
//arr.push(8)
arr.pop()
//console.log(arr)

console.log(arr.lastIndexOf(4))

const newarr=arr.join()
console.log(typeof newarr)

console.log(arr.slice(0,3))
console.log(arr)
console.log(arr.splice(0,3))
console.log(arr)

const name=['Ayush','Anchal','Piyush','Deepak']
const sn=['Kumar','Singh','Tyagi']

//value=name.concat(sn)
//console.log(value)
//console.log(name)

const myname=[...name,...sn]
console.log(myname)


const myvalue=[1,2,3,4,[4,3,3,[65,4,4]]]
const another =myvalue.flat(Infinity)
console.log(another)



console.log(Array.isArray('Ayush'))
console.log( (Array.from('Ayush')))
console.log(Array.from({name:'Ayush'}))//for interview intersting


const score=100
const score1=200
console.log(Array.of(score,score1))