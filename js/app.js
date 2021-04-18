// MENU SHOW & HIDDEN //

const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW

toggleMenu.addEventListener("click", (e) => {
  console.log(e);
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", (e) => {
  console.log(e);
  navMenu.classList.remove("show");
});

// Remove menu //

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
