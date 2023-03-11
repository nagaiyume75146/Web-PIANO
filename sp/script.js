"use strict"

window.addEventListener("load", function() {
    const piano = document.getElementsByClassName("piano")[0];

    piano.style.width = window.innerWidth + "px";
    piano.style.height = window.innerHeight + "px";
})

window.addEventListener("resize", function() {
    const piano = document.getElementsByClassName("piano")[0];

    piano.style.width = window.innerWidth + "px";
    piano.style.height = window.innerHeight + "px";
})