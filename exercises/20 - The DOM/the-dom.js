/* const  p = document.querySelector('p');
console.log(p);
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
// heading.textContent = `Eric is amazing`;
console.dir(heading.textContent);
console.dir(heading.innerText);
console.dir(heading.innerHTML);
console.dir(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
// console.dir(pizzaList.textContent);

// pizzaList.textContent = ` ${pizzaList.textContent}🍕`; // slow
pizzaList.insertAdjacentText("afterbegin",`🍕`);
pizzaList.insertAdjacentText("beforeend",`🍕`);
 */

//Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);