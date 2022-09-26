const iconMenu = document.querySelector('.menu-icon')
const headerNav = document.querySelector('.nav')
const menuLinks = document.querySelectorAll('.nav')
const logo = document.querySelector('.logo--small')
const overlay = document.querySelector('.overlay')
const headerSmall = document.querySelector('.header--small')
const body = document.querySelector('body')
iconMenu.addEventListener("click", openMenu)
overlay.addEventListener('click', closeMenu)

function openMenu() {
    headerSmall.classList.toggle('active')
    overlay.classList.toggle('active')
    body.classList.toggle('lock')
    iconMenu.classList.toggle('active')
    headerNav.classList.toggle('active')
    logo.classList.toggle('active')
}
function closeMenu() {
    body.classList.remove('lock')
    iconMenu.classList.remove('active')
    headerNav.classList.remove('active')
    logo.classList.remove('active')
    headerSmall.classList.remove('active')
    overlay.classList.remove('active')
}
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", () => {
        if (iconMenu.classList.contains('active')) {
            closeMenu()
        }
    })
})