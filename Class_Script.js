console.log("Hello World!, welcome to js Review");

alert("welcome to js Review")
//Variable Declaration
const firstName = "Afam";
const lastName = "Okonkwo";
const val = 34;
let isMalw = true;
const fullName = firstName + " " + lastName;
console.log("My full name is "+fullName);

const arr = [
    "AfamO",
34,
true,
null
]
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

//Type casting/coercion
const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log("Explicit type: "+typeof(explicit));
console.log("implicit type: "+typeof(implicit));


//We can also compare teo values using the comparison operator
const a = 42;
const b = 22;
console.log(a == b);
console.log(a <= b);
let test = (a === '42');
console.log(test);

//logical operators
const A = 42;
const B = 22;
let testA = (A <=42)
let testB = (A ==='42')
console.log(testA && testB);
console.log(testA || testB);
console.log(!testA);

//We can also use ternary operators
let age = 42;
let canDrive = age > 16 ? 'yes' : 'no';
console.log("can i drive? "+canDrive);


let minimumAge = 18;

let myAge = 42;

if (myAge < minimumAge) {
    console.log("You are not eligible to vote");
} else {
    console.log("You are eligible to vote");
}


let quartile = 25
switch (quartile) {
    case 25:
        console.log("You are in the first quartile");
        break;

    case 50:
        console.log("You are in the second quartile");
        break;

    case 75:
        console.log("You are in the third quartile");
        break;

    default:
        console.log("You are in the fourth quartile");
        break;
}


/** Loops
 */
// For loop
// Loop through numbers 0 to 4 and print the index
for( let i = 0; i < 5; i++){
        console.log("My index is "+i)
}
// Declare an array of different data types
const arrr = [
    'AfamO',
    function() { console.log("Welcome to my JS Review") },
    true,
    20
]
// Loop through each element in the array and print its value
for ( let val of arrr) { 
    console.log("My val is "+val);
}

// Loop through each element in the array and print its value using forEach method
arr.forEach((val)=>console.log("My val is "+val))

// Object Literals
const myObj = {
    name: "Afam Okonkwo",
    age: 30,
    isMale: true
}
// Loop through each key in the object and print its key and value
for (let key in myObj)  console.log(`My key is ${key} and value is ${myObj[key]}`)

/**
 * Functions
 */
// functions- by declaration

function addTwoNumbers(a, b) {
    return a + b;
}
// function by expression
const addtwoNumbers = function(a, b) {
    return a + b;
}
console.log(addTwoNumbers(2,3));
console.log(addtwoNumbers(2,4));

/**
 *  ES 6 Reviews: Arrow Functions, Template Literal,  Filter and Map
 */
// arrow functions
const greet = () => console.log("Hello World!")
const logger = (val) => console.log("Logged DATA:: "+val);
const sum = (a, b) => a + b;
logger("ERROR 121-System shut down")
// Template Literals
const name = "Afam Okonkwo";
age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
console.log(`my sum is ${sum(2,3)}`);
greet();
// Declare array of numbers
const nums = [1,2,3,4,5,6,7,8,9];
/**
 * Map helps transform each element in the array and return a new array, 
 * while Filter helps filter elements in the array based on a condition and return a new array.
 */
// Map - Transform each element in the array and return a new array
const squared = nums.map((val) => val*2);
console.log(`Squared===${squared}`);
// Filter - Filter elements in the array based on a condition and return a new array
// I want to filter out the even numbers from the nums array
const evenNums = nums.filter((val) =>val % 2==0);
console.log("Even nums:::"+evenNums)