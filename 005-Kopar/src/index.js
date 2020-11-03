import { toggleFormMenu, toggleIntroMenu } from './js/header'
import { onTop } from './js/footer/backtop'
import { isNavTopMobileTop } from './js/header/isNavMobileTop'
import { throttle } from 'lodash'
import { isViewPort } from './js/helper/useIsViewPort'
import { togglePop } from './js/popUp/togglePop'

const navBtn = document.getElementById('button_enquiry')
const icon = document.getElementById('icon')
const backTop = document.getElementById('back_top')
const btnEnquiryMobile = document.getElementById('enquiry_mobile')

window.addEventListener('scroll', throttle(isNavTopMobileTop, 100), { passive: true })
navBtn && navBtn.addEventListener('click', toggleFormMenu)
icon && icon.addEventListener('click', toggleIntroMenu)
backTop && backTop.addEventListener('click', onTop)

btnEnquiryMobile && btnEnquiryMobile.addEventListener('click', toggleFormMenu)

//pop up
const btnClosePop = document.getElementById('btnCmPop')
const ctaBtn = document.getElementById('ctaBtn')
const ctaBtnM = document.getElementById('ctaBtnM')

btnClosePop && btnClosePop.addEventListener('click', () => togglePop())
ctaBtn && ctaBtn.addEventListener('click', () => togglePop())
ctaBtnM && ctaBtnM.addEventListener('click', () => togglePop())

//Input tag
const label = document.getElementById('labelInputTag')
$(document).ready(function () {
  $('.inputTag').select2()
  $('.inputTag').on('select2:open', e => {
    label.classList.add('top')
  })
})

//Dropdown flag
const data = [
  {
    id: 'vn',
    name: 'Vietnam',
    class: 'flag-icon flag-icon-vn',
  },
  {
    id: 'th',
    name: 'Thailand',
    class: 'flag-icon flag-icon-th',
  },
  {
    id: 'la',
    name: 'Laos',
    class: 'flag-icon flag-icon-la',
  },
  {
    id: 'my',
    name: 'Malaysia',
    class: 'flag-icon flag-icon-my',
  },
  {
    id: 'mm',
    name: 'Myanmar',
    class: 'flag-icon flag-icon-mm',
  },
  {
    id: 'my',
    name: 'Malaysia',
    class: 'flag-icon flag-icon-my',
  },
]

const findCountryById = id => {
  let country = ''
  data.map(item => {
    if (item.id === id) country = item
  })
  return country
}

const fomatState = state => {
  if (!state.id) {
    return state.text
  }
  let $state = $('<span></span>')
  const country = findCountryById(state.id)
  $state.attr('class', country.class)
  return $state
}

$('#dropFlag').select2({
  templateSelection: fomatState,
})

//display logo
const logo = document.getElementById('logo')
const hero = document.getElementById('hero')
window.addEventListener('scroll', () => {
  isViewPort(hero) ? logo.classList.add('hide') : logo.classList.remove('hide')
})

// slide
const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
})
const ccBtn = document.getElementsByClassName('ccBtn') //get list btn
let count = 1
// add active class to btn when slide changed
swiper.on('slideChange', () => {
  for (let index = 0; index < ccBtn.length; index++) {
    ccBtn[index].classList.remove('active')
  }
  ccBtn[count].classList.add('active')
  count === 2 ? (count = 0) : count++
})

// add event when click to btn
for (let index = 0; index < ccBtn.length; index++) {
  ccBtn[index].addEventListener('click', () => {
    count = index
    swiper.slideTo(index, 1000)
  })
}

//Ini phone style
const input = document.getElementById('phone')
const input2 = document.getElementById('phone2')

input && window.intlTelInput(input, {
  initialCountry: 'auto',
  customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
    return 'e.g. ' + selectedCountryPlaceholder
  },
})
input2 && window.intlTelInput(input2, {
  initialCountry: 'auto',
  customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
    return 'e.g. ' + selectedCountryPlaceholder
  },
})

input2 && input2.addEventListener('focus', () => {
  document.getElementById('formPhone2').classList.add('focus')
})

input2 && input2.addEventListener('focusout', e => {
  if (e.target.value) return
  document.getElementById('formPhone2').classList.remove('focus')
})

input.addEventListener('focus', () => {
  document.getElementById('formPhone').classList.add('focus')
})

input.addEventListener('focusout', () => {
  if (input.value) return
  document.getElementById('formPhone').classList.remove('focus')
})