

// Open Menu Content
const btnHumberger = document.getElementById("humberger");
btnHumberger.addEventListener("click", Openmenu);

function Openmenu() {
  let menu = document.getElementById("contentMenu");
  menu.classList.toggle("hide");
  let headershow = document.getElementById("Header");
  headershow.classList.toggle("showheader");
}

// button humberger
btnHumberger.addEventListener("click", humbergerX);
function humbergerX() {
  let buttonhumberger = document.getElementById("btnHumberger");
  buttonhumberger.classList.toggle("humbergerChange");
}

// Open Menu 2
const btnMenu = document.getElementById("btnMenuSecond");
const btnMenu2 = document.getElementById("btnMenuSecond2");
const btnMenu3 = document.getElementById("btnMenuSecond3");
btnMenu.addEventListener("click", Openmenu2);
btnMenu2.addEventListener("click", Openmenu2);
btnMenu3.addEventListener("click", Openmenu2);

function Openmenu2() {
  let menu2 = document.getElementById("contentMenu");
  menu2.classList.add("changeMenu");
}

//show Menu second
btnMenu.addEventListener("click", showmenu2);
btnMenu2.addEventListener("click", showmenu3);
btnMenu3.addEventListener("click", showmenu4);

function showmenu2() {
  let showmenu2 = document.getElementById("topNav2");
  showmenu2.classList.add("showmenu2");
}

function showmenu3() {
  let showmenu3 = document.getElementById("topNav3");
  showmenu3.classList.add("showmenu2");
}

function showmenu4() {
  let showmenu4 = document.getElementById("topNav4");
  showmenu4.classList.add("showmenu2");
}

// Close Menu 2
const btnCloseMenu = document.getElementById("btnBackMenu");
const btnCloseMenu2 = document.getElementById("btnBackMenu2");
const btnCloseMenu3 = document.getElementById("btnBackMenu3");
btnCloseMenu.addEventListener("click", Closemenu2);
btnCloseMenu2.addEventListener("click", Closemenu2);
btnCloseMenu3.addEventListener("click", Closemenu2);

function Closemenu2() {
  let menu2 = document.getElementById("contentMenu");
  menu2.classList.remove("changeMenu");
  let close2 = document.getElementById("topNav2");
  close2.classList.remove("showmenu2");
  let close3 = document.getElementById("topNav3");
  close3.classList.remove("showmenu2");
  let close4 = document.getElementById("topNav4");
  close4.classList.remove("showmenu2");
}

//observer API header
const header = document.querySelector("header");
const headerform = document.querySelector("headerForm");
const sectionOne = document.querySelector(".hero");
const heroEnquiry = document.querySelector(".heroEnquiry");

const sectionOneOptions = {
  rootMargin: "-250px 0px 0px 0px",
  threshhold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      Header.classList.add("fixedheader");
    } else {
      Header.classList.remove("fixedheader");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Swiper
