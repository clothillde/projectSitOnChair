document.addEventListener('DOMContentLoaded', () => {

    //menu show/hide on hover
    var aboutCompany = document.querySelector(".leftmenu");
    var menu = document.querySelector("#hiddenMenu");

    menu.classList.add("hide");

    aboutCompany.addEventListener("mouseover", () => {
        menu.classList.remove("hide");
    });

    aboutCompany.addEventListener("mouseout", () => {
        menu.classList.add("hide");
    });


    //images show/hide rectangles with names
    var chosenImage = Array.from(document.querySelectorAll(".art2tile"));

    chosenImage.forEach(element => {

        var chosenRectangle = element.querySelector(".rectangle");

        if(chosenRectangle) {
            element.addEventListener("mouseover", () => {
                chosenRectangle.classList.add("hide");
            });

            element.addEventListener("mouseout", () => {
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

    nextBtn.addEventListener("click", () => {

        slides[actualSlide].classList.remove("visible");
        actualSlide++;
        if(actualSlide >= slides.length){
            actualSlide = 0;
        }
        slides[actualSlide].classList.add("visible");
    });

    prevBtn.addEventListener("click", () => {

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
    var sumUp = () => {
        var sum = 0;
        sum = Number(chair_summ_value.innerText) + Number(color_summ_value.innerText) + Number(pattern_summ_value.innerText) + Number(transport_summ_value.innerText);
        sum_place.innerText = sum + "zł";
    };
    
    
    //find out which arrow was chosen
    var chosenArrow = Array.from(document.querySelectorAll(".drop_down_list"));
    
    chosenArrow.forEach(element => {
        //toggle menu for selected arrow
        var chosenList = element.querySelector(".list_panel");
        element.addEventListener("click", () => {
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
    
    findList.forEach(target => {
        
        //find out which option was clicked put its name and cost into formular
        //sum up the cost
        target.addEventListener("click", () =>  {
            var checkId = target.parentElement.getAttribute("id");
            var label_text = target.parentElement.parentElement.querySelector(".list_label");
            switch (checkId) {
                case "chair":
                    chair_summ.innerText = target.innerText;
                    chair_summ_value.innerText = target.dataset.price;

                    label_text.innerText = chair_summ.innerText;
                    break;
                
                case "color":
                    color_summ.innerText = target.innerText;
                    color_summ_value.innerText = target.dataset.price;
                    label_text.innerText = color_summ.innerText;
                    break;
                
                case "pattern":{
                    pattern_summ.innerText = target.innerText;
                    pattern_summ_value.innerText = target.dataset.price;
                    label_text.innerText = pattern_summ.innerText;
                    break; 
                }

                default:
                    pattern_summ_value = "0zł";     
            }
            sumUp();
        });
    });
    
    
    //transport option
    var transport = document.querySelector('input[type="checkbox"]');
    var transport_summ = document.querySelector(".panel_left").querySelector(".transport");
    var transport_summ_value = document.querySelector(".panel_right").querySelector(".transport");
    
    transport.addEventListener("click", () => {
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
