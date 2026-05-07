import "./styles.css";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const password = document.querySelector("#password");
const passwordConf = document.querySelector("#password-conf");

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

function isEmailValid() {
  const errorEmail = document.querySelector(".error-email");
  errorEmail.classList.add("active");
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    errorEmail.textContent = "I need email like example@example.com";

    return false;
  } else {
    errorEmail.classList.remove("active");
    errorEmail.textContent = "";
    return true;
  }
}

function isCountryValid() {
  const errorCountry = document.querySelector(".error-country");
  errorCountry.classList.add("active");
  if (country.validity.patternMismatch) {
    errorCountry.textContent = "Hello there is no numbers in country name :/";

    return false;
  } else if (country.validity.tooShort || country.validity.valueMissing) {
    const inputLength = country.value.length;
    const inputMinLength = country.minLength;
    errorCountry.textContent = `Country should have min ${inputMinLength} chars, add ${inputMinLength - inputLength} more`;

    return false;
  } else {
    errorCountry.classList.remove("active");
    errorCountry.textContent = "";
    return true;
  }
}

function isPostalCodeValid() {
  const errorPostal = document.querySelector(".error-postal");
  errorPostal.classList.add("active");
  if (postal.validity.patternMismatch) {
    errorPostal.textContent = `Hello there are no letters in postal code :/`;

    return false;
  } else if (postal.validity.tooShort) {
    const inputLength = postal.value.length;
    const inputMinLength = postal.minLength;
    errorPostal.textContent = `Hey, I need exactly ${inputMinLength} digits, add ${inputMinLength - inputLength} more`;
    return false;
  } else {
    errorPostal.classList.remove("active");
    errorPostal.textContent = "";
    return true;
  }
}

function isPasswordValid() {
  const errorPassword = document.querySelector(".error-password");
  errorPassword.classList.add("active");
  if (password.validity.tooShort) {
    const inputLength = password.value.length;
    const inputMinLength = password.minLength;
    errorPassword.textContent = `Hey, I need minimum length of ${inputMinLength}, add ${inputMinLength - inputLength} more`;
    return false;
  } else {
    errorPassword.classList.remove("active");
    errorPassword.textContent = "";
    return true;
  }
}

function isPasswordConfValid() {
  const errorPasswordConf = document.querySelector(".error-password-conf");
  errorPasswordConf.classList.add("active");
  if (passwordConf.value !== password.value) {
    errorPasswordConf.textContent = "Passwords do not match";
    return false;
  } else {
    errorPasswordConf.classList.remove("active");
    errorPasswordConf.textContent = "";
    return true;
  }
}
