console.log('it works');
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200';
myImage.alt = 'This is a nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const myHeading = document.createElement('h2');
myHeading.textContent = 'Cool stuff';
myDiv.insertAdjacentElement('afterbegin', myHeading);

const myList = document.createElement('ul');

const item1 = document.createElement('li');
item1.textContent = ' 🍕this is the first item';

const item2 = document.createElement('li');
item2.textContent = ' 🐶 this is the second item';

const item3 = document.createElement('li');
item3.textContent = ' 🚲 this is the third item';

const item4 = document.createElement('li');
item4.textContent = ' 🍨 this is the fourth item';

const item5 = item4.cloneNode(false); // if you pass true here, the nodes children are included
item5.textContent = ' 🌜 this is the fifth item';

myList.appendChild(item3);
myList.insertAdjacentElement('afterbegin', item2);
myList.insertAdjacentElement('afterbegin', item1);
myList.insertAdjacentElement('beforeend', item4);
myList.insertAdjacentElement('beforeend', item5);

document.body.insertAdjacentElement('afterbegin', myList);
