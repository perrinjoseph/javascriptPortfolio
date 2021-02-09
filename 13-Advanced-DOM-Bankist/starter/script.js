'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const somenodes = document.querySelectorAll('.section');
const all = document.getElementsByTagName('button');
const classElemets = document.getElementsByClassName('btn');
const navItems = document.querySelectorAll('.nav__item');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionScrollTo = document.querySelector('#section--1');

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

console.log(document.documentElement);
console.log(document.body);

console.log(all);
console.log(somenodes);
console.log(classElemets);
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

// console.log(sectionScrollTo);
// console.log(btnScrollTo);
btnScrollTo.addEventListener('click',function(e){
  //the getboundingclientrect returns a dom rectangle element that has x y axis and a bunch of other properties. the y axis is the px distance between the element and the top of the viewport
  //all elements with .bounding rectangle is distance from viewport to the element not begening of the page.
  //the scroll, which is window.pageYofset is from scrolling point of the view to the top of the page
  const s1coords = sectionScrollTo.getBoundingClientRect();
  // console.log(`section 1 cordinates`);
  // console.log(s1coords);
  const btnScrollCoords = e.target.getBoundingClientRect();
  // console.log(`the buttons cordinates`);
  // console.log(btnScrollCoords);
  // console.log(`this is the scrolling cordinates`);

  // the window page x/y offset gives the scroll value from top to the scrolling point 
  // console.log(window.pageYOffset);
  // these x, y vallues are realtive to the view port not the top of the browser.
 
  //this is done for  just navigating
  // console.log(s1coords.y);
  // window.scrollTo(s1coords.x + window.pageXOffset,s1coords.y+window.pageYOffset);

// /* --- old school way to make it smooth scroll enter an object with left top and behavior -- */
// /*  window.scrollTo({
//     left: s1coords.x + window.pageXOffset,
//     top: s1coords.y+window.pageYOffset,
//     behavior: 'smooth'
//   });

// });
// */
const s1 = s1coords.y;

//this only works in modern browsers.
sectionScrollTo.scrollIntoView({behavior:'smooth'});
})

const randomInt = (min,max)=> Math.floor(Math.random() *(max-min +1) + min);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor());

/* ------------------------ NAVBAR SMOOTH NAVIGATION WITHOUT DELIGATION------------------------ */
//FOR LOOP ISNT AFFECTIVE HERE IT WILL FRY THE SYSTEM INSTEAD USE DELIGATION.
/* ---------------------------- NEFFICIENT METHOD --------------------------- */

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();

// //REGULAR METHOD THIS ISNT THAT BAD. THE ONLY PROBLEM IS IT IS INSIDE A FOR LOOP SO EVERYTIME IT CREATED A NEW EVNT LISTENER FOR EVERY CHILD ELEMENT. THIS CAN AFFECT PERFORMACE ISSUES. 
//     //easier method
//     // if(el.textContent === 'Features')
//     // {
//     //   const section1 = document.querySelector('#section--1');
//     //   section1.scrollIntoView({behavior: 'smooth'});
//     // }
//     // else if(el.textContent === 'Operations')
//     // {
//     //   const section2 = document.querySelector('#section--2');
//     //   section2.scrollIntoView({behavior: 'smooth'});
//     // }
//     // else if (el.textContent === 'Testimonials')
//     // {
//     //   const section3 = document.querySelector('#section--3');
//     //   section3.scrollIntoView({behavior: 'smooth'});
//     // }
    
//     //clever method
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })
/* ------------------------ NAVBAR SMOOTH NAVIGATION - DELIGATION------------------------ */
document.querySelector('.nav__links').addEventListener('click',function(e)
{
  e.preventDefault();
  if(e.target.classList.contains('nav__link'))
  {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
    
  }
});





/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


/* -------------------------------------------------------------------------- */
/*                                PRACTICE CODE                               */
/* -------------------------------------------------------------------------- */



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



//an event is basically an signal hthat has been generated  by a dom node.
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(){
//   alert(`grea you are reading the heading tag.`);
// });

/* --------------------- RANDOM NUMBER GENERATOR FOR RGB -------------------- */
//rgb(255,255,255)


/* ---------------------------- EVENT PROPOGATION --------------------------- */

//events in Javascript are executed differently.
// Lets say for instance, we click on a link. The DOM immidiately generates a click event. that click is not generated at the anchor element, it is generated at the top of the root document. The target is what is created at the target element. anyways, this is where the capturing phase takes place. The generated click event traverses down the DOM tree till it finds the target element or where ever the target was created. Once it finds the targeted element it fires the function that is associated with that event at the target, if it is at the target location then it will fire there itself and then bubble up to the top of the document as if it happend in every parent element. IF the event listener is not available at the target then the event bubbles up as though it was created in every parent elemnt and if for instance we created an event listener at a parent element then that event will be fired as well. 

// document.querySelector('.nav__link').addEventListener('click',function(e){
// this.style.backgroundColor= randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor= randomColor();
// });

// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor= randomColor();
// });


/* ----------------------------- DOM TRAVERSING ----------------------------- */
// DOM TRAVERSING IS MOVING ACROSS THE DOM TREE FROM CHILD TO SIBLINGS OR PASRENT TO SIBLINGS AND HOW EVER YOU WANT TO TRAVERSE IN THE DOM TREE.

const h1 = document.querySelector('h1');
const allLinks = document.querySelectorAll('.nav__link');
console.log(h1);
console.log(h1.parentElement);
console.log(h1.children);
h1.closest('.header').style.background ='orange';
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
//cannot use forEach on a html collection. You can only use it on interables. 
//traverse to find all the childeren class of a far away parent class called header.
console.log(h1.closest('.header').children);
// [...h1.closest('.header').children].forEach((el)=>el.style.transform = 'scale(0.5)')
// console.log(allLinks);



