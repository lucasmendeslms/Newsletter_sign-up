import checkErrorMessage from "./checkErrorMessage.js";

export default function checkUserInput() {
  const inputElement = document.querySelector('#email');
  const containerMessage = document.querySelector('.container-message');
  const hasErrorMessage = checkErrorMessage().hasErrorMessage;
  const valideEmail = document.querySelector('#validation-icon');
  const containerInput = document.querySelector('.container-input');
  
  if (
    !validator.isEmail(inputElement.value) &&
    !hasErrorMessage &&
    inputElement.value !== ""
  ) {
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message')
    errorMessage.innerText = "Valid email required";
    containerMessage.appendChild(errorMessage);
    inputElement.classList.add('error-message')
  }
  
  else if(validator.isEmail(inputElement.value) && !valideEmail) {
    const validationIcon = document.createElement('img');
    validationIcon.src = "./assets/images/check-symbol.svg";
    validationIcon.id = 'validation-icon'
    validationIcon.classList.add('valid-email')
    containerInput.appendChild(validationIcon);
  }

  inputElement.addEventListener("blur", checkUserInput);
}