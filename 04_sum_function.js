// Write a function add_function
// that add from two invocations or calls,
// such that:

console.log(add_function(3)(4)); // 7
 
function add_function(first){
  return function(second){
    return first + second;
  };
}