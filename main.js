var B1 = document.getElementById("buttonOne")
var B2 = document.getElementById("buttonTwo")
var B3 = document.getElementById("buttonThree")
var B4 = document.getElementById("buttonFour")

var TV = document.getElementById("Screen")

var msg = document.getElementById("message")
var div = document.getElementById("TextBox")
// Animations for the TextBox
const divAnim = [
    { opacity: "0%" },
    { opacity: "100%" },
]

const divTime = {
    duration: 1000,
}

const divAnim2 = [
    { opacity: "100%" },
    { opacity: "0%" },
]


function changeImg(image = "") {
    TV.style.backgroundImage = "url(img/static.gif)"
    setTimeout(() => {
        TV.style.backgroundImage = "url('img/" + image + "')"
    }, 500)
}

function typeText(message = "Hi", speed = 50) {
    msg.innerHTML = ""

    for (let i = 0; i < message.length; i++) {
        setTimeout(() => {
            msg.innerHTML += message[i]
        }, i * speed)
    }
}

function Story1() {
    B1.removeEventListener("click", Story1)

    div.style.opacity = "100%"
    div.animate(divAnim, divTime).onfinish = function () {
        let time = 6000
        
        setTimeout(typeText, 0 * time, "Era uma vez um Patinho.")
        setTimeout(changeImg, 0 * time, "DuckCool.jpg")

        setTimeout(typeText, 1 * time, "Este Patinho adorava uvas,")

        setTimeout(typeText, 2 * time, "Um dia, ele decidiu ir a uma banca de limonada")
        
        setTimeout(typeText, 3 * time, "Ele perguntou ao dono da banca : ")

        setTimeout(typeText, 4 * time, "Hey! Got any grapes?")

        setTimeout(typeText, 5 * time, "Mas o dono respondeu : ")

        setTimeout(typeText, 6 * time, "Isto é uma banca de limonada, não tenho uvas.")
        setTimeout(changeImg, 6 * time, "DuckCry.gif")

        setTimeout(typeText, 7 * time, "Fim :C")

        // Controls the reset after it ends
        setTimeout(() => {
            div.style.opacity = "0%"
            div.animate(divAnim2, divTime).onfinish = () => {
                msg.innerHTML = ""
                changeImg("static.gif")

                B1.addEventListener("click", Story1)
            }
        }, 8 * time)
    }

}

B1.addEventListener("click", Story1)