const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 250,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 1250,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 1750,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 2000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 2250,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2500,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2750,
  interval: 250,
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
