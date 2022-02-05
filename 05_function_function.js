// High order functions
// Receive functions as arguments and returns other functions

// Write a function raise_function that
// takes a function, and makes it executable
// with two invocations, such as:

console.log(raise_function(add)(3)(4)); // 7

function add(first, second){
  return first + second
}

