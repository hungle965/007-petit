var rellax = new Rellax(".rellax");

// Menu Toggle
const btnMenu = document.getElementById("btnMenu");

// Menu Toggle
btnMenu.addEventListener("click", menuContent);

function menuContent() {
  var menu = document.getElementById("navigationPanel");
  menu.classList.toggle("OpenMenu");
  var logo = document.getElementById("navigationLogo");
  logo.classList.toggle("opaLogo");
  var buttonMenu = document.getElementById("headerButton");
  buttonMenu.classList.toggle("topButton");
}
// observer API

const header = document.querySelector("headerNavigation");
const sectionOne = document.querySelector(".one");

const sectionOneOptions = {
  rootMargin: "-105px 0px 0px 0px",
  threshhold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      headerButton.classList.add("buttonSticky");
    } else {
      headerButton.classList.remove("buttonSticky");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const faders = document.querySelector(".header");
const faders1 = document.querySelector(".one");
const faders2 = document.querySelector(".two");
const faders3 = document.querySelector(".three");
const faders4 = document.querySelector(".four");
const faders5 = document.querySelector(".five");
const faders6 = document.querySelector(".six");
const faders7 = document.querySelector(".contact");

const appearOptions = {
  rootMargin: "0px 0px -400px 0px",
  threshhold: 1,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

appearOnScroll.observe(faders);
appearOnScroll.observe(faders1);
appearOnScroll.observe(faders2);
appearOnScroll.observe(faders3);
appearOnScroll.observe(faders4);
appearOnScroll.observe(faders5);
appearOnScroll.observe(faders6);
appearOnScroll.observe(faders7);
//  observer API
