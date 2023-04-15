const catalogueBox = document.querySelectorAll('.catalogueBox')
const slidebtn = document.querySelectorAll('.slidebtn button')
const slidenumber = document.querySelector(".numberOfSlides")
let slideIndex = 1
showNumber(slideIndex)
currentslide(slideIndex)
slidebtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        if(btn.classList.contains('left')){
            slideIndex--
            showSlide(slideIndex)
            showNumber(slideIndex)
        }
        if (btn.classList.contains('right')) {
            slideIndex++
            showSlide(slideIndex)
            showNumber(slideIndex)
        }
    })
})
function currentslide(n){
    showSlide(slideIndex=n)
}
function showNumber(n) {
    slidenumber.innerText = `${n} / ${catalogueBox.length}`
}
function showSlide(n){
    let i = 0
    const slides = document.querySelectorAll('.catalogueBox')
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for(i =0 ;i<slides.length;i++){
        slides[i].classList.remove('show')
    }
    slides[slideIndex-1].classList.add('show')
}
