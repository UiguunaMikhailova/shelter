import pets from '../js-apps/pets.json'

const slide = document.querySelector('.cards__list')
const state = document.querySelector('.pagination__state')
const btnStart = document.querySelector('.pagination--start')
const btnPrev = document.querySelector('.pagination--prev')
const btnNext = document.querySelector('.pagination--next')
const btnEnd = document.querySelector('.pagination--end')
const mobile = window.matchMedia('(max-width: 1279px)')
const phone = window.matchMedia('(max-width: 767px)')
let page = 1
let end = 6
let cards = 8
let petsArr = []

function getList() {
    petsArr.push(...pets.slice(0, 6).sort(() => Math.random() - 0.5))
    petsArr.push(...pets.slice(6).sort(() => Math.random() - 0.5))
    petsArr.push(...pets.slice(0, 4).sort(() => Math.random() - 0.5))
    petsArr.push(...pets.slice(4).sort(() => Math.random() - 0.5))
    petsArr.push(...pets.slice(0, 2).sort(() => Math.random() - 0.5))
    petsArr.push(...pets.slice(2).sort(() => Math.random() - 0.5))
    petsArr.push(...petsArr)
}
getList()
window.onload = showSlideOnLoad()
function showSlideOnLoad() {
    if (mobile.matches) {
        end = 8
        cards = 6
    }
    if (phone.matches) {
        end = 16
        cards = 3
    }
    renderSlide(true, slide, petsArr.slice(cards * page - cards, cards * page))
}

function renderSlide(flag, parent, arr) {
    if (flag) {
        parent.innerHTML = ''
    }
    for (let i = 0; i < cards; i++) {
    const card = document.createElement('div')
    parent.appendChild(card)
    card.outerHTML = createCard(arr[i])
    }
}

function createCard({
    name,
    img
}) {
    return `<div class="slider__card card-pets" data-name="${name}">
    <div class="card-pets__image-wraapper">
      <img src="./../${img}" alt="card-pets image" class="card-pets__image">
    </div>
    <div class="card-pets__name">${name}</div>
    <button class="button button-light">Learn more</button>
  </div>`
}

btnStart.addEventListener('click', () => {
    page = 1
    renderSlide(true, slide, petsArr.slice(cards * page - cards, cards * page))
    state.innerText = page
    disabledBtn(page)
})
btnPrev.addEventListener('click', () => {
    page -= 1
    renderSlide(true, slide, petsArr.slice(cards * page - cards, cards * page))
    state.innerText = page
    disabledBtn(page)
})
btnNext.addEventListener('click', () => {
    page += 1
    renderSlide(true, slide, petsArr.slice(cards * page - cards, cards * page))
    state.innerText = page
    disabledBtn(page)
})
btnEnd.addEventListener('click', () => {
    page = end
    renderSlide(true, slide, petsArr.slice(cards * page - cards, cards * page))
    state.innerText = page
    disabledBtn(page)
})

function disabledBtn(p) {
    if (p === end) {
        btnEnd.disabled = true
        btnNext.disabled = true
    } else {
        btnEnd.disabled = false
        btnNext.disabled = false
    }
    if (p === 1) {
        btnStart.disabled = true
        btnPrev.disabled = true
    } else {
        btnStart.disabled = false
        btnPrev.disabled = false
    }
}

