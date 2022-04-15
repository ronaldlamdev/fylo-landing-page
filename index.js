const form = document.getElementById('email-form');
const email =  document.getElementById('email-input');
const error = document.getElementById('email-error-message');

// email validation

const isValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  validateEmailInput();
});

// validate function 

const validateEmailInput = () => {
let value = email.value;
  if (value === '' || !isValid(value)) {
    errorEmailInput();
  } 
}

// error and success functions 

const errorEmailInput = () => {
  error.style.display = 'block';
};

// remove style when input is selected

email.addEventListener('click', () => {
  error.style.display = 'none';
})