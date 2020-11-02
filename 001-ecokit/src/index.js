// swiper
// import Swiper from 'sw iper'
// Open Menu
const btnMenu = document.getElementById("btnMenu");

btnMenu.addEventListener("click", OpenMenu);

function OpenMenu() {
  let Header = document.getElementById("Header");
  Header.classList.toggle("TransLeft");
  let main = document.getElementById("main");
  main.classList.toggle("TransLeft");
  let bgMenu = document.getElementById("menuContent");
  bgMenu.classList.toggle("BGMenu");
  let humberger = document.getElementById("humberger");
  humberger.classList.toggle("humbergerChange");
  // let headercontent = document.getElementById('headerContent')
  // headercontent.classList.toggle('indexheader')
}

const menuinner = document.getElementById("menuContent");

menuinner.addEventListener("click", closeMenu);

function closeMenu() {
  let Header = document.getElementById("Header");
  Header.classList.remove("TransLeft");
  let main = document.getElementById("main");
  main.classList.remove("TransLeft");
  let bgMenu = document.getElementById("menuContent");
  bgMenu.classList.remove("BGMenu");
  let humberger = document.getElementById("humberger");
  humberger.classList.remove("humbergerChange");
}

//drop menu

const dropMenu = document.getElementById("openDropMenu");

dropMenu.addEventListener("click", openMenuDrop);

function openMenuDrop() {
  let dropMenu = document.getElementById("secondMenu");
  dropMenu.classList.toggle("openSecondMenu");
}

// search open

const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", opensearch);

function opensearch() {
  let opensearch = document.getElementById("search");
  opensearch.classList.toggle("searchOpen");
  this.classList.toggle("hiddenX");
}

// close Menu Content

const close = document.getElementById("closeMenuContent");

close.addEventListener("click", closetwo);

function closetwo() {
  let Header = document.getElementById("Header");
  Header.classList.remove("TransLeft");
  let main = document.getElementById("main");
  main.classList.remove("TransLeft");
  let bgMenu = document.getElementById("menuContent");
  bgMenu.classList.remove("BGMenu");
  let humberger = document.getElementById("humberger");
  humberger.classList.remove("humbergerChange");
}

//observer API header

const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "-500px 0px 0px 0px",
  threshhold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      Header.classList.add("lowheight");
      backToTop.classList.remove("hide");
    } else {
      Header.classList.remove("lowheight");
      backToTop.classList.add("hide");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
