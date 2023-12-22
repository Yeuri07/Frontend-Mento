

const year = document.querySelector('[year]');
const month = document.querySelector('[month]');
const day = document.querySelector('[day]')
const form = document.querySelector('.form')
const btn = document.querySelector('.button-submit')


function onSubmit (){
    const span = document.querySelectorAll('[date]')
    const fecha = new Date()

   
       span[0].textContent = (fecha.getFullYear() - year.value)
       span[1].textContent =  (fecha.getMonth() + 1 - month.value)
       span[2].textContent =  (fecha.getDate() - day.value)
 

}

form.addEventListener('submit', function(e){
   e.preventDefault()
   
})


btn.addEventListener('click',onSubmit)
