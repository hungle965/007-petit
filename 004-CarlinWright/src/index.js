const btnmenu = document.getElementById("Hamburger");
const btnmenuMobile = document.getElementById('HamburgerMoblie')

btnmenu.addEventListener('click', menucontent)
btnmenuMobile.addEventListener('click', menucontent)

function menucontent() {
  var menu = document.getElementById('menucontent')
  menu.classList.toggle('hiddenMenu')
  var menu = document.getElementById('itemsMenu')
  menu.classList.toggle('showItems')
  var menu = document.getElementById('hamburgerButton')
  menu.classList.toggle('hamburgerX')
  var menu = document.getElementById('hamburgerButtonMobile')
  menu.classList.toggle('hamburgerX')
}


// observer API
const header = document.querySelector("header")
const sectionOne = document.querySelector(".heroSectionLeft")



const sectionOneOptions = {
  rootMargin: "-600px 0px 0px 0px",
  threshhold: 1
}

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      headerLeft.classList.add("headerLeftAPI")
      headerRight.classList.add("headerRightAPI")
    } else {
      headerLeft.classList.remove("headerLeftAPI")
      headerRight.classList.remove("headerRightAPI")
    }
  })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)


const faders = document.querySelector('.fadeIn')

const appearOptions = {
  rootMargin: '0px 0px -100px 0px',
  threshhold: 1
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

appearOnScroll.observe(faders)