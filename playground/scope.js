/* const age = 100;

function go() {
  const myAge = 222; // shadowing a variable. legal, but not allowed!!1
  const hair = 'blonde';
  console.log(hair);
  console.log(myAge);
}

go(); */

/* function isCool(name) {
  let cool;
  if (name === 'wes') {
    cool = true;
  }
  console.log(cool);
  return cool;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
} */

/* const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

go();
 */

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

//yell();
