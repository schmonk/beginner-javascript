//Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // console.log(billAmount, taxRate);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total; //the total here is a temporary variable
}

const myTotal = calculateBill(100, undefined, 0.2);
console.log(myTotal);
/*
//Function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo(`eric`);
console.log(greeting);

// const myTotal3 = calculateBill(100 + 20 * 2, 0.21);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY. ${name.toUpperCase()}`;
}
function yell(name = '') {
  return `HEY. ${name.toUpperCase()}`;
}
 */
