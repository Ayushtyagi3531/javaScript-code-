const user={
    name:'Ayush',
    email:'ayushkumar2004gmail.com',
    phone:8630436597,
    islogin:true,
    study:['Sunday','Monday']
}
console.log(user)
//console.log(user.name)
console.log(user['name'])
console.log(user['study'][0])

// for creating a symbol variable
const myage=Symbol('key1')
const user1={
    name:'Ayush',
    [myage]:20,
    email:'ayushkumar2004gmail.com',
    phone:8630436597,
    islogin:true,
    study:['Sunday','Monday']
}
console.log( user1)
//Object.freeze(user1) means you can not change any value of the object
//user1['email']='AYushjjj' it will not work.

user1.greetings=function(){
    console.log('Good morning everyone!')
}

user1.greetingstwo=function(){
    console.log(`Good morning everyone! ${this.name}`)
}

console.log(user1.greetingstwo())