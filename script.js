const cardItems = document.querySelectorAll('.card-item');

const removeActiveClasses = () => {
    cardItems.forEach((item) => {
        item.classList.remove('active')
    })
}

cardItems.forEach((item) => {
    item.addEventListener('click', () => {
        removeActiveClasses()
        item.classList.add('active')
        cardItemsNotActive = document.querySelectorAll('.card-item:not(.active)')
    })
})