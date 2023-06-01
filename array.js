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

/* And there is toReversed method is there is exactly doing the same way how the toSorted method is doing the only difference is that the toSorted method is sorting the array in another hand the toReversed method is reversed the array  */

let newFruits3 = fruits.toReversed();
console.log("revered fruits array",newFruits3)

/* the is also reverse method but it actually reversed the original array insted of create new reversed array using existing array  */

// 3) splice method

let flowers = ["rose","lotus","sunflower"]
flowers.splice(0,1,"newRose")
/* The splice method is splicing the array the first argument is what index of the array that you can start splicing in another words remove and the second argument is how many elements are you going to remove regarding to the starting element that you mentioned the first argument in the splice method and the third arguemnt is new element that you can add in that array. The splice method is splicing the original array if you want to create new array with that spliced you can use the toSpliced method it creates the new spliced array and the origianl array remain same */

console.log(flowers)

/* 
But if you want create new array using splice method you can use the toSpliced method  */

let newFlowers = flowers.toSpliced(0,2,"new Rose");
console.log("newFlowers",newFlowers)