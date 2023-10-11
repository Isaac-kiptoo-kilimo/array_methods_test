// Give me the sum of the prices (try chaining methods) [{price: 10.99}, {price: 5.99}, {price: 29.99}]

'use strict'

let prices=[
    {price: 10.99},
     {price: 5.99}, 
     {price: 29.99}] 

     const initialValue=0;
let sum_prices=prices.map(item=>item.price).reduce((acc,cur)=>acc+cur,initialValue)


// reduce() takes two arguments....callback function and the initial value

console.log(sum_prices)


