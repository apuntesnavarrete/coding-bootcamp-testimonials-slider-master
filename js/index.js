let left = document.querySelector(".left")

let rigth = document.querySelector(".rigth")
let contentSlider = document.querySelector(".content-slider")

let SliderLast = document.querySelectorAll(".Slider")[1]
let Sliderfirst = document.querySelectorAll(".Slider")[0]
let slider = document.querySelectorAll(".Slider")
//SI ESTOY EN 0 CLICK O PAR , PUEDO IR ALA DERECHA NADAMAS 
// Y MOSTRARE COMO OPCION SOLO EL BOTNO DERECHO , INABILITADO IZQUIERDO

//SI ESTOY EN 1 CLICK O NONE , PUEDO IR ALA IZQUIERDA NADAMAS 
// Y MOSTRARE COMO OPCION SOLO EL BOTNO IZQUIERDO , INABILITADO DERECHO
contentSlider.insertAdjacentElement('afterbegin',SliderLast);


console.log(SliderLast)

rigth.addEventListener("click",function(){
    let SliderLast = document.querySelectorAll(".Slider")[slider.length -1]

    contentSlider.insertAdjacentElement('afterbegin',SliderLast);


    contentSlider.style.marginLeft = "0px"
    contentSlider.style.transition = "all 1s"

    setTimeout(function(){
        /*
        let SliderLast = document.querySelectorAll(".Slider")[1]

        contentSlider.insertAdjacentElement('afterbegin',SliderLast);
*/
        contentSlider.style.marginLeft = "0"

    },1000)

})

left.addEventListener("click",function(){

   
    contentSlider.insertAdjacentElement('afterbegin',SliderLast);

    contentSlider.style.marginLeft = "0"
    contentSlider.style.transition = "all 1s"

    console.log("boton izquier en funcionamiento")
})