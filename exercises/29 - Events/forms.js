const schmonk = document.querySelector('.schmonk');

schmonk.addEventListener('click', function (event) {
  event.preventDefault();
  const shouldChangePage = confirm('this website might be silly. Do you wish to proceed?');
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry dude, no chads allowed');
    event.preventDefault();
  }
  console.dir(event.currentTarget.email.value);
  console.dir(event.currentTarget.agree.checked);
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
