// import validator from 'validator';

function checkScrollBar() {
  const img = document.querySelector(".image-container img");

  const hasScrollbar = document.body.scrollWidth > window.innerWidth;

  const isTablet = window.innerWidth <= 850;

  const isMobile = window.innerWidth < 570;

  if (isTablet || hasScrollbar || isMobile) {
    img.src = "/assets/images/illustration-sign-up-mobile.svg";
  } else {
    img.src = "/assets/images/illustration-sign-up-desktop.svg";
  }
}

const inputElement = document.querySelector('#email');
const containerMessage = document.querySelector('.container-message');

function checkErrorMessage() {
  const errorMessage = containerMessage.querySelector('.error-message');
  const hasErrorMessage = !!errorMessage;
  return {hasErrorMessage, errorMessage};
}

function checkUserInput() {
  const hasErrorMessage = checkErrorMessage().hasErrorMessage;
  
  if (
    !validator.isEmail(inputElement.value) &&
    !hasErrorMessage &&
    inputElement.value !== ""
  ) {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add('error-message')
    errorMessage.innerText = "Valid email required";
    containerMessage.appendChild(errorMessage);
    inputElement.classList.add('error-message')
  }
  
  else if(validator.isEmail(inputElement.value)) {
    inputElement.classList.add('valid-email')
  }
}

function changeState() {
  const errorMessageObject = checkErrorMessage();
  
  if (errorMessageObject.hasErrorMessage) {
    containerMessage.removeChild(errorMessageObject.errorMessage);
    inputElement.classList.remove('error-message');
  } 
  else if(inputElement.classList.contains('valid-email')){
    inputElement.classList.remove('valid-email');
  }
}

window.addEventListener("load", checkScrollBar);

window.addEventListener("resize", checkScrollBar);

inputElement.addEventListener("blur", checkUserInput);

inputElement.addEventListener("input", changeState);
