import { renderErrorState, renderSuccessState } from "./Utils";

import "Styles";
import Logo from "Images/logo.svg";
import SlackDashboard from "Images/illustration-dashboard.png";

import Swal from "sweetalert2";

const logoContainer = document.querySelector(".header__logo img");
const slackContainer = document.querySelector(".main__slack img");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailField = document.getElementById("email");
const form = document.getElementById("submitForm");

logoContainer.src = Logo;
slackContainer.src = SlackDashboard;

const verifyFieldValidity = () =>
  emailField.validity.valid && emailRegex.test(emailField.value);

function handleValidation() {
  emailField.checkValidity();
  const report = emailField.validity;

  if (report.valueMissing)
    renderErrorState(emailField, "Email cannot be empty");
  else if (report.typeMismatch || !emailRegex.test(emailField.value))
    renderErrorState(emailField, "Please provide a valid email");
  else renderSuccessState(emailField);
}

function handleSubmit(evt) {
  evt.preventDefault();

  handleValidation();

  if (verifyFieldValidity()) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "One we launch our app you will be notified",
      timer: 3000,
    });

    this.reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "There's an error in the field, check it",
      timer: 3000,
    });
  }
}

emailField.addEventListener("input", handleValidation);
emailField.addEventListener("click", handleValidation);

form.addEventListener("submit", handleSubmit);
