
// let closeMenu;
let openMenu;
let links;
window.onload = function () {
  links = document.getElementById("links");
  closeMenu = document.getElementById("closeMenu");
  openMenu = document.getElementById("openMenu");

  closeMenu.addEventListener("click", () => {
    links.style.right = "-200px";
  });
  openMenu.addEventListener("click", () => {
    links.style.right = "0";
  });
};
