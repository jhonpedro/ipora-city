const hamburguerMenu = document.getElementById('hamburguer')
const navItems = document.getElementById('nav-items')
let isOpen = false

hamburguerMenu.addEventListener('click', () => {
  if (isOpen) {
    isOpen = false
    navItems.style.opacity = '0'
    return navItems.classList.remove('open', 'bg-yellow')
  }

  navItems.style.opacity = '1'
  navItems.classList.add('open', 'bg-yellow')
  isOpen = true
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 662) {
    navItems.style.opacity = '1'
  } else {
    navItems.style.opacity = '0'
  }
})
