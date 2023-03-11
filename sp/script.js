"use strict"

window.addEventListener("load", function() {
    const piano = document.getElementsByClassName("piano")[0];
    piano.style.width = window.innerWidth + "px";
    piano.style.height = window.innerHeight + "px";

    const bottom = document.getElementsByClassName("bottom")[0];
    const keyboard = document.getElementsByClassName("keyboard")[0];
    if( ( bottom.innerWidth / bottom.innerHeigh ) > ( 880 / 220 ) ) {
        keyboard.style.width = "";
        keyboard.style.height = "100%";
    }
    else {
        keyboard.style.width = "100%";
        keyboard.style.height = "";
    }
})

window.addEventListener("resize", function() {
    const piano = document.getElementsByClassName("piano")[0];

    piano.style.width = window.innerWidth + "px";
    piano.style.height = window.innerHeight + "px";

    const bottom = document.getElementsByClassName("bottom")[0];
    const keyboard = document.getElementsByClassName("keyboard")[0];
    if( ( bottom.innerWidth / bottom.innerHeigh ) > ( 880 / 220 ) ) {
        keyboard.style.width = "";
        keyboard.style.height = "100%";
    }
    else {
        keyboard.style.width = "100%";
        keyboard.style.height = "";
    }
})