// add parameter + number

function add7(number) {
  return number + 7;
}

console.log(add7(5));

// multiply 2 parameters

function multiply(number1, number2) {
  return number1 + number2;
}

console.log(multiply(3, 5));

// capitalize first letter only

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize('hellOOOOoooOOOO'));

// last letter

function lastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log(lastLetter('Hey there'));
