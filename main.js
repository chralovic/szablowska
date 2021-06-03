'use strict'




const galleryImgArr =  document.querySelectorAll('.content-section__gallery-item');
const closeBtn = document.querySelector('#close-btn');



for (let i of galleryImgArr) {
    i.addEventListener('click', ()=> {
    i.classList.add("modal");
    closeBtn.classList.remove("invisible");

    closeBtn.addEventListener('click', ()=> {
        i.classList.remove("modal");
        closeBtn.classList.add("invisible");
    })
  })

}



