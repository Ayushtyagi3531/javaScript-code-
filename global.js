function one(){
   let username='Ayush';

   function two(){
    let exam='Yes';
    console.log(username)
   }
   //console.log(exam) it will give error because we are accessing the local variable
   two()
}
one()



function addone(num){
    return 1+num
}
console.log(addone(6))

 const addtwo=function(num){
    return 2+num
 }
console.log(addtwo(4))