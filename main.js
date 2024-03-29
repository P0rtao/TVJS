var B1 = document.getElementById("buttonOne")
var B2 = document.getElementById("buttonTwo")
var B3 = document.getElementById("buttonThree")
var B4 = document.getElementById("buttonFour")

var buttonDiv = document.getElementById("buttondiv")

var TV = document.getElementById("Screen")

var msg = document.getElementById("message")
var div = document.getElementById("TextBox")

// Temporary variable for timeout (sound fade out effect)
var timeout = 0

// Animations for the TextBox
const divAnim = [
    { opacity: "0%" },
    { opacity: "100%" },
]

const AnimTime = {
    duration: 1000,
}

const divAnim2 = [
    { opacity: "100%" },
    { opacity: "0%" },
]

// Animations for the buttons
const buttonShow = [
    { left: "-50%"},
    { left: "0%"},
]

const buttonHide = [
    { left: "0%"},
    { left: "-50%"},
]

//--------------------------------Button Toggler---------------------------------------------
function toggleButtons(state = "OFF") {
    if (state == "OFF") {
        B1.removeEventListener("click", Story1)
    } else if (state == "ON") {
        B1.addEventListener("click", Story1)
    }
}
//--------------------------------------------------------------------------------------------

function audioHandler(audioId = "", state = "OFF") {
    var music = document.getElementById(audioId)
    clearTimeout(timeout)

    if (state == "OFF") {
        for (let e = 0; e < 10; e++) {
            setTimeout(() => {
                music.volume -= 0.1
                console.log("Current volume:", music.volume)
            }, e * 50)

            setTimeout(() => {
                music.pause()
                console.log("Paused")
            }, 50 * 10);
        }
    } else if (state == "ON") {
        music.currentTime = 0
        setTimeout(() => {
            music.volume = 1
            music.play()
            console.log("Playing")
        }, 10);
    }
}

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
    toggleButtons("OFF")
    audioHandler("music1", "ON")

    buttonDiv.style.left = "-50%"
    buttonDiv.animate(buttonHide, AnimTime)

    div.style.opacity = "100%"
    div.animate(divAnim, AnimTime).onfinish = function () {
        let time = 6000
        
        setTimeout(typeText, 0 * time, "Era uma vez um Patinho.")
        setTimeout(changeImg, 0 * time, "DuckCool.jpg")

        setTimeout(typeText, 1 * time, "Este Patinho adorava uvas,")

        setTimeout(typeText, 2 * time, "Um dia, ele decidiu ir a uma banca de limonada")
        
        setTimeout(typeText, 3 * time, "Ele perguntou ao dono da banca: ")

        setTimeout(typeText, 4 * time, "Hey! Got any grapes?")
        setTimeout(changeImg, 4 * time, "DuckAsk.jpg")

        setTimeout(typeText, 5 * time, "Mas o dono respondeu: ")

        setTimeout(typeText, 6 * time, "Isto é uma banca de limonada, não tenho uvas.")
        setTimeout(changeImg, 6 * time, "DuckCry.gif")

        setTimeout(typeText, 7 * time, "Fim :C")

        // Controls the reset after it ends
        setTimeout(() => {
            
            div.style.opacity = "0%"
            audioHandler("music1", "OFF")
            
            div.animate(divAnim2, AnimTime).onfinish = () => {
                msg.innerHTML = ""
                changeImg("static.gif")
                buttonDiv.style.left = "0%"
                buttonDiv.animate(buttonShow, AnimTime)

                toggleButtons("ON")
            }
        }, 8 * time)
    }

}

toggleButtons("ON")