const cmPop = document.getElementById('cmPop')

let isCmPop = true

export const togglePop = () => {
  console.log(isCmPop)
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
