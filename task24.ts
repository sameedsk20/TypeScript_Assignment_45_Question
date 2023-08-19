// Test for EQUALITY
let language = "JavaScript";
console.log("Is the language equal to 'JavaScript'? I predict True.");
console.log(language === "JavaScript"); // True

// Test for INEQUALITY
console.log("Is the language not equal to 'Python'? I predict True.");
console.log(language !== "Python"); // True

// Tests using the lower case function
console.log("Is the language equal to 'javascript' (case-insensitive)? I predict True.");
console.log(language.toLowerCase() === "javascript"); // True

let language1 = "JavaScript";
let language2 = "javascript";
console.log("Are both language variables equal (case-insensitive)? I predict True.");
console.log(language1.toLowerCase() === language2.toLowerCase()); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 30;
console.log("Is the age equal to 30? I predict True.");
console.log(age === 30); // True

console.log("Is the age not equal to 25? I predict True.");
console.log(age !== 25); // True

console.log("Is the age greater than 25? I predict True.");
console.log(age > 25); // True

console.log("Is the age less than 40? I predict True.");
console.log(age < 40); // True

console.log("Is the age greater than or equal to 30? I predict True.");
console.log(age >= 30); // True

console.log("Is the age less than or equal to 35? I predict True.");
console.log(age <= 35); // True

console.log("Is the age between 25 and 40 (inclusive)? I predict True.");
console.log(age >= 25 && age <= 40); // True

// Tests using "and" and "or" operators
let isStudent = true;
let hasJob = false;
console.log("Is the person either a student or has a job? I predict False.");
console.log(isStudent || hasJob); // True

console.log("Is the person both a student and has a job? I predict False.");
console.log(isStudent && hasJob); // False

// Test whether an item is in a array
const fruits = ["apple", "orange", "banana", "grape"];
const itemToFind = "banana";

console.log(`Is '${itemToFind}' in the array? I predict True.`);
console.log(fruits.indexOf(itemToFind) !== -1); // True

const itemToFind2 = "peach";

console.log(`Is '${itemToFind2}' not in the array? I predict True.`);
console.log(fruits.indexOf(itemToFind2) === -1); // True