//Mathmatical assignment operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//Mathmatical increment operators
let w = 4;
let y = 10;
console.log('These are the original values of w: ' + w + ' and y: ' + y );
w++;
console.log('Using the increment operator ++, w is now: ' + w);
y--;
console.log('Using the increment operator --, y is now: ' + y);

//String interpolation
let myName = 'Wouter';
console.log('The value of myName is: ' + myName);
let myCity = 'Rotterdam';
console.log('The value of myCity is: ' + myCity);
console.log(`With String interpolation the following text has been concatenated: My name is ${myName}. My favorite city is ${myCity}`);
