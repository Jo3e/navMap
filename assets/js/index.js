const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


// add event to our toggles
burger.addEventListener('click', () => {
   if (menu.classList.contains('hidden')) {
       menu.classList.remove('hidden');
   } else {
       menu.classList.add('hidden');
   } 
});

