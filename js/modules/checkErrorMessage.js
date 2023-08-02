export default function checkErrorMessage() {
  const containerMessage = document.querySelector('.container-message');
  const errorMessage = containerMessage.querySelector('.error-message');
  const hasErrorMessage = !!errorMessage;
  return {hasErrorMessage, errorMessage};
}