// initial commit

// Sticky Scroll NavBar

window.onscroll = function () {
  myFunction();
};

var navBar = document.getElementsByClassName('.navBar');
var sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

var mainForm;
