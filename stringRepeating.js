/*
Completed December 26th, 2025 
FreeCodeCamp.org Assignment: In this lab, you will create a function that repeats a given string a specific number of times. CANNOT USE REPEAT()
Concepts Used: Accumulator pattern, control flow order, early exits, concatenation
*/

function repeatStringNumTimes(string, number) {
  let result = "";  //This is called an accumulator. It is a variable that will get added to instead of reassigned. 

  if (number <= 0) {
    return "";  
  } 
  for (let i = 0; i < number; i++) {
    result += string;  //I had to remind myself how to concatenate here
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3)); 
