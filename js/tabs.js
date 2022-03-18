const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescription = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabBlockImage = document.querySelectorAll('.feature__img')
const tabTitle = document.querySelectorAll('.design__title')



const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

const changeTitle = (array) => {
    array.forEach(item => {
        if (!item.classList.contains('hidden')) {
            document.title = item.textContent
        }
    });
}

changeTitle(tabTitle)

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (e) => {
        const dataValue = tabButton.dataset.tabsHandler
        
        changeContent(tabDescription, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(tabBlockImage, dataValue)

        tabTitle.forEach(item => {
            item.classList.toggle('hidden')
        })
        changeTitle(tabTitle)
        
        tabButtons.forEach(btn => {
            if (btn === e.target) {
                e.target.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
        
    })
})