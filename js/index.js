let left = document.querySelectorAll(".left")
let rigth = document.querySelectorAll(".rigth")

let contentSlider = document.querySelector(".content-slider")



function slider_direcction(){
    contentSlider.style.marginLeft = "-325px"
    contentSlider.style.transition = "all 0.5s"

    setTimeout(function(){
        let Sliderfirst = document.querySelectorAll(".Slider")[0]

        contentSlider.insertAdjacentElement("beforeend",Sliderfirst)
        contentSlider.style.transition = "none"

        contentSlider.style.marginLeft = "0"

    }, 500);
}


left[0].addEventListener("click",slider_direcction)

left[1].addEventListener("click",slider_direcction)


