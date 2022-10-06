// 1. .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
 
  const arr1 = [2, 42, 99, 882];
  const arr2 = [1, 2, 3, 4]
  
  const timesTwo = (element) => {
    let newElement = element*2
    return newElement
  }
  
  const mapFunction = (x, y) => {
    let newArray = []
    for (let i = 0; i < y.length; i++) {
      newArray.push(x(y[i]))
    }
    console.log(newArray)
    return newArray
  }
  
  const foodArray = [{'pizza': 10}, {'hotdog': 3.50},{'salad': 6.25}, {'candy': 1.75}]
  
   mapFunction(timesTwo, arr1)

  // 2. .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

  const reduceFunction = (array) => {
    let ans = 0
    for (let i = 0; i < array.length; i++) {
      ans = ans+array[i]
    }
    console.log(ans)
  }

reduceFunction(arr1)
reduceFunction(arr2)

// 3. .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function

const arr3 = [5, 6, 7, 8]
const extraNewArray = []

const isGreater = (x) => {
  if (x > 6) {
    return true
  } else {
    return false
  }
}

const filterFunction = (x, y) => {
  for (let i = 0; i < y.length; i++) {
    if (x(y[i]) == true) {
      extraNewArray.push(y[i]);      
    }
    }
    console.log(extraNewArray)
}

filterFunction(isGreater, arr3)
