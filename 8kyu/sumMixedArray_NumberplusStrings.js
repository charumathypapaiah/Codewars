/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//Solution

function sumMix(x) {
  let newX = x.map(Number);
  let sum = 0;
  for (let i = 0; i < newX.length; i++) {
    sum += newX[i];
  }
  return sum;
}
