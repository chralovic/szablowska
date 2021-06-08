'use strict'




const galleryImgArr =  document.querySelectorAll('.content-section__gallery-item');
const closeBtn = document.querySelector('#close-btn');
const modalOverlayLayer = document.querySelector('#modal-overlay');
const leftBtn =  document.querySelector('#btn-left');
const rightBtn =  document.querySelector('#btn-right');

/*

for (let i of galleryImgArr) {
    i.addEventListener('click', ()=> {
    i.classList.add("modal");
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay");
    rightBtn.classList.remove("invisible");
    leftBtn.classList.remove("invisible");

   


    closeBtn.addEventListener('click', ()=> {
      currentImg.classList.remove("modal");
        closeBtn.classList.add("invisible");
        modalOverlayLayer.classList.remove("modal-overlay")
        rightBtn.classList.add("invisible");
        leftBtn.classList.add("invisible");
    })
  })
}
*/


let counter = 0;
let currentImg = galleryImgArr[counter];

if (counter == 0) {
  currentImg.addEventListener('click', ()=> {
    currentImg.classList.add("modal");
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay");
    rightBtn.classList.remove("invisible");
  })
}




  rightBtn.addEventListener('click', ()=> {
    currentImg.classList.remove("modal");
    currentImg = galleryImgArr[counter+1];
    if (counter+1 > 0) {
      leftBtn.classList.remove("invisible");
    }
    currentImg.classList.add("modal");
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay");
    rightBtn.classList.remove("invisible");
    return counter = counter+1;

  })

  leftBtn.addEventListener('click', ()=> {
    currentImg.classList.remove("modal");
    currentImg = galleryImgArr[counter-1];
    currentImg.classList.add("modal");
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay");
    rightBtn.classList.remove("invisible");
    return counter = counter-1;
  })








/*
    galleryImgArr.forEach(img => {



    
      img.addEventListener('click', ()=> {
        img.classList.add("modal");
        closeBtn.classList.remove("invisible");
        modalOverlayLayer.classList.add("modal-overlay");
        rightBtn.classList.remove("invisible");
        leftBtn.classList.remove("invisible")
      });
    })
*/




    closeBtn.addEventListener('click', ()=> {
      currentImg.classList.remove("modal");
        closeBtn.classList.add("invisible");
        modalOverlayLayer.classList.remove("modal-overlay")
        rightBtn.classList.add("invisible");
        leftBtn.classList.add("invisible");
    })

