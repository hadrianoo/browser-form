import "./styles.css";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const password = document.querySelector("#password");
const passwordConf = document.querySelector("#password-conf");

email.addEventListener("input", isEmailValid);
country.addEventListener("input", isCountryValid);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  isEmailValid();
  isCountryValid();
});

function isEmailValid() {
  const errorEmail = document.querySelector(".error-email");
  errorEmail.classList.add("active");
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    errorEmail.textContent = "I need email like example@example.com";
  } else {
    errorEmail.classList.remove("active");
    errorEmail.textContent = "";
  }
}

function isCountryValid() {
  const errorCountry = document.querySelector(".error-country");
  errorCountry.classList.add("active");
  if (country.validity.patternMismatch) {
    errorCountry.textContent = "Hello there is no numbers in country name :/";
  } else if (country.validity.tooShort || country.validity.valueMissing) {
    const inputLength = country.value.length;
    const inputMinLength = country.minLength;
    errorCountry.textContent = `Country should have min ${inputMinLength} chars, ${inputMinLength - inputLength} more`;
  } else {
    errorCountry.classList.remove("active");
    errorCountry.textContent = "";
  }
}

function isPostalCodeValid() {
  const errorPostal = document.querySelector(".error-postal");
  errorPostal.classList.add("active");
  if (errorPostal.validity.patternMismatch) {
    errorPostal.textContent = ``;
  } else {
    errorPostal.classList.remove("active");
    errorPostal.textContent = "";
  }
}
