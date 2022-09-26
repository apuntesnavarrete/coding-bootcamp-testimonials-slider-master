let left = document.querySelector(".left")

let rigth_one = document.querySelectorAll(".rigth")[0]
let rigth_two = document.querySelectorAll(".rigth")[1]

let contentSlider = document.querySelector(".content-slider")

let SliderLast = document.querySelectorAll(".Slider")[1]
let Sliderfirst = document.querySelectorAll(".Slider")[0]
let slider = document.querySelectorAll(".Slider")
//SI ESTOY EN 0 CLICK O PAR , PUEDO IR ALA DERECHA NADAMAS 
// Y MOSTRARE COMO OPCION SOLO EL BOTNO DERECHO , INABILITADO IZQUIERDO

//SI ESTOY EN 1 CLICK O NONE , PUEDO IR ALA IZQUIERDA NADAMAS 
// Y MOSTRARE COMO OPCION SOLO EL BOTNO IZQUIERDO , INABILITADO DERECHO


console.log(SliderLast)

rigth_one.addEventListener("click",function(){



    contentSlider.style.marginLeft = "-325px"
    contentSlider.style.transition = "all 1s"

    setTimeout(function(){
        contentSlider.style.transition= "none"
        contentSlider.style.marginLeft= "0"

    }, 600);
    

})

rigth_two.addEventListener("click",function(){



    contentSlider.style.marginLeft = "0"
    contentSlider.style.transition = "all 1s"

    

})

left.addEventListener("click",function(){

   
    contentSlider.insertAdjacentElement('afterbegin',SliderLast);

    contentSlider.style.marginLeft = "0"
    contentSlider.style.transition = "all 1s"

    console.log("boton izquier en funcionamiento")
})