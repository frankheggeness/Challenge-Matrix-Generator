'use strict'
function matrixGenerator(rows, columns) {
  // do work here
  let outputArray = [];
  function randomNumber() {
    return Math.floor(Math.random() * 100)
  }
  // sort function below
  function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
      var placeOnArray = array[i];
      var j = i - 1;

      while (j >= 0 && array[j] > placeOnArray) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = placeOnArray;
    }
    return array;
  }

  // sort function for first index

  function selectionSort(array) {
    let sorted = array;

    for (let i = 0; i < sorted.length; i++) {
      let smallest = sorted[i][0];
      let smallestArray = sorted[i]
      for (let y = i + 1; y < sorted.length; y++) {
        if (smallest > sorted[y][0]) {
          let newSmallest = sorted[y];
          sorted[y] = smallestArray
          sorted[i] = newSmallest
        }
      }
      // sorted[i] = smallest
    }
    return sorted;
  }

  // create array below
  for (let y = 0; y < columns; y++) {
    let innerArray = [];
    for (let x = 0; x < rows; x++) {
      let random = randomNumber()
      innerArray.push(random);
    }
    insertionSort(innerArray)
    outputArray.push(innerArray)
  }

  console.log(outputArray)
  selectionSort(outputArray)
  return outputArray;
}

module.exports = matrixGenerator;

console.log(matrixGenerator(4, 4))


// ## Matrix Generator

// Write an function that takes 2 inputs:

// 1. Number of rows
// 2. Number of columns

// Your function should do the following:

// 1. Generate a multi-dimensional array with the specified number of rows and columns in the array populated with random numbers between 1 and 100.
// 2. Sorts the array with natural numeric sorting. You will need to use/write/find a sort function as your argument to the JavaScript `Array.sort()` method for numbers to be sorted as numeric values.
// 3. Returns the sorted multi-dimensional array

// Ex.
// `generator(3, 3)`

// Output:
// [[1, 2 ,3], [4,5,6], [7,8,9]]


// ### Stretch Goal
// Sort the inner arrays so that the first index is in order.

// Example (before stretch):  
// [[2,3,4], [1,5,6], [7,8,9]]

// Output (after stretch):  
// [[1,5,6], [2,3,4], [7,8,9]]