//this sets the constant for my age
const myAge = 40;
// the value vor Early Years will change therefore we use let
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
const myName = 'Wouter'.toLowerCase();
console.log(myName);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)