const user={
    name:'Ayush',
    email:'ayushkumar2004gmail.com',
    phone:8630436597,
    islogin:true,
    study:['Sunday','Monday']
}
//console.log(user)
//console.log(user.name)
//console.log(user['name'])
//console.log(user['study'][0])

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
//console.log( user1)
//Object.freeze(user1) means you can not change any value of the object
//user1['email']='AYushjjj' it will not work.

user1.greetings=function(){
    console.log('Good morning everyone!')
}

user1.greetingstwo=function(){
    console.log(`Good morning everyone! ${this.name}`)
}

//console.log(user1.greetingstwo())

//singleton object
const tinder=new Object()

//multiton object
//const tinderuser={}
tinder.id='Ayush123'
tinder.name='Ayush Tyagi'
tinder.age=20
//console.log(tinder)

const anotheruser={
    email:'Ayush2-00s@gmail.com',
    full_name:{
        f_name:'Ayush',
        m_name:'',
        l_name:'Kumar'
    },

}
//for combining objects into a single object
//const obj3=Object.assign(anotheruser,tinder)
//const obj3=Object.assign({},anotheruser,tinder)
const obj3={...anotheruser,...tinder}
//console.log(obj3)

//for accessing the keys 
console.log(Object.keys(tinder))

//for accessing the values
console.log(Object.values(tinder))

//for confirming that the value exist in the object or not 

console.log(Object.hasOwnProperty('name'))
