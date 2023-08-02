import checkErrorMessage from "./checkErrorMessage.js";

export default function changeState() {

  const inputElement = document.querySelector('#email');
  const containerInput = document.querySelector('.container-input');
  const containerMessage = document.querySelector('.container-message');
  const errorMessageObject = checkErrorMessage();
  const validationIcon = containerInput.querySelector('img.valid-email')
  
  if (errorMessageObject.hasErrorMessage) {
    containerMessage.removeChild(errorMessageObject.errorMessage);
    inputElement.classList.remove('error-message');
  } 
  if(validationIcon){
    containerInput.removeChild(validationIcon);
  }

  inputElement.addEventListener("input", changeState);
}