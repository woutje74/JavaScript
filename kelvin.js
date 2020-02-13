// with the following declaration we set the the variable of kelvin to a constant value of 293
const kelvin = 0;

// celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;

//fahrenheit is uses a difficult conversion from celsius
let fahrenheit = celsius *(9/5) + 32;

// to round the result of the conversion to fahrenheit we use the math method .floor
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`In Newton the temperature is ${newton}`);