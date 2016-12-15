document.addEventListener('DOMContentLoaded',function(){

  //menu show/hide on hover
  var aboutCompany = document.querySelector(".leftmenu");
  var menu = document.querySelector("#hiddenMenu");

  menu.classList.add("hide");

  aboutCompany.addEventListener("mouseover", function(e) {
    menu.classList.remove("hide");
  });

  aboutCompany.addEventListener("mouseout", function(e) {
    menu.classList.add("hide");
  });


  //images show/hide rectangles with names
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


  //main slider
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


  //extra *
         
    var sum_place = document.querySelector(".sum");
    
    //function adding cost
    function sumUp(){
        var sum = 0;
        sum = Number(chair_summ_value.innerText) + Number(color_summ_value.innerText) + Number(pattern_summ_value.innerText) + Number(transport_summ_value.innerText);
        sum_place.innerText = sum + "zł";
    }
    
    
    //find out which arrow was chosen
    var chosenArrow = Array.from(document.querySelectorAll(".list_arrow"));
    
    chosenArrow.forEach(function(element) {
        //toggle menu for selected arrow
        var chosenList = element.parentElement.querySelector(".list_panel");
        element.addEventListener("click", function(e) {
          chosenList.classList.toggle("shooow");
        });
        
    });
    
    
    var chair_summ = document.querySelector(".panel_left").querySelector(".title");
    var chair_summ_value = document.querySelector(".panel_right").querySelector(".title");

    var color_summ = document.querySelector(".panel_left").querySelector(".color");
    var color_summ_value = document.querySelector(".panel_right").querySelector(".color");

    var pattern_summ = document.querySelector(".panel_left").querySelector(".pattern");
    var pattern_summ_value = document.querySelector(".panel_right").querySelector(".pattern");

    var findList = Array.from(document.querySelectorAll(".list_panel li"));
    
    findList.forEach(function(target){
        
        //find out which option was clicked put its name and cost into formular
        //sum up the cost
        target.addEventListener("click", function() {
            var checkId = this.parentElement.getAttribute("id");
            switch (checkId) {
                case "chair":{
                    chair_summ.innerText = this.innerText;
                    chair_summ_value.innerText = this.dataset.price;
                    break;
                } 
                case "color":{
                    color_summ.innerText = this.innerText;
                    color_summ_value.innerText = this.dataset.price;
                    break;
                }
                    
                case "pattern":{
                    pattern_summ.innerText = this.innerText;
                    pattern_summ_value.innerText = this.dataset.price;
                    break; 
                }      
            }
            sumUp();
        });
    });
    
    
    //transport option
    var transport = document.querySelector('input[type="checkbox"]');
    var transport_summ = document.querySelector(".panel_left").querySelector(".transport");
    var transport_summ_value = document.querySelector(".panel_right").querySelector(".transport");
    
    transport.addEventListener("click", function(){
        if(transport.checked){
            transport_summ.innerText = "Transport";
            transport_summ_value.innerText = transport.dataset.price; 
        }
        else{
            transport_summ.innerText = " ";
            transport_summ_value.innerText = " ";
        }
        sumUp();
    });
    
});
