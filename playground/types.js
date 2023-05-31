/* */
const name = 'eric';
const middle = 'peter';
const last = `schaerrer`;
const sentence = "she's so cool\\";
const song = `aaaa

oo


eeeh

yea`;

const html = `
<div>
  <h2> Hello </h2>
  </div>
  `;

const hello = 'hello my name is ' + name + '. nice to meet you';
console.log(hello);

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

const newHello = `hello my name is ${name}. Nice to meet you. I am ${
  2023 - 1994
} years old.`;

const html4 = `
<div>
  <h2>${name}</h2>
  <h2>${hello}</h2>
</div>
`;

document.body.innerHTML = html4;
