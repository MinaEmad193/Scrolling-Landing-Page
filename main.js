let stars = document.querySelector(".stars")
let javaScript = document.querySelector(".javascript")
let moon = document.querySelector(".moon")
let mountain3 = document.querySelector(".mountain3")
let mountain4 = document.querySelector(".mountain4")
let boat = document.querySelector(".boat")
let river = document.querySelector(".river")

window.onscroll = function() {
    let value = scrollY
    javaScript.style.transform = `translateY(${(value/1.2) - 180}px)`
    moon.style.transform = `translateY(${value*2.5}px)`
    javaScript.style.fontSize = `${value / 2.5}px`
    if (value > 170) {
        moon.style.display = "none"
        javaScript.style.fontSize = "68px"
        document.querySelector(".imgs-cont").style.background = `linear-gradient(#6094da, transparent)`
        document.querySelector("header").style.display = "none"
    } else {
        document.querySelector("header").style.display = "flex"
        moon.style.display = "block"
        document.querySelector(".imgs-cont").style.background = `linear-gradient(#200016, #10001f)`
    }

    if (value < 550) {
        
        javaScript.style.display = "block"
    }

    mountain3.style.top = `${value/1.5}px`
    mountain4.style.top = `${value/2.5}px`
    river.style.top = `${value/4}px`
    boat.style.top = `${value/4}px`
    boat.style.transform = `translateX(${value/1.2}px)`
    stars.style.transform = `translateX(${-value/6}px)`
    stars.style.width = `${(value/3.5) + window.innerWidth}px`
    mountain3.style.transform = `translateX(${-value/6}px)`
    mountain3.style.width = `${(value/3.5) + window.innerWidth}px`
    mountain4.style.transform = `translateX(${value/6}px)`
    mountain4.style.width = `-${(value/3.5) + window.innerWidth}px`

    if (value > 310) {
        javaScript.style.fontSize = `-${value/2}px`
        if (value > 530) {
        javaScript.style.display = "none" 
        }    
    }
}