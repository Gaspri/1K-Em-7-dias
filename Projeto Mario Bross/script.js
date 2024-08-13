const form = document.querySelector(".form")
const mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"

}

function desaparecerForm() {
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
}


