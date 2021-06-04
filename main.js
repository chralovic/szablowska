'use strict'




const galleryImgArr =  document.querySelectorAll('.content-section__gallery-item');
const closeBtn = document.querySelector('#close-btn');
const modalOverlayLayer = document.querySelector('#modal-overlay');


for (let i of galleryImgArr) {
    i.addEventListener('click', ()=> {
    i.classList.add("modal");
    closeBtn.classList.remove("invisible");
    modalOverlayLayer.classList.add("modal-overlay")

    closeBtn.addEventListener('click', ()=> {
        i.classList.remove("modal");
        closeBtn.classList.add("invisible");
        modalOverlayLayer.classList.remove("modal-overlay")
    })
  })

}



