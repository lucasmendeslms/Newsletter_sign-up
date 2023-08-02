const userEmail = document.querySelector('#userEmail');
const button = document.querySelector('#dismiss-message');

userEmail.innerText = sessionStorage['userEmail'];

function returnHome(event) {
  event.preventDefault();
  location.replace('index.html');
}

button.addEventListener('click', returnHome);