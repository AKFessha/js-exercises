/*
  Array literals
  --------------
  Declare some variables assigned to arrays of values
*/

var numbers = []; // add numbers from 1 to 10 into this array
for (i = 1; i <= 10; i++) {
  numbers = numbers.concat(i);
}
var mentors = ["Cris", "Daniel", "Mozafar", "Nate"]; // Create an array with the names of 4 mentors

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);
console.log(mentors);

/* 
  EXPECTED RESULT
  ---------------
  [1,2,3,4,5,6,7,8,9,10]
  ['Daniel', 'Irina', 'Rares']
*/
