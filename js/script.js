//dropdown
const featuresButton = document.querySelector('#feature')
const companyButton = document.querySelector('#comp')
const featureBox = document.querySelector('.features')
const compBox = document.querySelector('.company')
const arrow = document.querySelectorAll('.arrow')

featuresButton.addEventListener('click', () => {
    if(featureBox.style.display === 'block'){
        arrow[0].setAttribute('src', './images/icon-arrow-down.svg')
        featureBox.style.display = 'none'
    }
    else{
        arrow[0].setAttribute('src', './images/icon-arrow-up.svg')

        featureBox.style.display = 'block'
    }
})

companyButton.addEventListener('click', () => {
    if(compBox.style.display === 'block'){
        arrow[1].setAttribute('src', './images/icon-arrow-down.svg')
        compBox.style.display = 'none'
    }
    else{
        arrow[1].setAttribute('src', './images/icon-arrow-up.svg')
        compBox.style.display = 'block'
    }
})

//toggler
const toggleContainer = document.querySelector('.toggler')
const toggleIcon = document.querySelector('.toggle-icon')
const menu = document.querySelector('.menu')

toggleIcon.addEventListener('click', () => {
    if(menu.style.right === '-16px'){
        toggleIcon.setAttribute('src', './images/icon-menu.svg')
        document.querySelector('*').style.overflowY = 'unset'
        document.body.style.background = 'hsl(0, 0%, 98%)'
        document.querySelector('nav').style.background  = 'hsl(0, 0%, 98%)'
        menu.style.right = '-500px'
    }else{
        toggleIcon.setAttribute('src', './images/icon-close-menu.svg')
        document.querySelector('*').style.overflowY = 'hidden'
        document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
        document.querySelector('nav').style.background  = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'
        menu.style.right = '-16px'
    }
})

