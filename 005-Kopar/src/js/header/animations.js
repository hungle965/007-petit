let isShowNav = false
let isShowForm = false
let isShowMenu = false
let isBgVideo = false
let isIconExpanded = false

const navContainer = document.getElementById('navigation_button')
const navBtn = document.getElementById('button_enquiry')
const form = document.getElementById('form-container')

export const btnMenuOn = () => {
  if (isIconExpanded) return

  anime({
    targets: '.button-mainmenu .span1',
    easing: 'easeInOutSine',
    rotate: -45,
    width: 32,
    height: 3,
    translateX: [-20, -10],
    translateY: [-5, -10],
    duration: 400,
    complete: function () {
      document.getElementById('mobileHeader').style.zIndex = '99999'
    },
  })

  anime({
    targets: '.button-mainmenu .span2',
    easing: 'easeInOutSine',
    rotate: 45,
    translateX: [-5, -10],
    translateY: [5, 10],
    width: 32,
    height: 5,
    duration: 400,
  })
  isIconExpanded = true
}

export const btnMenuOff = () => {
  if (!isIconExpanded) return

  anime({
    targets: '.button-mainmenu .span1',
    easing: 'easeInOutSine',
    rotate: 0,
    width: 40,
    height: 5,
    translateX: -20,
    translateY: -5,
    duration: 400,
    complete: function () {
      document.getElementById('mobileHeader').style.zIndex = '999'
    },
  })

  anime({
    targets: '.button-mainmenu .span2',
    easing: 'easeInOutSine',
    rotate: 0,
    translateX: -5,
    translateY: 5,
    width: 40,
    height: 3,
    duration: 400,
  })

  isIconExpanded = false
}

export const showForm = () => {
  if (isShowForm) return
  navBtn.classList.add('button-close')
  anime({
    targets: form,
    duration: 700,
    delay: 700,
    opacity: [0, 1],
    easing: 'easeInOutSine',
    translateX: [1500, 0],
  })
  isShowForm = true
}

export const hideForm = () => {
  if (!isShowForm) return
  navBtn.classList.remove('button-close')

  anime({
    targets: form,
    duration: 700,
    easing: 'easeInOutSine',
    translateX: [0, 1500],
    opacity: [1, 0],
  })

  isShowForm = false
}

export const showMainMenu = () => {
  if (isShowMenu) return

  anime({
    targets: '.nav-inner',
    duration: 700,
    delay: 700,
    translateX: [1400, 0],
    opacity: [0, 1],
    easing: 'easeInOutSine',
  })

  isShowMenu = true
}

export const hideMainMenu = () => {
  if (!isShowMenu) return

  anime({
    targets: '.nav-inner',
    duration: 700,
    translateX: [0, 1400],
    opacity: 0,
    easing: 'easeInOutSine',
  })

  isShowMenu = false
}

export const showNav = () => {
  if (isShowNav) return
  anime({
    targets: navContainer,
    easing: 'easeInOutQuad',
    duration: 700,
    color: 'white',
    top: '15vh',
    height: [() => `${(80 / window.innerHeight) * 100}vh`, '70vh'],
  })
  document.body.classList.add('noScroll')
  isShowNav = true
}

export const hideNav = () => {
  if (!isShowNav) return

  anime({
    targets: navContainer,
    easing: 'easeInOutQuad',
    top: '0',
    delay: 700,
    height: [() => `${0.7 * window.innerHeight}px`, '80px'],
  })

  document.body.classList.remove('noScroll')
  isShowNav = false
}

export const showBg = () => {
  if (isBgVideo) return

  document.getElementById('bg_video').style.display = 'block'
  anime({
    targets: '.nav_video',
    duration: 700,
    opacity: [0, 1],
    easing: 'easeInOutSine',
  })

  isBgVideo = true
}

export const hideBgVideo = () => {
  if (!isBgVideo) return
  anime({
    targets: '.nav_video',
    duration: 700,
    opacity: [1, 0],
    easing: 'easeInOutSine',
    complete: () => (document.getElementById('bg_video').style.display = 'none'),
  })

  isBgVideo = false
}

export const btnMobileToggleForm = () => {
  const icon = document.getElementById('icon')
  !isShowForm ? btnEnquiryMobile.classList.add('enquireClose') : btnEnquiryMobile.classList.remove('enquireClose')
  isShowForm ? (icon.style.opacity = '1') : (icon.style.opacity = '0')
}

const btnEnquiryMobile = document.getElementById('enquiry_mobile')
btnEnquiryMobile && btnEnquiryMobile.addEventListener('click', btnMobileToggleForm)
