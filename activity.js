// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//Check if all the numbers are divisible by 5//
const isDivisibleBy5= (n1 % 5==0) && (n2 % 5 ==0) && (n3 % 5 ==0) && (n4 % 5 ==0); 
console.log(isDivisibleBy5);

//Check if the first number is larger than the last//
const isFirstLarger= n1 > n4;
console.log(isFirstLarger);

//Subtract the first number from the second number.
const subtractFirstFromLast= n2 - n4;
console.log(subtractFirstFromLast);
//Multiply the result by the third number.
const multiplyByThird = subtractFirstFromLast * n3;
console.log(multiplyByThird);


//Find the remainder of dividing the result by the fourth number.//
const remainderByFourth= multiplyByThird % n4;
console.log(remainderByFourth);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
// in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isUnder25);




//The distance of the trip, in total, is 1,500 miles.

//Your car’s fuel efficiency is as follows:

//At 55 miles per hour, you get 30 miles per gallon.

//At 60 miles per hour, you get 28 miles per gallon.

//At 75 miles per hour, you get 23 miles per gallon.
//You have a fuel budget of $175.

//The average cost of fuel is $3 per gallon.
const totalDistance = 1500;
const gasCostPerGallon = 3;
const gasBudget = 175; 
const mpgAt55 = 30;
const mpgAt60 = 28;
const mpgAt75 = 23;
//Set up a program to answer the following questions:   
//How many gallons of fuel will you need for the entire trip?

let gallonsNeededAt55 = totalDistance / mpgAt55;
console.log(gallonsNeededAt55);

let gallonsNeededAt60 = totalDistance / mpgAt60;
console.log(gallonsNeededAt60);

let gallonsNeededAt75 = totalDistance / mpgAt75;
console.log(gallonsNeededAt75);

//Will your budget be enough to cover the fuel expense?
let gasExpenseAt55 = gallonsNeededAt55 * gasCostPerGallon;
console.log(gasExpenseAt55);
let isBudgetSufficientAt55 = gasExpenseAt55 <= gasBudget;
console.log(isBudgetSufficientAt55);

let gasExpenseAt60 = gallonsNeededAt60 * gasCostPerGallon;
console.log(gasExpenseAt60);
let isBudgetSufficientAt60 = gasExpenseAt60 <= gasBudget;
console.log(isBudgetSufficientAt60);

let gasExpenseAt75 = gallonsNeededAt75 * gasCostPerGallon;
console.log(gasExpenseAt75);
let isBudgetSufficientAt75 = gasExpenseAt75 <= gasBudget;
console.log(isBudgetSufficientAt75);  

//How long will the trip take, in hours?

let tripTimeAt55 = totalDistance / 55;
console.log(tripTimeAt55);

let tripTimeAt60 = totalDistance / 60;
console.log(tripTimeAt60);

let tripTimeAt75 = totalDistance / 75;
console.log(tripTimeAt75);
//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// Traveling at 75 miles per hour will take the least amount of time, but it is the most expensive. 
// Traveling at 55 miles per hour is the most fuel-efficient and cheapest option, but it takes the most time.
// Traveling at 60 miles per hour seems to be the best middle-ground between cost and time. 



