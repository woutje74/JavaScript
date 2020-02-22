const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day){
      case 'monday':
      return 8;
      case 'tuesday':
      return 7;
      case 'wednesday':
      return 7;
      case 'thursday':
      return 8.5;
      case 'friday':
      return 7;
      case 'saturday':
      return 9;
      case 'sunday':
      return 9;
      default:
        return 6;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  console.log('Actual sleep hours: ' + getActualSleepHours());
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  console.log('Ideal hours of sleep: ' + getIdealSleepHours(9));
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    if (actualSleepHours === idealSleepHours){
      console.log('The number of hours of actual sleep is equal to the ideal hours of sleep. You have had the perfect amount of sleep');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You have had ' + ((actualSleepHours - idealSleepHours) * -1) + ' hours less sleep than needed!');
    } else {
      console.log('You have had ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed!');
    }
  }
  
  calculateSleepDebt();