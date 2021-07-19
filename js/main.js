//Menu Hamburguesa
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

// Ir top cuando tocan el logo
const logoTop = document.querySelector('.logo');

function goTop(){
  document.documentElement.scrollTop = 0;
}

logoTop.addEventListener('click', goTop);
