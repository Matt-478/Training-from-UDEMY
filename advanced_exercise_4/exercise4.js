//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const addTwo = (firstParam, secondParam) => firstParam + secondParam

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// returns 13
// addToTen => addTo => 10 + 3

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31 ... i think

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//16

//What are the two elements of a pure function?
// No side effects - doesn't affect the larger scope; only depends on it's input elements no other data or state that may change during a program's execution
// deterministic - always produces the same results given the same inputs