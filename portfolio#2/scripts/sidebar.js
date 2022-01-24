const button = document.querySelector('.humb-field');
const popup = document.querySelector('.popup');
const navBar = document.querySelector('.nav-list').cloneNode(1);
const body = document.body;

button.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle('noscroll');
    button.classList.toggle('active');
    renderPopup();
});

function renderPopup() {
    popup.appendChild(navBar);
}