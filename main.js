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
  scrollIntoView(link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 스크롤하면 홈 이미지가 사라지게 바꾸기
const homeContainer = document.querySelector(".home__container");
const homeheight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition <= homeheight) {
    homeContainer.style.opacity = 1 - scrollPosition / homeheight;
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
}
