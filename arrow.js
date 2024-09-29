const user={
    username:'Ayush Tyagi',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to our website.`)
    }
}
//user.welcomeMessage()
//user.username='Anchal'
//user.welcomeMessage()

function one(){
    let user=14
    console.log(user)
    //console.log(this.user) this keyword  is giving the undefined value 
}
//one()

//explicit return 
const two=(num)=>{
    const user=14
    return user+num
}
//two(4);

//implicit return 
const three=(num1,num2)=>(num1+num2)
//console.log(three(3,4))




console.log('Piyuswh')

console.log('Script started');
//(function() {
    //console.log('Ayush');
//})();
((Name)=>{
    console.log(`${Name} , welcome to our website.`);
}
)('Ayush');

console.log('Script ended');


