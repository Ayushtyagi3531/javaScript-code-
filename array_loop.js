// for of loop 

const arr=[1,2,3,4,5]
const st='Ayush'
for(const num of arr){
    //console.log(num)
}

//map in javascript
const map=new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')
//console.log(map)

for (const [key ,value] of map){
    //console.log(key,': ',value)
}


//object with for of loop object is not iterable with for of loop
const myobj={
    'name':'Ayush Tyagi',
    'age':19
}
//for (const key of myobj){
  //  console.log(key)
//}

// we will use for in loop  == it loop gives only the key values
for (const key in myobj){
    //console.log(key,': ',myobj[key])
}

//map.forEach((val) => {
   // console.log(val)
//});

map.forEach(function (val){
    //console.log(val)
});

function greet(item){
    //console.log(item)
}
map.forEach(greet)

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const my=[
    {
        name:'sss',
        age:23
    },
    {
        name:'swews',
        age:24
    },
]
my.forEach((item)=>{
    console.log(item.name,item.age)
})