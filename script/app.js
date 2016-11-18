document.addEventListener('DOMContentLoaded',function(){

  // zadanie 1 - menu
  var aboutCompany = document.getElementById("aboutCompany");
  var menu = document.querySelector("#hiddenMenu");

  menu.classList.add("hide");

  aboutCompany.addEventListener("mouseover", function(e) {
    menu.classList.remove("hide");
  });

  aboutCompany.addEventListener("mouseout", function(e) {
    menu.classList.add("hide");
  });


  // zadanie 2 - images
  var chosenImage = Array.from(document.querySelectorAll(".art2tile"));

  chosenImage.forEach(function(element) {

    var chosenRectangle = element.querySelector(".rectangle");

    element.addEventListener("mouseover", function(e) {
      chosenRectangle.classList.add("hide");
    });

    element.addEventListener("mouseout", function(e) {
      chosenRectangle.classList.remove("hide");
    });

});


  // zadanie 3 - slider
  var nextBtn = document.querySelector("#arrowr");
  var prevBtn = document.querySelector("#arrowl");
  var slides = document.querySelectorAll("#art2small li");

  var actualSlide = 0;

  slides[actualSlide].classList.add("visible");

  nextBtn.addEventListener("click", function(){

    slides[actualSlide].classList.remove("visible");
    actualSlide++;
    if(actualSlide >= slides.length){
      actualSlide = 0;
    }
    slides[actualSlide].classList.add("visible");
  });

  prevBtn.addEventListener("click", function(){

    slides[actualSlide].classList.remove("visible");
    actualSlide--;
    if(actualSlide < 0){
      actualSlide = slides.length-1;
    }
    slides[actualSlide].classList.add("visible");
  });

});
