const navMobile = document.getElementById('TopNavMobile')
export const isNavTopMobileTop = () => {
  const Y = document.body.getBoundingClientRect().y
  Y < -450 ? navMobile.classList.remove('onTop') : navMobile.classList.add('onTop') //450 is coor Y of section1
}
