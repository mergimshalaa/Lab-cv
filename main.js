window.addEventListener("DOMContentLoaded", main);

/**
 * Start of the program after DOM has loaded.
 */
function main() {
  setupImageHover();
  setupMenu();
  toggleTheme();
}

/**
 *
 * A function that initiate menu variables.
 */
function setupMenu() {
  const menuIcon = document.querySelector(".navbar-responsive i");
  menuIcon.addEventListener("click", toggleMenu);

  const menuItems = document.querySelectorAll(".menu > li");
  for (const item of menuItems) {
    item.addEventListener("click", () => {
      toggleMenu();
      playSound();
    });
  }
}

/**
 * Function that toggles the menu for show and close.
 */
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".fa-bars");
  menu.classList.toggle("show");
  close.classList.toggle("fa-times");
}

/**
 * Plays sound when clicking on menu items.
 */
function playSound() {
  document.querySelector("#sound").play();
}

/**
 * A setup function to change pictures when hover with mouse.
 */
function setupImageHover() {
  /** @type {HTMLImageElement} */
  const img = document.querySelector(".picofme");
  img.addEventListener("mouseenter", setNewPic);
  img.addEventListener("mouseleave", setOldPic);
}

/**
 * A function that displays a new picture when mouse over.
 * @param {MouseEvent} event
 */
function setNewPic(event) {
  event.target.src = "./img/IMG_5685.jpg";
}

/**
 * A function that sets the old picture back when leaving mouse out.
 * @param {MouseEvent} event
 */
function setOldPic(event) {
  event.target.src = "./img/picofme.jpg";
}

/**
 * Toggles the theme on the page on click.
 */
function toggleTheme() {
  const toggle = document.querySelector("#btn-toggle");
  toggle.classList.toggle("active");
  const element = document.body;
  element.classList.toggle("night");
}
