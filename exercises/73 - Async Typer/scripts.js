function wait(milliseconds = 0) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function randomNumber(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop
/* async function draw(element) {
  const text = element.textContent;
  let visibleText = '';
  for (const letter of text) {
    visibleText += letter;
    element.textContent = visibleText;
    // wait for some amout of time
    const { typeMin, typeMax } = element.dataset;
    const waitTime = randomNumber(typeMin, typeMax);
    await wait(waitTime);
  }
} */

// recursion
function draw(element) {
  let index = 1;
  const text = element.textContent;
  const { typeMin, typeMax } = element.dataset;
  async function drawLetter() {
    element.textContent = text.slice(0, index);
    index++;
    const waitTime = randomNumber(typeMin, typeMax);
    await wait(waitTime);
    //exit condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

const elements = document.querySelectorAll('[data-type]');

// longer variant
// elements.forEach((element) => draw(element));

// shorter variant
elements.forEach(draw);
