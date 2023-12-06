const btn_company = document.getElementById('btn_company')
const box_none = document.getElementById('box_none')
const form_company = document.getElementById('form_company')


btn_company.addEventListener('click', () => {
    box_none.style.display = 'none'
    form_company.style.display = 'flex'
})

