/*
The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

For example, the following code would check if every element in the numbers array is less than 10:

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});

*/

// every method inside the checkPositive function checks if every element in arr is positive.

function checkPositive(arr) {
  return arr.every(function(currentValue){
    return currentValue > 0 ;
  });  
}

console.log(checkPositive([1, 2, 3, -4, 5])); // false
console.log(checkPositive([1, 2, 3, 4, 5])); // true
