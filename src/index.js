import "./styles.css";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const password = document.querySelector("#password");
const passwordConf = document.querySelector("#password-conf");

const errorEmail = document.querySelector(".error-email");
const errorCountry = document.querySelector(".error-country");
const errorPostal = document.querySelector(".error-postal");
const errorPassword = document.querySelector(".error-password");
const errorPasswordConf = document.querySelector(".error-password-conf");

email.addEventListener("input", isEmailValid);
country.addEventListener("input", isCountryValid);
postal.addEventListener("input", isPostalCodeValid);
password.addEventListener("input", isPasswordValid);
passwordConf.addEventListener("input", isPasswordConfValid);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    isEmailValid() &&
    isCountryValid() &&
    isPostalCodeValid() &&
    isPasswordValid() &&
    isPasswordConfValid()
  ) {
    alert("You did it :)");
    form.reset();
  }
});

function showError(node) {
  node.classList.add("active");
}

function clearError(node) {
  node.classList.remove("active");
  node.textContent = "";
  return true;
}

function isEmailValid() {
  showError(errorEmail);
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    errorEmail.textContent = "I need email like example@example.com";
    return false;
  } else {
    return clearError(errorEmail);
  }
}

function isCountryValid() {
  showError(errorCountry);
  if (country.validity.patternMismatch) {
    errorCountry.textContent = "Hello there is no numbers in country name :/";

    return false;
  } else if (country.validity.tooShort || country.validity.valueMissing) {
    const inputLength = country.value.length;
    const inputMinLength = country.minLength;
    errorCountry.textContent = `Country should have min ${inputMinLength} chars, add ${inputMinLength - inputLength} more`;
    return false;
  } else {
    clearError(errorCountry);
  }
}

function isPostalCodeValid() {
  showError(errorPostal);
  if (postal.validity.patternMismatch) {
    errorPostal.textContent = `Hello there are no letters in postal code :/`;

    return false;
  } else if (postal.validity.tooShort) {
    const inputLength = postal.value.length;
    const inputMinLength = postal.minLength;
    errorPostal.textContent = `Hey, I need exactly ${inputMinLength} digits, add ${inputMinLength - inputLength} more`;
    return false;
  } else {
    clearError(errorPostal);
  }
}

function isPasswordValid() {
  showError(errorPassword);
  if (password.validity.tooShort) {
    const inputLength = password.value.length;
    const inputMinLength = password.minLength;
    errorPassword.textContent = `Hey, I need minimum length of ${inputMinLength}, add ${inputMinLength - inputLength} more`;
    return false;
  } else {
    clearError(errorPassword);
  }
}

function isPasswordConfValid() {
  showError(errorPasswordConf);
  if (passwordConf.value !== password.value) {
    errorPasswordConf.textContent = "Passwords do not match";
    return false;
  } else {
    clearError(errorPasswordConf);
  }
}
