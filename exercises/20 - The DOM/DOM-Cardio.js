// Make a div
let myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const myFirstLi = document.createElement('li');
myFirstLi.textContent = 'one';
const mySecondLi = document.createElement('li');
mySecondLi.textContent = 'two';
const myThirdLi = document.createElement('li');
myThirdLi.textContent = 'three';
myUl.insertAdjacentElement('afterbegin', myThirdLi);
myUl.insertAdjacentElement('afterbegin', mySecondLi);
myUl.insertAdjacentElement('afterbegin', myFirstLi);
myDiv.insertAdjacentElement('afterbegin', myUl);

// create an image

const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg';
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute puppy';
// Append that image to the wrapper
myDiv.insertAdjacentElement('beforeend', myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTMLString = `<div>
<p> This is a paragraph. </p>
<p> This is a second paragraph. </p>
</div>`;

// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myHTMLString);

const myInsertedTest = myDiv.firstChild;
// add a class to the second paragraph called warning
myInsertedTest.lastElementChild.classList.add('warning');
// remove the first paragraph
myInsertedTest.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name = 'name', age = 'age', height = 'height') {
  const myElement = document.createElement('div');
  myElement.innerHTML = `<div class="playerCard wrapper">
       <h2>${name} — ${age}</h2>
       <p>They are ${height} cm tall and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be an old dog!</p>
    <button type=button class='delete'> Delete </button>
     </div>
     `;
  return myElement;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const myCardDiv = document.createElement('div');
myCardDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const peter = generatePlayerCard('Peter', 21, 171);
const petra = generatePlayerCard('Petra', 22, 191);
const eva = generatePlayerCard('Eva', 42, 161);
const adam = generatePlayerCard('Adam', 29, 173);

// append those cards to the div
myCardDiv.append(peter);
myCardDiv.append(petra);
myCardDiv.append(eva);
myCardDiv.append(adam);
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', myCardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const delButtons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  console.log(event);
  event.target.closest('.playerCard').remove();
}
// loop over them and attach a listener
delButtons.forEach((button) => {
  button.addEventListener('click', deleteCard);
});
