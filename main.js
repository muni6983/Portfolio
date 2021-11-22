"use strict";

//scroll -> change navbar background color
const navbar = document.querySelector("nav");

document.addEventListener("scroll", (event) => {
  let scrollPosition = window.scrollY;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (scrollPosition >= navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
