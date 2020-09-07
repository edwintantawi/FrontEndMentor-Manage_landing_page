// scroll nav effect
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("nav").addClass("fillnav");
    $("#navbar-mobile").addClass("fillnav-menu");
  } else {
    $("nav").removeClass("fillnav");
    $("#navbar-mobile").removeClass("fillnav-menu")
  }
});


// ham menu
const navbarMobile = document.querySelector('#navbar-mobile')
const hamToggler = document.querySelector('#ham-toggle');
const toggleIcon = hamToggler.querySelector('img');

const blur = document.querySelector('.blur');

const navLink = navbarMobile.querySelectorAll('.nav-link')
navLink.forEach(function (link) {
  link.addEventListener('click', function () {

    navbarMobile.className = 'collapse';
    toggleIcon.classList.toggle('close');
    checkState();

  })
})

hamToggler.addEventListener('click', function () {
  toggleIcon.classList.toggle('close');
  checkState();
});


function checkState() {
  if (toggleIcon.className == 'close') {
    toggleIcon.setAttribute('src', "/src/images/icon-close.svg");
    blur.style.display = 'block';
    setTimeout(function () {
      blur.style.opacity = '1';
    }, 50);
    document.body.style.overflow = 'hidden';

  } else {
    toggleIcon.setAttribute('src', "/src/images/icon-hamburger.svg");
    blur.style.display = 'none';
    blur.style.opacity = '0';
    document.body.style.overflow = 'auto';
  }
}


// form
const form = document.querySelector('form');
const error = form.querySelector('.error');
const input = form.querySelector('input');

form.addEventListener('submit', function (e) {
  const inputVal = input.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputVal)) {
    error.style.display = 'none';
    input.classList.remove('inputError');
  } else {
    input.classList.add('inputError');
    error.style.display = 'block';
  }

  e.preventDefault();
})




// 
$(document).ready(function () {
  console.log('ok')
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoWidth: true,
    center: true,
    margin: 0
  });
  $(".owl-carousel").trigger('to.owl.carousel', [1, 0]);


});