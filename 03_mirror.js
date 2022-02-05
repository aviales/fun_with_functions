// Write a function mirror
// that takes an argument and
// returns a FUNCTION that returns
// the argument, such as:

var four = mirror(4)

console.log(four()); // 4 

function mirror(x){
  return function(){
    return x;
  };
}