let userName = 'Jane';
(userName === '') ? console.log('Hello!') : console.log('Hello, ' + userName);

const userQuestion = 'When will I get married?';
(userName === '') ? console.log(`Someone asked: ${userQuestion}`) : console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 1 : eightBall = 'It is certain';
    break;
  case 2 : eightBall = 'It is decidedly so';
    break;
  case 3 : eightBall = 'Reply hazy, try again';
    break;
  case 4 : eightBall = 'Cannot predict now';
    break;
  case 5 : eightBall = 'Do not count on it';
    break;
  case 6 : eightBall = 'My sources say no';
    break;
  case 7 : eightBall = 'Outlook not so gooed';
    break;
  default: eightBall = 'Signs point to yes';
    break;
}
console.log('Magic Eight Ball predicts: ' + eightBall);
