document.addEventListener('DOMContentLoaded',function(){

  // zadanie 1 - menu
  var aboutCompany = document.querySelector(".leftmenu");
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

    if(chosenRectangle) {
      element.addEventListener("mouseover", function(e) {
        chosenRectangle.classList.add("hide");
      });

      element.addEventListener("mouseout", function(e) {
        chosenRectangle.classList.remove("hide");
      });
    }

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


  // zadanie *

  // deklaracja zmiennych pomocniczych
    
  // suma ceny krzesla
  var sumChair = 0;
  // suma koloru krzesla
  var sumColor = 0;
  // suma materialu krzesla
  var sumPattern = 0;
  // suma transportu
  var sumTransport = 0;
    
  var choice;
  var choice2;
  // wczytanie miejsca na podanie sumy
  var yourCost = document.getElementById("your_sum");
  // wczytanie, ktora strzalka wyboru jest aktywna
  var chosenArrow = Array.from(document.querySelectorAll(".list_arrow"));
    

  // dla wybranej strzalki wyboru rozwin menu z opcjami
  chosenArrow.forEach(function(element) {
    var chosenList = element.parentElement.querySelector(".list_panel");

    element.addEventListener("click", function(e) {
      chosenList.classList.toggle("shooow");
    });

      
    // wczytanie zmiennych
    // sprawdzenie, ktory element zostal wybrany
    // wczytanie miejsc, do ktorych wysylamy wybrana nazwe oraz cene
    var findListChair = element.parentElement.querySelector(".list_panel");
    var chosenListChair = Array.from(findListChair.querySelectorAll('[data-chair-price]'));
    var yourChair = document.getElementById("your_chair");
    var costChair = document.getElementById("cost_chair");

      
    // dla kazdej opcji sprawdzamy, ktora zostala wybrana
    // wyslanie wybranych danych - nazwy i ceny do formularza
    // suma jest na biezaco aktualizowana
    chosenListChair.forEach(function(target){
      target.addEventListener("click", function(e) {
        choice = target.innerText;
        yourChair.innerText = choice;
        choice2 = parseFloat(target.dataset.chairPrice);
        costChair.innerText = choice2;
          if(yourCost.innerText !== " "){
            sumChair = choice2;
            // koszt ogolny to suma wszystkich cen, aby kwota zmieniala sie jesli ktos zmieni zdanie i postanowi wybrac inne krzeslo albo kolor itd.
            yourCost.innerText = sumTransport + sumPattern + sumColor + sumChair + " zł";
          }
      });
    });


    // wczytanie zmiennych
    // sprawdzenie, ktory element zostal wybrany
    // wczytanie miejsc, do ktorych wysylamy wybrana nazwe oraz cene
    var findListColor = element.parentElement.querySelector(".list_panel");
    var chosenListColor = Array.from(findListColor.querySelectorAll('[data-color-price]'));
    var yourColor = document.getElementById("your_color");
    var costColor = document.getElementById("cost_color");

      
    // dla kazdej opcji sprawdzamy, ktora zostala wybrana
    // wyslanie wybranych danych - koloru i ceny do formularza
    // suma jest na biezaco aktualizowana
    chosenListColor.forEach(function(target){
      target.addEventListener("click", function(e) {
        choice = target.innerText;
        yourColor.innerText = choice;
        choice2 = parseFloat(target.dataset.colorPrice);
        costColor.innerText = choice2;
          if(yourCost.innerText !== " "){
            sumColor = choice2;
            yourCost.innerText = sumTransport + sumChair + sumColor + sumPattern + " zł";
          }
      });
    });


    // wczytanie zmiennych
    // sprawdzenie, ktory element zostal wybrany
    // wczytanie miejsc, do ktorych wysylamy wybrana nazwe oraz cene
    var findListPattern = element.parentElement.querySelector(".list_panel");
    var chosenListPattern = Array.from(findListPattern.querySelectorAll('[data-pattern-price]'));
    var yourPattern = document.getElementById("your_pattern");
    var costPattern = document.getElementById("cost_pattern");

    // dla kazdej opcji sprawdzamy, ktora zostala wybrana
    // wyslanie wybranych danych - materialu i ceny do formularza
    // suma jest na biezaco aktualizowana
    chosenListPattern.forEach(function(target){
      target.addEventListener("click", function(e) {
        choice = target.innerText;
        yourPattern.innerText = choice;
        choice2 = parseFloat(target.dataset.patternPrice);
        costPattern.innerText = choice2;
          if(yourCost.innerText !== " "){
            sumPattern = choice2;
            yourCost.innerText = sumTransport + sumPattern +sumColor + sumChair + " zł";
          }
      });
    });
  });

    
  // wczytanie zmiennych dla checkboxa z transportem
  // wcztanie miejsc, do ktorych wysylamy informacje
  var transport = document.querySelector('input[type="checkbox"]');
  var transportLabel = document.querySelector("label");
  var yourTransport = document.getElementById("your_transport");
  var chosenTransport = document.querySelector('[data-transport-price]');
  var costTransport = document.getElementById("cost_transport");

    
  // jesli checkbox jest zaznaczony
  // wyslanie wybranych danych - opcji transportu i ceny do formularza
  // suma jest na biezaco aktualizowana
  transport.addEventListener("click", function(e) {
    if(transport.checked) {
      choice = transportLabel.innerText;
      yourTransport.innerText = choice;
      choice2 = parseFloat(chosenTransport.dataset.transportPrice);
      costTransport.innerText = choice2;
      sumTransport += choice2;
      yourCost.innerText = sumTransport + sumPattern + sumColor + sumChair + " zł";
    }
    // jesli odznaczymy transport to ta opcja zniknie w formularzu, a cena zostanie zmniejszona o jego cene  
    else {
      yourTransport.innerText = " ";
      costTransport.innerText = " ";
      choice2 = parseFloat(chosenTransport.dataset.transportPrice);
      sumTransport -= choice2;
      yourCost.innerText = sumTransport + sumPattern + sumColor + sumChair + " zł";
    }
  });

});
