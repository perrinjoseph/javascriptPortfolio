'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(event => event.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* ------------------------------ PRACTICE CODE ----------------------------- */

console.log(document.documentElement);
console.log(document.body);
const somenodes = document.querySelectorAll('.section');
const all = document.getElementsByTagName('button');
console.log(all);
console.log(somenodes);
const classElemets = document.getElementsByClassName('btn');
console.log(classElemets);
const navItems = document.querySelectorAll('.nav__item');
console.log(navItems);

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent= `We use cookies for improves functionality and analytics.`;
message.innerHTML = 'We used Cookig to improve functionality and analytics. <button class="btn btn--close-cookie">Got it! </button>';

//prepending add the newly craeted element as the first child of the parent element that is being refered too. In this case 'header is the parent element'

header.prepend(message);

// //the reason why the dom did not show both the prepend and the append is because this is a live htmlcollection, and live elements cannot exist in different places at the sme time. In order to do this you fisr have to copy the element. using the cloneNode(true);

// header.append(message.cloneNode(true));
// header.append(message);
// header.before(message);
// header.after(message);
// header.classList.remove('btn btn--close-cookie');
//deleting elements

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
});



