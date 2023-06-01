// new array methods 

// 1) With method 
let people = ["abhi","harry","jeff"] 

/* if you want to create new array with existing array you can use the spread operator like this but is it less efficient because when you do like this [...<yourArray>] it's loope the entire array and assigned it to new variable that result into new array  */

let peopleCopy = [...people];
console.log(peopleCopy)

/* But there is new method to create new array with existing array and more efficient using with method  */

/* In this example using with method we are creating new array and with creating we are also changing 2 index in that newely created array with value of the second argument of the with argument  */
let peopleCopy2 = people.with(2,"jeff2")

// 2) Sort method 

let fruits = ["apple","orange","grapes","pineapple"]

/* If you wanted to sort the array and store into the new array like created new array using old array but sorted,you can also use the spread operator with array like this */

let newFruits = [...fruits].sort();
console.log("newFruits",newFruits)

// But spread operator is less efficient, cause firstly it's loop through the entire array to make new array and there is another method that is far more efficient e.g. toSorted()

let newFruits2 = fruits.toSorted();
console.log("newFruits2",newFruits2)

/* You can apply the toSorted methos on the exisint array and it returns the new sorted array that contains those array elements that you have been applied the toSorted method on it and you can assign to any variable  */