let menu = document.querySelector('#menu');
let links = document.querySelector('#links');
let menuHamburger = document.querySelector('#menu-hamburger');
let iconoClose = document.querySelector('#menu-hamburger-close');
let close = true;
menu.addEventListener('click', () => {
    close = !close
    if (!close) {
        iconoClose.style.display = 'block'
        links.style.display = 'flex'
        menuHamburger.style.display = 'none'
    } else {
        iconoClose.style.display = 'none'
        links.style.display = 'none'
        menuHamburger.style.display = 'block'

    }
})