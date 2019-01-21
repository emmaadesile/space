import isEmpty from './isEmpty';

/**
 * @description Validates email
 *
 * @param {string} email
 * @returns {boolean} true or false
 */

const validateEmail = email => {
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

/**
 * @description Validates signup
 *
 * @param {string} data
 * @returns {object} isVlaid, error
 */
const validateSignup = data => {
  const error = {};
  const { firstname, lastname, email, password, confirmPassword } = data;

  if (!firstname) {
    error.firstname = 'Please enter your firstname';
  }

  if (!lastname) {
    error.lastname = 'Please enter your lastname';
  }

  if (!email) {
    error.email = 'Please enter your email'
  }

  else if (email && email.trim() === '') {
    error.email = 'Please enter your email';
  }

  else if (!validateEmail(email)) {
    error.email = 'Please enter a valid email';
  }

  if (!password) {
    error.password = 'Please enter your password';
  }

  else if (!/\d+/.test(password)) {
    error.password = 'Password must contain a number';
  }

  if (!confirmPassword) {
    error.confirmPassword = 'Please confirm your password';
  }

  if (confirmPassword !== password) {
    error.confirmPassword = 'Passwords do not match';
  }

  return { error, isValid: isEmpty(error) };
};

const validateLogin = data => {
  const { email, password } = data;
  const error = {};
  let isValid;

  if (!email) {
    error.email = 'Please enter your email';
  }

  else if (!validateEmail(email)) {
    error.email = 'Please enter a valid email';
  }

  if (!password) {
    error.password = 'Please enter your password';
  }

  return { error, isValid: isEmpty(error) };
};
 
export { validateEmail, validateSignup, validateLogin };
