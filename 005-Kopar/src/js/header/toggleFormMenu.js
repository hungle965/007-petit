import { showNav, showBg, showForm, hideForm, hideNav, hideBgVideo, hideMainMenu } from './animations'

let isOpen = false

const open = async () => {
  if (isOpen) return
  await showNav()
  await showBg()
  await hideMainMenu()
  await showForm()
  isOpen = true
}

const hide = async () => {
  if (!isOpen) return
  await hideForm()
  await hideNav()
  await hideBgVideo()
  isOpen = false
}

export default () => (isOpen ? hide() : open())
