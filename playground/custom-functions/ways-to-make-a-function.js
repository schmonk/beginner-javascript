/* function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
 */

//anonymous function
/* function (firstName) { 
  return `Dr. ${firstName}`;
}
 */

//function expression
/* const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
 */

// Arrow functions
// const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const addArrowFunction = (a, b = 3) => a + b;

//returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//Immediately invoked function expression

/* (function (age) {
  console.log('running the anonymous function');
  return `you are cool and age ${age}`;
})(10);
 */

//Methods
//A function that lives inside of an object

const wes = {
  name: 'Westian bos',
  //method
  sayHi: function sayHi() {
    console.log(`Hey ${this.name}`);
    return 'Hello wes';
  },
  // short hand method
  yellhi() {
    console.log(`HEEEELLLO ${this.name}`);
  },
  // Arrow function
  whisperHi: () => {
    console.log(`psst, ${this.name}, im a mouse`);
  },
};

/* wes.sayHi(); // returns wes.name
wes.yellhi(); // returns wes.name
wes.whisperHi(); //does not return wes.name. Arrowfunctions do not have a scope of this, they take the parent scope */

//Callback functions
//Examples: when somebody clicks something, do XY

//Click callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('This worked wuuhuu');
}

button.addEventListener('click', function () {
  console.log('nice job');
});

// Timer Callback
setTimeout(() => {
  console.log('time to eat');
}, 1000);
