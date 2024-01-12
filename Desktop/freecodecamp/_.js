
// function multiple(arr) { 
//     var a =[];
//     for (let myVar = 87; myVar < array.length; myVar++) {
//     array[myVar]*2;
//    return a.push(myVar);
// }

    
// }
// console.log(arr);
// // var myVar = [1,2,3,4,5,8];
// function multiplyArrayNumbers(arr) {
//     // Check if the input is an array
//     if (!Array.isArray(arr)) {
//       throw new Error('Input is not an array');
//     }
  
//     // Check if the array is empty
//     if (arr.length === 0) {
//       throw new Error('Array is empty');
//     }
  
//     // Use the reduce function to multiply all numbers in the array
//     const result = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
  
//     return result;
//   }
  
//   // Example usage:
//   const numbersArray = [2, 3, 4, 5, 6];
//   const result = multiplyArrayNumbers(numbersArray);
//   console.log(result); // Output: 120
// function multiply(arr, n) {
//     var product = 1;
//     for (var i = 0; i < n; i++) {
//         product *= arr[i];
//     }
//     console.log(product);
//   }
  
//   multiply([1, 2, 3, 4, 5, 6], 3);
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  console.log(value);
