/**
 * TEMPORAL DEAD ZONE: The time between a let or a const variable is declared and its initialization.
 * 
 * Eg: in the code below, a is hoisted and allocated memory at the very beginning of execution
 * but only after it is initialized with a value 10 in line 12, does it become accesible
 * 
 * So as long as the execution is between line 1 - 13, a is in a temporal dead zone
 */


// console.log(a);  // [Uncaught ReferenceError: Cannot access 'a' before initialization]
// console.log(c); // [Uncaught ReferenceError: Cannot access 'c' before initialization]
console.log(b);   // undefined
let a = 10;

/**
 * a is still not present in the global exec context after it is initialized,
 * it is still stored in a separate memory space
 */
console.log(a); // 10
var b = 20;
const c = 30;

console.log(d); // [Uncaught ReferenceError: d is not defined]
d = 40;  // if we use this notation, the variable value is neither allocated memory nor is it hoisted

/**
 * Even before execution, 
 * memory is assigned to the var declaration of b and 'b' is attached to the global object
 * 
 * Similarly, the let declaration of 'a' and the const declaration of 'c' are also allocated memory
 * and are stored in a different memory space apart from the Global memory
 * The program cannot access the let and const declared variables, before we put in some value in them.
 * 
 * let and const are hoisted as well, but they are not present in the global memory untill
 * they are initialized
 */