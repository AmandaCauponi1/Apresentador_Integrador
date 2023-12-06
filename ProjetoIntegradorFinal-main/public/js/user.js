const adicionar = document.querySelector('#signUp')
const remover = document.querySelector('#signIn')
const container = document.querySelector('#container')

adicionar.addEventListener('click', () => {
    container.classList.add('right-panel-active')
})

remover.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
})