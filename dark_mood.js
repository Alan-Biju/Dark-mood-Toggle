const button = document.querySelector('.press');

button.addEventListener('click', mode);
function mode() {
  console.log('working');
  if (button.checked) {
    console.log('ok');
    darkmodeon();
  } else {
    console.log('stop');
    darkmodeoff();
  }
}
function darkmodeoff() {
  document.body.classList.add('light');
}
function darkmodeon() {
  document.body.classList.remove('light');
}
