window.addEventListener('DOMContentLoaded', main)
/**
 * 
 */
function main() {
    const menuItems = Array.from(document.querySelectorAll('.menu > li'))
    menuItems.map(i => {
        i.addEventListener('click', playSound)
    })
    setupImageHover()
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

/**
 * 
 */
function toggleMenu() {
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".fa-bars");
    menu.classList.toggle('show')
    close.classList.toggle('fa-times');
} 