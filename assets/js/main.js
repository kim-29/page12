/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', ()=>{navMenu.classList.add('show-menu')})
navClose.addEventListener('click', ()=>{navMenu.classList.remove('show-menu')})

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
const clickedMenu=()=>{
  navMenu.classList.remove('show-menu');
}
navLinks.forEach(navLink=>{navLink.addEventListener('click',clickedMenu)})

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__img-2',1.2,{opacity:0,y:200,delay:.1})
gsap.from('.home__img-3',1.2,{opacity:0,y:200,delay:.5})
gsap.from('.home__data',1.2,{opacity:0,y:-60,delay:.1})
gsap.from('.home__bird-1',1.2,{opacity:0,x:-80,delay:1.1})
gsap.from('.home__bird-2',1.2,{opacity:0,x:80,delay:1.2})
gsap.from('.home__img-1',1.2,{opacity:0,y:200,delay:1.2})
gsap.from('.home__img-4',1.2,{opacity:0,x:200,delay:1.3})