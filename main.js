window.addEventListener('DOMContentLoaded', main)

function main() {
    changeMode()
    setupImageHover()
}

/*LocalStorage för toggle knappen*/
function changeMode() {
    const toggle = document.querySelector("#btn");
    toggle.classList.toggle('active');
    const element = document.body;
    element.classList.toggle("night");
}


function setupImageHover() {
    /** @type {HTMLImageElement} */
    const img = document.querySelector(".picofme");
    img.addEventListener('mouseenter', setNewPic);
    img.addEventListener('mouseleave', setOldPic);
}

function setNewPic(event) {
    event.target.src = "./img/IMG_5685.jpg";
}

function setOldPic(event) {
    event.target.src = "./img/picofme.jpg";
}

function playSound() {
    document.querySelector('#sound').play();
}