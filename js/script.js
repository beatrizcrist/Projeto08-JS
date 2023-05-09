let cubo = document.querySelector('.imagem-cubo')
let btnNext = document.getElementById('next')
let btnPrev = document.getElementById('prev')

let pos = 0

btnNext.addEventListener("click", () => {
    pos -= 90
    cubo.style.transform = `rotateY(${pos}deg)`
})

btnPrev.addEventListener("click", () =>{
    pos += 90
    cubo.style.transform = `rotateY(${pos}deg)`
})
