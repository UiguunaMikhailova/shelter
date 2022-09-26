import pets from '../js-apps/pets.json'

const slider = document.querySelector('.slider__box')
const btnLeft = document.querySelector('.slider__controls--back')
const btnRight = document.querySelector('.slider__controls--forward')
const slider1 = document.querySelector('.slider__container--left')
const slider2 = document.querySelector('.slider__container--center')
const slider3 = document.querySelector('.slider__container--right')
let curr = random([])
let next = random(curr)
window.onload = (renderSlide(false, slider1, next), renderSlide(false, slider2, curr), renderSlide(false, slider3, next))

btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)

function moveLeft() {
  slider.classList.add('slider__box--left')
  curr = next
  next = random(curr)
  btnLeft.removeEventListener('click', moveLeft)
}

function moveRight() {
  slider.classList.add('slider__box--right')
  curr = next
  next = random(curr)
  btnRight.removeEventListener('click', moveRight)
}

function renderSlide(flag, parent, petsNum) {
  if (flag) {
    parent.innerHTML = ''
  }
  for (const pet of petsNum) {
    renderCard(parent, pets[pet])
  }
}

function renderCard(parent, pet) {
  const card = document.createElement('div')
  parent.appendChild(card)
  card.outerHTML = createCard(pet)
}

function createCard({ name,img }) {
  return `<div class="slider__card card-pets" data-name="${name}">
  <div class="card-pets__image-wraapper">
    <img src="${img}" alt="card-pets image" class="card-pets__image">
  </div>
  <div class="card-pets__name">${name}</div>
  <button class="button button-light">Learn more</button>
</div>`
}

slider.addEventListener('animationend', (e) => {
  slider2.innerHTML = slider1.innerHTML
  renderSlide(true, slider3, next)
  renderSlide(true, slider1, next)
  if (e.animationName === 'move-left') {
    slider.classList.remove('slider__box--left')
  } else {
    slider.classList.remove('slider__box--right')
  }

  btnLeft.addEventListener('click', moveLeft)
  btnRight.addEventListener('click', moveRight)
})

function random(arr) {
  const num = new Array(8).fill(0).map((n, i) => n + i)
  const restNum = num.filter((n) => !arr.includes(n))
  const slide = new Set()
  for (let i = 0; slide.size < 3; i++) {
    slide.add(restNum[Math.floor(Math.random() * restNum.length)])
  }
  return Array.from(slide)
}
