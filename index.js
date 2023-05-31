// ****
let obj = {
    name:"John",
    age:28,
}

// the spread syntax, it spread the array or object. To array you can use this [...<nameOfYourArray>].
let newObj = {...obj}
console.log(newObj)


// ***** 
// How to make another object or array with with exact first one 
let arr = [1,2,3,4]

/* You can assign the first array to the another varaible but it reffer to same memory location means if you change the assigned array it reflects with the first one also because the arr2 in this example has pointed the same memory location that the arr has been pointed. */
let arr2 = arr;

arr[2] = "two";
console.log(arr)

// You can also deep copy the first object using the json methods
let anotherObject = JSON.parse(JSON.stringify(obj))

/* If you use assign operator then it reffer to that object and result into if you change one of then both changes  */

// The json methods for deep copy was good but not efficient there is another and new till now better way to deep copy your object or array

let anotherNewObject = structuredClone(obj)
console.log("anotherNewObject",anotherNewObject)

/* Same with array it created deep copy of the first passed object or array in the structuredClone function  and when you modified the assigned object or array variable the first object or array does affect and it is a efficient way to deep clone array or objects*/

// Array example
let arr3 = [2,4,4]
let arr4 = structuredClone(arr3)
arr4[0] = "first"
console.log(arr3)
console.log(arr4)
