const designText = document.querySelector('.design-text')
const modal = document.querySelector('.modal')

modal.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.closest('.modal__close') || e.target.closest('.overlay')) {
        modal.classList.add('hidden')
    }
})

designText.addEventListener('click', (e) => {
    if (e.target.closest('.more')) {
        modal.classList.remove('hidden')
    }
})