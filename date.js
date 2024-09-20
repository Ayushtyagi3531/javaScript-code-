let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())


let mydatecreate=new Date('01-13-2024')
console.log(mydatecreate.toLocaleString())

let timeStamp=Date.now()
console.log(timeStamp)
console.log(mydatecreate.getTime())
console.log(timeStamp-mydatecreate.getTime())