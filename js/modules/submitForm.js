export default function submitForm () {
  
  const inputElement = document.querySelector('#email');
  const form = document.querySelector('#subscribe');

  function isValidSubmission(event) {
    event.preventDefault();
    
    if(validator.isEmail(inputElement.value)) {
      sessionStorage.setItem('userEmail', inputElement.value);
      location.replace('successful.html');
    }
  }
  form.addEventListener('submit', isValidSubmission);
}