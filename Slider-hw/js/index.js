let block = document.querySelector(".display-main");
let userInput = document.querySelector(".input-part");
let message = document.querySelector(".message");
let enterBtn = document.querySelector(".enter-button");
let show = document.querySelector(".container");
let images = document.querySelectorAll(".gallery a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .close .inner img");
let closeIcon = document.querySelector(".close-icon");
let leftBtn = document.querySelector(".arrows .left");
let rightBtn = document.querySelector(".arrows .right");


// FUNCTIONS
function enterFunction(){
    message.innerHTML = "Welcome this page " + userInput.value;
}
function blockFunction(){
    block.style.display = "none";
}
function hideFunction(){
  show.style.display = "none";
}
console.log(hideFunction());
function showFunction(){
show.style.display = "revert"
}
function openFunction() {
  popup.style.display = "flex";
}

function closeFunction() {
  popup.style.display = "none";
}
function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {

  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }

  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.children.length;

  console.log(length);
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}

// EVENTS
enterBtn.addEventListener("click", function(){
    enterFunction();
    blockFunction();
    showFunction();
})
images.forEach((image) => {
    image.addEventListener("click", function (e) {
        e.preventDefault();
        openFunction();
        changableImage(this);
        this.classList.add("showSlide");
        console.log(this);
    });
});

rightBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

leftBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

closeIcon.addEventListener("click", function () {
    closeFunction();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    closeFunction();
  }
});

document .addEventListener("keydown", (e) =>{
  if (e.code === "Enter") {
    enterFunction();
    blockFunction();
    showFunction();
  }
})
popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    closeFunction();
  }
});