let body = document.querySelector('body')
console.log(body.clientHeight)
let slideCounter = 1;
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slide1 = document.getElementById("d1");
let slide2 = document.getElementById("d2");
let slide3 = document.getElementById("d3");
let dot1 = document.getElementById("span1");
let dot2 = document.getElementById("span2");
let dot3 = document.getElementById("span3");
let text = document.getElementById("text");
console.log(slideCounter);

function updatePhoto(){
    if (slideCounter === 1) {
        slide1.style.display='inline-block'
        slide2.style.display='none'
        slide3.style.display='none'
      } else if (slideCounter === 2) {
        slide1.style.display='none'
        slide2.style.display='inline-block'
        slide3.style.display='none'
      } else {
        slide1.style.display='none'
        slide2.style.display='none'
        slide3.style.display='inline-block'
      }
      
    }


function updateText() {
    if (slideCounter === 1) {
      text.innerText = "1/3";
    } else if (slideCounter === 2) {
      text.innerText = "2/3";
    } else {
      text.innerText = "3/3";
    }
    
  }

next.addEventListener("click", function () {
  if (slideCounter < 3) {
    slideCounter += 1;
    console.log(slideCounter);
  } else if (slideCounter >= 3) {
    slideCounter = 1;
    console.log(slideCounter);
  } else {
  }
  updateText()
  updatePhoto()
});

prev.addEventListener("click", function () {
  if (slideCounter == 1) {
    slideCounter = 3;
    console.log(slideCounter);
  } else {
    slideCounter -= 1;
    console.log(slideCounter);
  }
  updateText()
  updatePhoto()
});

dot1.addEventListener('click', function(){
    slideCounter = 1 
    updateText()
    updatePhoto()
})

dot2.addEventListener('click', function(){
    slideCounter = 2
    updateText()
    updatePhoto() 
})

dot3.addEventListener('click', function(){
    slideCounter = 3
    updateText()
    updatePhoto() 
})
