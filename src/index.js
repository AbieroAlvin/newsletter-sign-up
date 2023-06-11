const form = document.getElementById("form");
const email = document.getElementById("email");
const success = document.getElementById("success");
const main = document.getElementById("main");
const successEmail = document.getElementById("success-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

const isValidEmail = (email) => {
  let emailReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  return emailReg.test(String(email).toLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  successEmail.textContent = email.value;

  main.classList.add("hidden");
  main.classList.remove("flex");
  success.classList.remove("hidden");
  success.classList.add("flex");
};

function validateInput() {
  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    setError(email, "Valid email required");
  } else {
    setSuccess(email);
  }
}
