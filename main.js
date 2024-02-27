var B1 = document.getElementById("buttonOne");
var B2 = document.getElementById("buttonTwo");
var B3 = document.getElementById("buttonThree");
var B4 = document.getElementById("buttonFour");

var msg = document.getElementById("message");

function wait() {
    console.log("Waiting...");
}

function typeText(message, speed = 50) {
    msg.innerHTML = "";

    for (let i = 0; i < message.length; i++) {
        setTimeout(() => {
            msg.innerHTML += message[i];
        }, i * speed);
    }
}

function Story1() {
    let div = document.getElementById("TextBox");

    const divAnim = [
        { opacity: "0%" },
        { opacity: "100%" },
    ];

    const divTime = {
        duration: 1000, // 1 second in milliseconds
    }

    div.animate(divAnim, divTime).onfinish = function () {
        typeText("Once upon a time");
        setTimeout(wait, 1000);
        typeText("There was a duck");
    }

}

B1.addEventListener("click", Story1);