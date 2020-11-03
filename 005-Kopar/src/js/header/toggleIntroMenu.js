import {
  hideForm,
  showNav,
  showMainMenu,
  btnMenuOn,
  showBg,
  hideNav,
  hideMainMenu,
  btnMenuOff,
  hideBgVideo,
} from './animations'

let isOpen = false

const open = async () => {
  if (isOpen) return
  await showNav()
  await hideForm()
  await showMainMenu()
  await btnMenuOn()
  await showBg()
  isOpen = true
}

const hide = async () => {
  if (!isOpen) return
  await hideNav()
  await hideMainMenu()
  await btnMenuOff()
  await hideBgVideo()
  isOpen = false
}

export default () => (isOpen ? hide() : open())
