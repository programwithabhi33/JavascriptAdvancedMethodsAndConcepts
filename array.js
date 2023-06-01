// new array methods 

// 1) With method 
let people = ["abhi","harry","jeff"] 

/* if you want to create new array with existing array you can use the spread operator like this but is it less efficient because when you do like this [...<yourArray>] it's loope the entire array and assigned it to new variable that result into new array  */

let peopleCopy = [...people];
console.log(peopleCopy)

/* But there is new method to create new array with existing array and more efficient using with method  */

/* In this example using with method we are creating new array and with creating we are also changing 2 index in that newely created array with value of the second argument of the with argument  */
let peopleCopy2 = people.with(2,"jeff2")
