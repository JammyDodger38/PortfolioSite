const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescription = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabBlockImage = document.querySelectorAll('.feature__img')
const documentTitle = document.querySelector('head > title')

documentTitle.textContent = tabButtons[0].textContent

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (e) => {
        documentTitle.textContent = e.target.textContent
        const dataValue = tabButton.dataset.tabsHandler

        changeContent(tabDescription, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(tabBlockImage, dataValue)

        tabButtons.forEach(btn => {
            if (btn === e.target) {
                e.target.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
        
    })
})