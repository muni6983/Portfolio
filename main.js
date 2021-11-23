"use strict";

//scroll -> change navbar background color
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", (event) => {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= navbarHeight) {
    navbar.classList.add("navbar--pink");
  } else {
    navbar.classList.remove("navbar--pink");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
});
