// write a function that takes a function like add, sub, mul AND
// and argument and returns a function that take a second argument.
// such as:

var add3 = curry(add,3)
console.log(add3(4)); // 7

function add(first, second){
  return first + second
}

