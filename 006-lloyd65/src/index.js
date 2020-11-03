/* HELPERS */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
const toggleClass = c => (elm, f) => elm.classList.toggle(c, f)
const toggleIsActive = toggleClass('active')
const usePrevious = () => {
  let prev = null
  return next => {
    try {
      return [next, prev]
    } finally {
      prev = next
    }
  }
}
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const scrollToFirstSection = () =>
  document
    .querySelector('section.page-build')
    .scrollIntoView({ behavior: 'smooth' })

/* COMMON TARGETS */
const menuBtn = document.getElementById('menuBtn')
const mainNav = document.getElementById('mainNav')
const mainHeader = document.querySelector('header.header')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')
const scrollDownBtn = document.getElementById('scrollDownBtn')
const ctaContain = document.getElementById('ctaContain')

/* EVENT HANDLERS */
const onMenuClick = () => {
  toggleIsActive(menuBtn)
  toggleIsActive(mainNav)
}

const onDocumentScroll = compose(
  ([x, prev]) => {
    menuBtn.classList.toggle('bordered', x > 100 && x > prev)
    mainHeader.classList.toggle('hide', x > 100 && x > prev)
    mainHeader.classList.toggle('clear', x < 100)
    ctaContain.classList.toggle('down', x > 100 && x > prev)
  },
  usePrevious(),
  e => e.scrollTop,
  e => e.scrollingElement || e.documentElement,
  e => e.target
)

/* REGISTER */
menuBtn && menuBtn.addEventListener('click', onMenuClick)
scrollDownBtn && scrollDownBtn.addEventListener('click', scrollToFirstSection)
scrollToTopBtn && scrollToTopBtn.addEventListener('click', scrollToTop)
document.addEventListener('scroll', onDocumentScroll)

/* INIT CUSTOM COMPONENTS */
$('select[multiple]').select2()
window.intlTelInput(document.querySelector('[type="tel"]'), {
  initialCountry: 'auto',
  geoIpLookup: callback =>
    $.get('https://ipinfo.io', () => {}, 'jsonp').always(resp =>
      callback(resp && resp.country ? resp.country : '')
    ),
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js',
})

// AOS INIT
AOS.init({ once: true })

/* INIT SWIPER */
let mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

// DROPDOWN FLAG ENVENT
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

//parallax
const parallax = document.getElementById('bgPrl')

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset
  parallax.style.transform = 'translateY(' + offset * 0.3 + 'px' + ')'
})

//common popup
let isCmPop = true

const cmPop = document.getElementById('cmPop')
const btnClosePop = document.getElementById('btnCmPop')
const ctaBtn = document.getElementById('ctaBtn')
const ctaBtnM = document.getElementById('ctaBtnM')

btnClosePop && btnClosePop.addEventListener('click', () => togglePop())
ctaBtn && ctaBtn.addEventListener('click', () => togglePop())
ctaBtnM && ctaBtnM.addEventListener('click', () => togglePop())
const togglePop = () => {
  if (isCmPop) {
    cmPop.classList.add('hide')
    isCmPop = false
    setTimeout(() => (cmPop.style.display = 'none'), 500)
    return
  }
  cmPop.classList.remove('hide')
  cmPop.style.display = 'flex'
  isCmPop = true
}
