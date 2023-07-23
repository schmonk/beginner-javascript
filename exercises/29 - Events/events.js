const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('clicked');
}

const hooray = () => console.log('hooray');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

function handleBuyButtonClick(event) {
  console.log('clicked a button');
  const button = event.target;
  console.log(button.textContent);
  console.log(event.currentTarget);
  // event.stopPropagation();
}

const buyButtons = document.querySelectorAll('button.buy');

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('YOU clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);

    // event.stopPropagation();
  },
  { capture: true },
);

const photoElement = document.querySelector('.photo');

photoElement.addEventListener('mouseenter', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});
