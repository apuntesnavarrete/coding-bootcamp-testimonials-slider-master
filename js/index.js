let left_one = document.querySelectorAll(".left")[0]
let left_two = document.querySelectorAll(".left")[1]


let rigth_one = document.querySelectorAll(".rigth")[0]
let rigth_two = document.querySelectorAll(".rigth")[1]

let contentSlider = document.querySelector(".content-slider")

let SliderLast = document.querySelectorAll(".Slider")[1]
let Sliderfirst = document.querySelectorAll(".Slider")[0]
let slider = document.querySelectorAll(".Slider")



console.log(SliderLast)

left_one.addEventListener("click",function(){



    contentSlider.style.marginLeft = "-325px"
    contentSlider.style.transition = "all 0.5s"

    setTimeout(function(){
        let Sliderfirst = document.querySelectorAll(".Slider")[0]

        contentSlider.insertAdjacentElement("beforeend",Sliderfirst)
        contentSlider.style.transition = "none"

        contentSlider.style.marginLeft = "0"

    }, 500);
    

})

left_two.addEventListener("click",function(){



    contentSlider.style.marginLeft = "-325px"
    contentSlider.style.transition = "all 0.5s"

    setTimeout(function(){
        let Sliderfirst = document.querySelectorAll(".Slider")[0]

        contentSlider.insertAdjacentElement("beforeend",Sliderfirst)
        contentSlider.style.transition = "none"

        contentSlider.style.marginLeft = "0"

    }, 500);
    

})

