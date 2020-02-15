let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnerAge = 12;
if (registeredEarly && runnerAge > 18) {
  console.log(raceNumber = raceNumber + 1000);
}

if (registeredEarly && runnerAge > 18) {
  console.log(`You will race at 9:30 am. Your racenumber is: ${raceNumber}`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`You will race at 11:00 am. Your racenumber is: ${raceNumber}`)
} else if(runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your racenumber is: ${raceNumber}`);
} else {
  console.log('Contact the registration desk.');
}