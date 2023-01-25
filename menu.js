let menuBtn = document.querySelector(".menu__icon");
let closeBtn = document.querySelector(".close__btn");

let menu = document.querySelector(".header__menu");

menuBtn.addEventListener("click", ()=>{
  menu.style.display = "block";
  menuBtn.style.display = "none";
})

closeBtn.addEventListener("click", ()=>{
  menu.style.display = "none";
  menuBtn.style.display = "block";
})