// Меню

const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.nav-mobile')
const bgMenu = document.querySelector('.menu__mobile')
const body = document.body

burger.addEventListener('click', function() {
  burger.classList.toggle('close')
  menu.classList.toggle('active')
  body.classList.toggle('noscroll')
  bgMenu.classList.toggle('dark')
})

const links = document.querySelectorAll('.nav__item-mobile')

links.forEach((menuLink) => {
  menuLink.addEventListener('click', function() {
    burger.classList.remove('close')
    menu.classList.remove('active')
    body.classList.remove('noscroll')
    bgMenu.classList.remove('dark')
  })
})

// Слайдер

const swiper = new Swiper('.swiper', {
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button',
    }
  });