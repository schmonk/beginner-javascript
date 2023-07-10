console.log('it wooorks 🎉');

const width = 300;
const src = `https://picsum.photos/${width}`;
const description = `Amazing thingy`;

const myHTML = `
<div class="wrapper">
    <h1>Hey there, how are you??</h1>
    <h2> This ${description} will blow your mind </h2>
    <img src="${src}" alt="${description}"> </img>
</div>
`;

/* const item = document.querySelector('.item');
item.innerHTML = myHTML;

console.log(item.innerHTML);

console.log(typeof myHTML);

const itemImage = document.querySelector('.wrapper img');

itemImage.classList.add('round')
console.log(itemImage);
 */

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
