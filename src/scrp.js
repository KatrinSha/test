
const images = document.querySelectorAll('._slider-box ');
const sliderLine = document.querySelector('.education__slider-line');


let count = 0;
let width;

     
function init() {

  width = document.querySelector('.education__slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
console.log(width)
  images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

init();
window.addEventListener('resize', init);

document.querySelector('.slider_button-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider_button-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
const welcom = document.querySelector('.34');
welcom.addEventListener("click", function(){ alert("Hello World!"); });
document.querySelector('.ty34').onclick = () => {
    // переместим в начало страницы
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: 'smooth'
    });
  }


  document.querySelector('.footer__button').onclick = () => {
    // переместим в начало страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }