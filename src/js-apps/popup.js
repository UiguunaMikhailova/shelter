import pets from '../js-apps/pets.json'

const overlayPopup = document.querySelector('.overlay-popup')
const modal = document.querySelector('.modal')
const btnCard = document.querySelectorAll('.modal-parent')
const modalCard = document.createElement('div')
const body = document.querySelector('body')

modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal__close')) {
    closeModal()
  }
})

btnCard.forEach(card => card.addEventListener("click", (event) => {
  console.log(event.target)
  if (event.target.closest('.card-pets')) {
    const pet = pets.find((item) => item.name === event.target.closest('.card-pets').dataset.name)
    renderModal(modal, pet)
    overlayPopup.classList.add('active')
    body.classList.add('lock')
    modal.style = 'display: block'

    const closeBtn = document.querySelector('.modal__close')
    closeBtn.addEventListener('click', closeModal)
  }
}))

overlayPopup.addEventListener('click', closeModal)

function closeModal() {
  overlayPopup.classList.remove('active')
  body.classList.remove('lock')
  modalCard.remove()
  modal.style = 'display: none'
}

function renderModal(parent, pet) {
  modal.innerHTML = ''
  parent.appendChild(modalCard)
  modalCard.outerHTML = createModal(pet)
}

function createModal({
  img,
  name,
  type,
  breed,
  description,
  age,
  inoculations,
  diseases,
  parasites
}) {
  return ` <div class="modal__close">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z"
        fill="#292929" />
    </svg>
  </div>
    <div class="modal__card">
    <div class="modal__image">
      <img src="${img}" alt="pet-image">
    </div>
    <div class="modal__content">
      <div class="modal__title">${name}</div>
      <div class="modal__subtitle">${type} - ${breed}</div>
      <div class="modal__info">${description}</div>
      <ul class="modal__list">
        <li class="modal__item">
          <div class="item__dot"></div>
          <div class="item__text">
            <b>Age:</b> ${age}</div>
        </li>
        <li class="modal__item">
          <div class="item__dot"></div>
          <div class="item__text">
            <b>Inoculations:</b> ${inoculations.join(', ')}</div>
        </li>
        <li class="modal__item">
          <div class="item__dot"></div>
          <div class="item__text">
            <b>Diseases:</b> ${diseases.join(', ')}</div>
        </li>
        <li class="modal__item">
          <div class="item__dot"></div>
          <div class="item__text">
            <b>Parasites:</b> ${parasites.join(', ')}</div>
        </li>
      </ul>
    </div>
  </div>`
}