const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
