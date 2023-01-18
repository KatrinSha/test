window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled !== 0) {
    // Если нет, то делаем его полностью видимым
    document.querySelector(".header").style.backgroundColor = "#212529";
    console.log("test")
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }

};


welcom.addEventListener("click", function(){
  window.scrollBy(0, window.innerHeight);
})

const burger_menu = document.querySelector(".navigation");
const burger_menu_button = document.querySelector(".header__hamburger");
const hamburger__line = document.querySelector(".hamburger__line");

function tooggleMenu(){
  console.log("test")
    burger_menu.classList.toggle('active');
    hamburger__line.classList.toggle('active');
    console.log('test')
}
burger_menu_button.addEventListener("click", tooggleMenu);