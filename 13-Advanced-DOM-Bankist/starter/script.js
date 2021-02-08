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

header.append(message);

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

//styles that are only inline sytles or created styles in js can by loged to the console. 
message.style.backgroundColor = '#444';
message.style.width = '110%';

// you can still get the style if you want too
console.log(getComputedStyle(message))

// now when you take a style from the getComputedStyle it comes to you as a string. To get the style from the string you can use the parseInt or parseFloat function.

// header.style.height = Number.parseFloat(getComputedStyle(header).height,10) - 20 + 'px';

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// set the properties
document.documentElement.style.setProperty('--color-primary','orange');

//attributes
const logo = document.querySelector('.nav__logo');
console.log (logo.alt);
console.log(logo.className);
console.log(logo.src);
console.log(logo.getAttribute("src"));
console.log(document.querySelector('.twitter-link').getAttribute('href'));
console.log(document.querySelector('.twitter-link').href);

//data attributes. special type of attributes that start with data
console.log(document.querySelector('.nav__logo').dataset.versionNumber);

//classes 

// logo.classList.add('c',);
// logo.classList.remove();
// logo.classList.toggle();
// console.log(logo.classList.contains('nav__logo'))  // returns true

const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionScrollTo = document.querySelector('#section--1');
// console.log(sectionScrollTo);
// console.log(btnScrollTo);
btnScrollTo.addEventListener('click',function(e){
  //the getboundingclientrect returns a dom rectangle element that has x y axis and a bunch of other properties. the y axis is the px distance between the element and the top of the viewport
  const s1coords = sectionScrollTo.getBoundingClientRect();
  // console.log(`section 1 cordinates`);
  // console.log(s1coords);
  const btnScrollCoords = e.target.getBoundingClientRect();
  // console.log(`the buttons cordinates`);
  // console.log(btnScrollCoords);
  // console.log(`this is the scrolling cordinates`);

  // the window page x/y offset gives the scroll value from top to the scrolling point 
  console.log(window.pageYOffset);

  window.scrollTo(s1coords.x,s1coords.y);
});
