function wait(milliseconds = 0) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function removePopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  //remove entirely
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function (resolve) {
    // first we create a popup
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
      <fieldset>
            <label>${options.title}</label>
            <input type="text" name="input"/>
            <button type="submit">Submit</button>
        </fieldset>
    `,
    );

    // check if they want to cancel
    if (options.cancel) {
      const cancelButton = document.createElement('button');
      cancelButton.type = 'button';
      cancelButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(cancelButton);
      // TODO listen for click on this button
      cancelButton.addEventListener(
        'click',
        function () {
          resolve(null);
          removePopup(popup);
        },
        { once: true },
      );
    }
    // list for submit event on inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        // console.log('submitted');

        // console.log(e.target.input.value);
        resolve(e.target.input.value);
        // remove from DOM entirely
        removePopup(popup);
      },
      { once: true }, // this third option only listens once, then removes the event listener
    );
    // when submitted, resolve data from input box

    // insert popup into DOM
    document.body.appendChild(popup);
    // to animate fade in, add a small timeout before adding open class
    await wait(50);
    popup.classList.add('open');
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');

buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(await callback(item));
  }
  return results;
}

go();
