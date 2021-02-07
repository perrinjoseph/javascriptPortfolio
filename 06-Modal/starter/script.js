'use strict';

const modals  = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
document.addEventListener('keydown',function(e){
    console.log(e);
});
const removeModal = function()
{
    modals.classList.add('hidden');
    overlay.classList.add('hidden');
    
}
const createModals = function ()
{   
    modals.classList.remove('hidden');
    overlay.classList.remove('hidden');
    overlay.addEventListener('click',removeModal);
}

for(let x =0; x<btnOpenModal.length;x++)
{
    btnOpenModal[x].addEventListener('click',createModals);
    btnCloseModal.addEventListener('click',removeModal);
}

