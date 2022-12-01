const cards = document.querySelectorAll('.card')


const getTheMaxHeight = (cards, maxHeight) => {
    cards.forEach((card) => {
        if (card.clientHeight > maxHeight) {
            maxHeight = card.clientHeight
        }
    })
    return maxHeight
}

let maxCardHeight = getTheMaxHeight(cards, 0)

document.onreadystatechange = () => {
    cards.forEach((card) => {
        console.log(maxCardHeight)
        card.style.height = `${maxCardHeight}px`
    })
}