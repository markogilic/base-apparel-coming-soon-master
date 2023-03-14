let email = document.getElementById('email');
let submit = document.getElementById('submit');
let errorMessage = document.getElementById('message');
let errorIcon = document.getElementById('error-icon');
let form = document.getElementById('form');
let content = document.getElementById('content');

if (window.innerWidth > 1000) {
  createDiv();
}
function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('logo');

  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/logo.svg');
  newDiv.appendChild(newImage);
  content.prepend(newDiv);
}

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    errorMessage.textContent = 'Thank you for your subscription!';
    errorMessage.classList.add('show');
    form.reset();
    setTimeout(remove, 3000);
  } else {
    errorMessage.textContent = 'Please provide a valid email';
    errorMessage.classList.add('show');
    errorIcon.classList.add('show');
    form.classList.add('border');
    setTimeout(remove, 3000);
  }
}

function remove() {
  errorMessage.classList.remove('show');
  errorIcon.classList.remove('show');
  form.classList.remove('border');
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmail(email.value);
});
