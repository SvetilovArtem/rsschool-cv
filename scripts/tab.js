const autumnBtn = document.querySelector('.section-portfolio__item-btn-autumn')
const winterBtn = document.querySelector('.section-portfolio__item-btn-winter')
const springBtn = document.querySelector('.section-portfolio__item-btn-spring')
const summerBtn = document.querySelector('.section-portfolio__item-btn-summer')

const portfolioImage = document.querySelectorAll('.portfolio-item')

const portfolioBtn = document.querySelectorAll('.section-portfolio__item-btn')

autumnBtn.addEventListener('click', function() {
    portfolioImage.forEach((image, index) => image.src = `./img/autumn/${index + 1}.jpg`)
    
})
winterBtn.addEventListener('click', function() {
    portfolioImage.forEach((image, index) => image.src = `./img/winter/${index + 1}.jpg`)
    
})
springBtn.addEventListener('click', function() {
    portfolioImage.forEach((image, index) => image.src = `./img/spring/${index + 1}.jpg`)
    
})
summerBtn.addEventListener('click', function() {
    portfolioImage.forEach((image, index) => image.src = `./img/summer/${index + 1}.jpg`)
})

