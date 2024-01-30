// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().


let books = ["bangla", "english", "math", "islamic history"];
let numbers = [20, 21, 52, 451, 25, 254, 124, 214, 214, 214, 145, 14, 151, 2214, 15, 1,];
let checkBook = books.concat(numbers);
console.log(checkBook);

// output: ['bangla', 'english', 'math', 'islamic history', 20, 21, 52, 451, 25, 254, 124, 214, 214, 214, 145, 14, 151, 2214, 15, 1]


// array join.
// let books = ["bangla", "english", "math", "islamic history"];
// console.log(books);
let kiss = ["bangla", "english", "math", "islamic history"];
console.log(kiss.join()); 
// output: bangla,english,math,islamic history
