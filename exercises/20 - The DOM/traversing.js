const eric = document.querySelector('.eric');
/* 
// There ignore plain text nodes
// console.log(eric.children);
// console.log(eric.childNodes);
console.log(eric.firstElementChild);
console.log(eric.lastElementChild);
console.log(eric.previousElementSibling);
console.log(eric.nextElementSibling);
console.log(eric.parentElement);

// These do not ignore text nodes
console.log(eric.childNodes);
console.log(eric.firstChild);
console.log(eric.lastChild);
console.log(eric.previousSibling);
console.log(eric.nextSibling);
console.log(eric.parentNode);
 */

const p = document.createElement('p');
p.textContent = 'ill be removed :(';
document.body.appendChild(p);

p.remove();

console.log(p.textContent); // returns actual textcontent
