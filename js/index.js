let left = document.querySelectorAll(".left")
let rigth = document.querySelectorAll(".rigth")

let contentSlider = document.querySelector(".content-slider")

let input_left = "-325px"
let input_rigth = "325px"

function slider_direcction(mov){
    contentSlider.style.marginLeft = mov
    contentSlider.style.transition = "all 0.5s"
    setTimeout(function(){
        let Sliderfirst = document.querySelectorAll(".Slider")[0]
        contentSlider.insertAdjacentElement("beforeend",Sliderfirst)
        contentSlider.style.transition = "none"
        contentSlider.style.marginLeft = "0"
    }, 500);
}

left[0].addEventListener("click",function(){
    slider_direcction(input_left)
})

left[1].addEventListener("click",function(){
    slider_direcction(input_left)
})


rigth[0].addEventListener("click",function(){
    slider_direcction(input_rigth)
})

rigth[1].addEventListener("click",function(){
    slider_direcction(input_rigth)
})