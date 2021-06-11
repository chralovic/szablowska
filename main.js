'use strict'

const galleryImgArr =  document.querySelectorAll('.content-section__gallery-item');
const closeBtn = document.querySelector('#close-btn');
const modalOverlayLayer = document.querySelector('#modal-overlay');
const leftBtn =  document.querySelector('#btn-left');
const rightBtn =  document.querySelector('#btn-right');
const paginationLeft = document.querySelector('#pagination__left');
const paginationRight = document.querySelector('#pagination__right');
const pagesArr = [ 'https://shablowska.com/a', 'https://shablowska.com/b', 'https://shablowska.com/c', 'http://127.0.0.1:5500/pages/project01.html'];



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



let currentPageIndex = pagesArr.indexOf(window.location.href);
let previousPage = "location.href='" + pagesArr[currentPageIndex-1] + "'";
let nextPage = "location.href='" + pagesArr[currentPageIndex+1] + "'";


function pageChecker() {
  let theLastPage = pagesArr[pagesArr.length];
  let theFirstPage = pagesArr[0];

  if (currentPageIndex == 0) {
    previousPage = "location.href='" + theLastPage + "'";
  };

  if (currentPageIndex == theLastPage) {
    nextPage == "location.href='" + theFirstPage + "'";
  }
}

pageChecker();

paginationRight.setAttribute('onclick', nextPage );
paginationLeft.setAttribute('onclick', previousPage);


























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

document.addEventListener('keydown', arrowKeysHandler)
*/


