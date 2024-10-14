//first promise
const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //console.log('welcome to my website')
        resolve()
    },1000)
    
});

promiseOne.then(()=>{
    //console.log('Promise consumed.')
})


//second promise
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //console.log('Async task2')
        resolve()
    },1000)
    
}).then(()=>{
    //console.log('task 2 is consumed')
});


//third promise
const thirdpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:'Ayush Tyagi',email:'ayush@gmail.com'})
    },1000)
});

thirdpromise.then((user)=>{
    //console.log(user)
})


//fourth promise
const fourthpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if (!error){
            resolve({name:'Ayush Tyagi',email:'ayush@gmail.com'})
        }else{
            reject('Somthing went wrong.')
        }
        
    },1000)
});

fourthpromise.then((user)=>{
    console.log(user)
    return user.name
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('Either resolve or reject but it will execute.')
})


//five promise this is use for db connections
const fivepromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        //if it is true then it will not work.
        if (!error){
            resolve({name:'javascript',password:'123'})
        }else{
            reject('Error: js went wrong.')
        }
        
    },1000)
});

async function my(){
    try{
        const response=await fivepromise
    //console.log(response)
    }
    catch(error){
        //console.log(error)
    }
    
}
my()



async function myurl(){
    try{
        const response=await fetch('https://randomuser.me/api/')
        const data=await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
//myurl()


fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

