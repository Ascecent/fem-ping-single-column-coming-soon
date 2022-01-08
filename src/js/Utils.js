const getMessageContainer = (input) => {
  const parent = input.parentElement;
  const errorMessageContainer = parent.querySelector(".error-message");

  return { parent, errorMessageContainer };
};

function renderErrorState(input, message) {
  const { parent, errorMessageContainer } = getMessageContainer(input);

  parent.classList = "form-control error";
  errorMessageContainer.textContent = message;
}

function renderSuccessState(input) {
  const { parent, errorMessageContainer } = getMessageContainer(input);

  parent.classList = "form-control";
  errorMessageContainer.textContent = "";
}

export { renderErrorState, renderSuccessState };
