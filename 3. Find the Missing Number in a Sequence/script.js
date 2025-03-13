function findMissingNumber(arr){
  const n = arr.length+1; //Original length of an array
  const expectedSum = (n*(n+1))/2; //Formula for the first n natural numbers
  const actualSum = arr.reduce((sum, num)=>sum+num, 0); //Sum of array elements

  return (expectedSum - actualSum); //It will return the missing number in an array
}

// Given arrays
const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1))
console.log(findMissingNumber(arr2))