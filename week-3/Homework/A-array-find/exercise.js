/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here



function findLongNameThatStartsWithA(name){
  return name.length > 7 && .....;
}


var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

// I add a function from line 10 - 12 then  I have changed the line 18 
// var longNameThatStartsWithA = findLongNameThatStartsWithA(names); 
// to the the line 20 
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);


console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"

