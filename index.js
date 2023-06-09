const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.getElementById("hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
/*
hamburger.addEventListener("click", toggleMenu());
*/
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu());
  }
)

///VIDEO MODAL

const btn = document.getElementById('btn')
const videoContainer = document.getElementById('video-container')

const close = document.getElementById('close');

btn.addEventListener('click', () => {
  videoContainer.classList.add('show');
})

close.addEventListener('click', () => {
  videoContainer.classList.remove('show');
})

///VIDEO MODAL

const btn2 = document.getElementById('btn2');
const videoContainer2 = document.querySelector('.video-container2');

const close2 = document.getElementById('close2');

btn2.addEventListener('click', () => {
  videoContainer2.classList.add('show');
  console.log('click');
})

close2.addEventListener('click', () => {
  videoContainer2.classList.remove('show');
})

