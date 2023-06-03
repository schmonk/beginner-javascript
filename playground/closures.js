/* function outerFunction() {
  const outerVar = 'Hey i am the outer Var!';
  function innerFunction() {
    const innerVar = 'Hey i am the inner Var!';
    console.log(innerVar);
    console.log(outerVar);
  }
  return innerFunction;
}

const innerFn = outerFunction();
innerFn();
 */

/* function createGreeting(greeting = '') {
  const myGreeting = greeting.toUpperCase();
  return function (name) {
    return `${myGreeting} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('eric'));
console.log(sayHey('nina'));
 */

function createGame(gameName) {
  let score = 0;
  function win() {
    score++;
    return `Your game ${gameName} score is ${score}`;
  }
  return win;
}

const iceHockeyGame = createGame('Ice Hockey');
const volleyGame = createGame('Volleyball');
