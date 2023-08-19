let vehicle = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(vehicle == 'subaru'); // True

// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(vehicle == 'honda'); // False

// Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(vehicle != 'toyota'); // True

// Test 4
console.log("Is car != 'subaru'? I predict False.");
console.log(vehicle != 'subaru'); // False

// Test 5
console.log("Is car === 'Subaru'? I predict False.");
console.log(vehicle === 'Subaru'); // False (strict equality check - case-sensitive)

// Test 6
console.log("Is car !== 'subaru'? I predict False.");
console.log(vehicle !== 'subaru'); // False (strict inequality check)

// Test 7
let years = 25;
console.log("Is age > 18? I predict True.");
console.log(years > 18); // True

// Test 8
console.log("Is age < 20? I predict False.");
console.log(years < 20); // False

// Test 9
console.log("Is age between 20 and 30 (inclusive)? I predict True.");
console.log(years >= 20 && years <= 30); // True

// Test 10
console.log("Is age between 18 and 21, or between 25 and 30? I predict True.");
console.log((years >= 18 && years <= 21) || (years >= 25 && years <= 30)); // True