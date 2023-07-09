/* const  p = document.querySelector('p');
// console.log(p);
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
console.dir(heading);
// heading.textContent = `Eric is amazing`;
console.dir(heading.textContent);
console.dir(heading.innerText);
console.dir(heading.innerHTML);
console.dir(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');

// pizzaList.textContent = ` ${pizzaList.textContent}🍕`; // slow
pizzaList.insertAdjacentText("afterbegin",`🍕`);
pizzaList.insertAdjacentText("beforeend",`🍕`);

console.dir(pizzaList.textContent);
 */

//Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.add('round');
// console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute pup'; // setter
pic.width = 200;
// console.log(pic.alt); //getter
// console.log(pic.naturalWidth); //getter

window.addEventListener('load', function () {
  console.log(pic.naturalWidth); //getter
}); //waits for content to be loaded

pic.addEventListener('load', function () {
  console.log(pic.naturalWidth); //getter
});

console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset); // returns undefined

custom.addEventListener('click', function () {
  alert(`Welcome ${custom.dataset.name}`);
});
