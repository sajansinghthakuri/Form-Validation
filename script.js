const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity(); // Check if the form is valid using browser's built-in check

  // Reset message and styles
  message.textContent = '';
  messageContainer.style.borderColor = '';
  password1El.style.borderColor = '';
  password2El.style.borderColor = '';

  if (!isValid) {
    message.textContent = 'Please fill out all fields correctly.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  // Check password match
  if (password1El.value !== password2El.value) {
    passwordMatch = false;
    message.textContent = 'Passwords do not match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  } else {
    passwordMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  }

  if (isValid && passwordMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    mobile: form.mobile.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  validateForm();

  if (isValid && passwordMatch) {
    storeFormData();
  }
}

form.addEventListener('submit', processFormData);
