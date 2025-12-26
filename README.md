# String Repeating Function
This is a function that repeats a given string a specific number of times.

## User Stories
* You should create a function named repeatStringNumTimes that takes two parameters: a string and a number.
* The function should return the string repeated the specified number of times.
* If the number is less than or equal to zero, the function should return an empty string.

## Tools & Languages Used
* FreeCodeCamp.org
* JavaScript

## Features
* Function takes two parameters: a string and a number.
* Function returns the string repeated the specified number of times.
* Function returns an empty string if number provided is less than or equal to zero.

## Concepts Learned
* Accumulators
* Control flow order
* Early exits in loops
* Concatenation

## Examples
```
function repeatStringNumTimes(string, number) {
  let result = "";

  if (number <= 0) {
    return "";
  } 
  for (let i = 0; i < number; i++) {
    result += string;
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));
//This will return "abcabcabc"

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
