window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled !== 0) {
    // Если нет, то делаем его полностью видимым
    document.querySelector(".header").style.backgroundColor = "#212529";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
};


welcom.addEventListener("click", function(){
  window.scrollBy(0, window.innerHeight);
})

