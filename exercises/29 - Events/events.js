const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('clicked');
}

const hooray = () => console.log('hooray');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  const button = event.target;
  /*   console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price)); */
  console.log(event.target);
  console.log(event.currentTarget);
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
