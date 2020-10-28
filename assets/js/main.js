let menu = document.querySelector('.menu-icon-cross');

menu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('isOpened');
});