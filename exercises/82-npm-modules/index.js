import wait from 'waait';
import { faker } from '@faker-js/faker';
import { formatDistance } from 'date-fns';
import axios from 'axios';
import { intersection } from 'lodash';
import to from 'await-to-js';

const fakeNames = Array.from({ length: 10 }, () => {
  return `Hello ${faker.person.fullName()}`;
});

async function go() {
  await wait(200);
}

go();

// What is the distance between 1 January 2015 00:00:15
// and 1 January 2015 00:00:00, including seconds?
const result = formatDistance(new Date(), new Date(1994, 0, 1, 0, 0, 0), {
  includeSeconds: true,
});

// console.log(result);
//=> 'less than 20 seconds'

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  //   console.log(data);
}

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 4, 2, 3, 3, 8, 42, 123, 1];

const sameValues = intersection(a, b);
// console.log(sameValues);

function checkIfNameIsCool(firstName) {
  return new Promise(function (resolve, reject) {
    if (firstName === 'Eric') {
      resolve('Cool first Name');
      return;
    }
    reject(new Error('not a cool first Name'));
  });
}

async function checkName() {
  //   const nameDescription = await checkIfNameIsCool('Eric');
  const [error, response] = await to(checkIfNameIsCool('Erisc'));
  if (error) {
    //deal with error
    console.log('error: ', error);
  } else {
    console.log('response: ', response);
  }
  //   console.log(nameDescription);
}

checkName();
