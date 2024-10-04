const coding=['js','java','python','c','c++']
coding.forEach((val)=>{
    //console.log(val)

});

const mynum=[1,2,3,4,5,6]
//const val= mynum.filter((num)=>num%2==0)

const val=mynum.filter((num)=>{
    return (num%2==0)
});
//console.log(val)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbook=books.filter((bk)=>{
    if (bk.genre=='History'){
        return bk
    }
  });
  const userbooks=books.filter((bk)=>{
    if (bk.publish<=2000){
        return bk
    }
  })
  //console.log(userbooks)



  // map in javascript
  let a=[1,2,3,4,5,6,7,8,9,10,11]
  //const b=a.map((num)=>num+10)
  //console.log(b)

  const c=a.map((num)=>{
    return num+10
  }).filter((num)=>num%2).map((num)=>{
    return num*10
  })
  //console.log(c)



  //reduce function in javascript

const z=[1,2,3,4,5]
let vlue=z.reduce((acc,curr)=>{
   // console.log(`current value is ${curr} and accumilator value is ${acc}`)
    return acc+curr
},0)
//console.log(vlue)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const total=shoppingCart.reduce((acc,curr)=>{
    return curr.price+acc
},0)
console.log(total)