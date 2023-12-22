
const year = document.querySelector('[year]');
const month = document.querySelector('[month]');
const day = document.querySelector('[day]')
const form = document.querySelector('.form')
const btn = document.querySelector('.button-submit')
const error = document.querySelectorAll('.error')
const labels = document.querySelectorAll('.form-text')

   const span = document.querySelectorAll('[date]')
   const fecha = new Date()

   let currentDay = fecha.getDate();
   let currentMonth = fecha.getMonth() + 1;
   let currentYear = fecha.getFullYear();

const typeOfError = [
    "",
    "This field is required",
    "Must be a valid day",
    "Must be a valid month",
    "Must be a valid year",
    "Must be a valid date"
];

const errorState = (numberOfError, typeOfDate, typeOfError, color) => {
    error[numberOfError].innerHTML = typeOfError;
    labels[numberOfError].style.color = color;
    typeOfDate.style.borderColor = color;
}

const isDayCorrect = () => {
   if(day.value == ""){
       errorState(0, day, typeOfError[1], "#ff5757");
       return false;
   }
   else if(day.value <= 0 || day.value > currentDay){
       errorState(0, day, typeOfError[2], "#ff5757");
       return false;
   }

   else{
       errorState(0, day, typeOfError[0], "");
       return true;
   }
}

const isMonthCorrect = () => {
   if(month.value == ""){
       errorState(1, month, typeOfError[1], "#ff5757");
       return false;
   }
   else if(month.value <= 0 || month.value > 12){
       errorState(1, month, typeOfError[3], "#ff5757");
       return false;
   }

   else{
       errorState(1, month, typeOfError[0], "");
       return true;
   }
}

const isYearCorrect = () => {
   if(year.value == ""){
       errorState(2, year, typeOfError[1], "#ff5757");
       return false;
   }
   else if(year.value > currentYear){
       errorState(2, year, typeOfError[4], "#ff5757");
       return false;
   }
   else if(year.value == currentYear && month.value > currentMonth){
       errorState(1, month, typeOfError[3], "#ff5757");
       return false;
   }
   else if(year.value == currentYear && month.value == currentMonth && day.value > currentDay){
       errorState(0, day, typeOfError[2], "#ff5757");
       return false;
   }
  
   else{
       errorState(2, year, typeOfError[0], "");
       return true;
   }
}

const result = () =>{

   span[0].textContent = (fecha.getFullYear() - year.value)
   span[1].textContent =  (fecha.getMonth() + 1 - month.value)
   span[2].textContent =  (fecha.getDate() - day.value)
}

function onSubmit (event){
   event.preventDefault()
   isDayCorrect();
   isMonthCorrect();
   isYearCorrect();

   if(isDayCorrect() && isMonthCorrect() && isYearCorrect()){
      result()
   }
  


}

// form.addEventListener('submit', function(e){

//    e.preventDefault()
   
// })


btn.addEventListener('click',onSubmit)

