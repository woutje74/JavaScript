let day = (Math.random() * 7);
console.log(day);
console.log('Today is daynumber: ' + Math.floor(day));

day = Math.floor(day);
console.log(day);

/*shorthand declaration
let weekday = day || noday
*/

//using if, if..else and else if statements

console.log('Let\'s find out what day it is.');
if (day <= 7 && day !== 0) {
    console.log('Today is a weekday');
} else {
    console.log('Today is not a weekday.')
}

//Ternary operator
(day === 6 || day === 7) ? console.log('It\'s weekend!') : console.log('It\'s a business day.');

// a ternary operator can also be written as follows
console.log(day >= 6 && day !==0 ? "It's the weekend!" : "It's a business day.");

//using a switch operator
switch (Math.floor(day)) {
  case 7: console.log('Today is Sunday');
    break;
   case 6: console.log('Today is Saturday');
    break;
   case 5: console.log('Today is Friday');
    break;
   case 4: console.log('Today is Thursday');
    break;
   case 3: console.log('Today is Wednesday');
    break;
   case 2: console.log('Today is Tuesday');
    break;
   case 1: console.log('Today is Monday');
    break;
  default: console.log('Not a weekday');
    break;
}

console.log();
console.log('The following outcome is determined using an array and Math.random:');
days =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
day = Math.floor(Math.random() * 7 + 1);
randomDay = days[day - 1];
console.log(randomDay);
