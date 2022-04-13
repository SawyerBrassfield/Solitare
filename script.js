var box = document.getElementById("box")
var clicked
box.addEventListener("mousedown", (a) => {
    clicked = true
})
box.addEventListener("mouseup", (b) => {
    clicked = false
})
document.addEventListener('mousemove', (e) => {
    if(clicked) {
        box.style.top = `${e.clientY - 150}px`
        box.style.left = `${e.clientX - 150}px`
    }
})