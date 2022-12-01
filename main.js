window.addEventListener('DOMContentLoaded', main)
/**
 * 
 */
function main() {
    setupImageHover()
    setupMenu();
}

function setupMenu() {
    const menuIcon = document.querySelector(".navbar-responsive i");
    menuIcon.addEventListener('click', toggleMenu);

    const menuItems = document.querySelectorAll('.menu > li')
    for (const item of menuItems) {
        item.addEventListener('click', () => {
            toggleMenu()
            playSound()
        })
    }
}

/**
 * 
 */
 function toggleMenu() {
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".fa-bars");
    menu.classList.toggle('show')
    close.classList.toggle('fa-times');
} 

/**
 * 
 */
function playSound() {
    document.querySelector('#sound').play();
}

/**
 * 
 */
function setupImageHover() {
    /** @type {HTMLImageElement} */
    const img = document.querySelector(".picofme");
    img.addEventListener('mouseenter', setNewPic);
    img.addEventListener('mouseleave', setOldPic);
}

/**
 * 
 * @param {*} event 
 */
function setNewPic(event) {
    event.target.src = "./img/IMG_5685.jpg";
}

/**
 * 
 * @param {*} event 
 */
function setOldPic(event) {
    event.target.src = "./img/picofme.jpg";
}

/**
 * 
 */
function changeMode() {
    const toggle = document.querySelector("#btn-toggle");
    toggle.classList.toggle('active');
    const element = document.body;
    element.classList.toggle("night");
}