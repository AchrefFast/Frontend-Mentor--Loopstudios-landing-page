function main() {

    const hamburger = document.querySelector('.nav__toggle');
    const header__nav = document.querySelector('.nav__header');

    hamburger.addEventListener('click', handleNav);


    function handleNav() {
        hamburger.classList.toggle('close');
        header__nav.classList.toggle('show');
    }
}



window.addEventListener('DOMContentLoaded', main);