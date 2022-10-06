// 1. .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

const numbers = [2, 42, 99, 882];
const newArr = numbers.map(timesTwo)

function timesTwo(num) {
  return num * 2;
}

console.log(newArr)

// (Multiplies all the values in an array by 2!)


// 2. .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.



// 3. .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.