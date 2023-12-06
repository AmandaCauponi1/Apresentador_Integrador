let numero = 0;
const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{

  
    numero++;
    document.getElementById('number').innerHTML = numero;
})