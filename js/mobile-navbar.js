const mobileMenu = document.querySelector('.mobile-menu')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-list li')
const activeClass = 'active'

mobileMenu.addEventListener('click', e => {
  navList.classList.toggle(activeClass)
})
