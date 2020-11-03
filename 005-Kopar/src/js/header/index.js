import {
  showNav, showBg, showForm, hideForm, hideNav, hideBgVideo,
  hideMainMenu, showMainMenu, btnMenuOn, btnMenuOff
} from './animations'

let isFormOpen = false
let isMenuOpen = false

const _openForm = async () => {
  if (isFormOpen) return
  await showNav()
  await showBg()
  await hideMainMenu()
  await showForm()
  await btnMenuOff()
  isFormOpen = true
  isMenuOpen = false // close other
}

const _hideForm = async () => {
  if (!isFormOpen) return
  await hideForm()
  await hideNav()
  await hideBgVideo()
  isFormOpen = false
}

const _openMenu = async () => {
  if (isMenuOpen) return
  await showNav()
  await hideForm()
  await showMainMenu()
  await btnMenuOn()
  await showBg()
  isMenuOpen = true
  isFormOpen = false // close other
}

const _hideMenu = async () => {
  if (!isMenuOpen) return
  await hideNav()
  await hideMainMenu()
  await btnMenuOff()
  await hideBgVideo()
  isMenuOpen = false
}

export const toggleFormMenu = () => (isFormOpen ? _hideForm() : _openForm())
export const toggleIntroMenu = () => (isMenuOpen ? _hideMenu() : _openMenu())