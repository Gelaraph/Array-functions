// Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them
// Add ‘Kotlin’ to the end of the array
// Add ‘Java’ after ‘Ruby’
// Remove the first item in the array
// Add ’Scala’ and ‘Swift’ to the beginning of the array
// Replace ‘PHP’ with ‘Go’ and ‘Rust’

const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Add 'Kotlin' to the end of the array
languages.push("Kotlin");

// Add 'Java' after 'Ruby'
languages.splice(3, 0, "Java");

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift("Scala", "Swift");

// Replace 'PHP' with 'Go' and 'Rust'
const index = languages.indexOf("PHP");
languages.splice(index, 1, "Go", "Rust");

console.log(languages);
// Output: ['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

// What will be the value of fruit after calling the function changeFruit?
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
changeFruit(fruit);
//Output: ['apple', 'mango', 'orange']

// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2])  maximum value is 10
function max(numbers) {
  let maxNumber = numbers[0]; // Assume first element is the maximum
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]; // Update maximum if current element is greater
    }
  }
  return maxNumber;
}
const numbers = [4, 5, 10, -2];
const maxValue = max(numbers); // maxValue will be 10
console.log(maxValue); // Output: 10

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]
function valTimesIndex(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * i);
  }
  return result;
}

const nums = [1, 2, 3];
const result = valTimesIndex(nums); // result will be [0, 2, 6]
console.log(result); // Output: [0, 2, 6]

const numbers2 = [5, 10, 15];
const result2 = valTimesIndex(numbers2); // result2 will be [0, 10, 30]
console.log(result2); // Output: [0, 10, 30]
