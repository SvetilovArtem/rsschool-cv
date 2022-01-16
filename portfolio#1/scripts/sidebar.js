const button = document.querySelector('.burger-btn');
const navActive = document.querySelector('.nav-active');

button.addEventListener('click', function() {
    navActive.classList.toggle('is-hidden')
})