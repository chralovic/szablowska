'use strict'

const galleryImgArr =  document.querySelectorAll('.content-section__gallery-item');
const closeBtn = document.querySelector('#close-btn');
const modalOverlayLayer = document.querySelector('#modal-overlay');
const leftBtn =  document.querySelector('#btn-left');
const rightBtn =  document.querySelector('#btn-right');



function leftPressed() {
  galleryImgArr[counter].classList.remove("modal");
  counter--;
  galleryImgArr[counter].classList.add("modal");
  if (counter == 0) {
    leftBtn.classList.add("invisible");
    document.removeEventListener('keydown', arrowKeysHandler)
  };
}

function rightPressed() {
  galleryImgArr[counter].classList.remove("modal");
  counter++;
  galleryImgArr[counter].classList.add("modal");
  if (counter !== 0) {
    leftBtn.classList.remove("invisible");
  };
  if (counter == galleryImgArr.length-1) {
     rightBtn.classList.add("invisible");
  }
}

/*
function arrowKeysHandler(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed();
        break;
    case 39:
      rightPressed();
        break;
}
} 
*/

let counter = 0;



galleryImgArr.forEach( e=> {
  e.addEventListener('click', ()=> {
    e.classList.add("modal");
    counter = Array.prototype.indexOf.call(galleryImgArr, e);
    if (counter !== 0) {
      leftBtn.classList.remove("invisible");
      
    };
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay");
    rightBtn.classList.remove("invisible");
})})


closeBtn.addEventListener('click', ()=> {
  galleryImgArr[counter].classList.remove("modal");
    closeBtn.classList.add("invisible");
    modalOverlayLayer.classList.remove("modal-overlay")
    rightBtn.classList.add("invisible");
    leftBtn.classList.add("invisible");
    counter = 0;
})

rightBtn.addEventListener('click', rightPressed)
leftBtn.addEventListener('click', leftPressed)

/*
document.addEventListener('keydown', arrowKeysHandler)
*/


