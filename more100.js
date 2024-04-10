// Write a loop that prompts you to enter a number greater than 100. It is necessary to implement the processing of non-numeric input.

const prompt = require('prompt-sync')();

while (true) {
  let input = prompt('Please, enter a number greater than 100: ');

  if (input === null || input === '') {
    break;
  }

  let number = Number(input);

  if (isNaN(number)) {
    prompt('Invalid input! Please enter a valid number.');
    continue;
  }

  if (number > 100) {
    prompt('Valid input!');
    break;
  } else {
    prompt('Number is not greater than 100. Try again!');
  }
}
