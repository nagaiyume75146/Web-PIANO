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

    let span_height = document.getElementsByTagName("span")[0].clientHeight;
    span_height = String(span_height / 2) + "px";
    let size_icon = document.getElementsByClassName("top")[0].clientHeight;
    size_icon = String(size_icon * ( 50 / 69 )) + "px";
    let top_height = document.getElementsByClassName("top")[0].clientHeight + "px";
    const root = document.querySelector(':root');
    root.style.setProperty("--font-size", top_height);
    root.style.setProperty("--font-size2", span_height);
    root.style.setProperty("--size-icon", size_icon);

    orientCheck()
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

    let span_height = document.getElementsByTagName("span")[0].clientHeight;
    span_height = String(span_height / 2) + "px";
    let size_icon = document.getElementsByClassName("top")[0].clientHeight;
    size_icon = String(size_icon * ( 50 / 69 )) + "px";
    let top_height = document.getElementsByClassName("top")[0].clientHeight + "px";
    const root = document.querySelector(':root');
    root.style.setProperty("--font-size", top_height);
    root.style.setProperty("--font-size2", span_height);
    root.style.setProperty("--size-icon", size_icon);

    orientCheck()
})

function orientCheck(){
    //画面の向きを 0,90,180,-90 のいずれかで取得
    var orientation = window.orientation;

    if (orientation === 0) {
        alert("横画面を推奨しています。")
        const root = document.querySelector(':root');
        root.style.setProperty("--font-size", "60px");
        root.style.setProperty("--size-icon", "20px");
    }
};

let touchkey = {}; // タッチしたキーを保存する配列
let audio = {}; // 音を保存する配列

// 押すキーの配列
const whiteKey_Array = ["q","w","e","r","t","y","u","i","o","p","@","[","z","x","c","v","b","n","m",",",".","/"];
const blackKey_Array = ["2","3","5","6","7","9","0","^","a","s","f","g","j","k","l"];

// 押したキー→音程の配列
const scale_Array = {
  "q" : "C3",
  "w" : "D3",
  "e" : "E3",
  "r" : "F3",
  "t" : "G3",
  "y" : "A3",
  "u" : "B3",
  "i" : "C4",
  "o" : "D4",
  "p" : "E4",
  "@" : "F4",
  "[" : "G4",
  "z" : "A4",
  "x" : "B4",
  "c" : "C5",
  "v" : "D5",
  "b" : "E5",
  "n" : "F5",
  "m" : "G5",
  "," : "A5",
  "." : "B5",
  "/" : "C6",

  "2" : "D♭3",
  "3" : "E♭3",
  "5" : "G♭3",
  "6" : "A♭3",
  "7" : "B♭3",
  "9" : "D♭4",
  "0" : "E♭4",
  "^" : "G♭4",
  "a" : "A♭4",
  "s" : "B♭4",
  "f" : "D♭5",
  "g" : "E♭5",
  "j" : "G♭5",
  "k" : "A♭5",
  "l" : "B♭5",
};

// タッチデバイスか判定
const touch_event = window.ontouchstart;
const touch_points = navigator.maxTouchPoints;

const whiteKey = document.querySelectorAll(".whiteKey");

// 白鍵をタッチしたときの関数
for(let i=0; i<22; i++) {
    whiteKey[i].addEventListener("touchstart",function(){
        const scale = scale_Array[whiteKey_Array[i]];
        if(scale) {
            if(touchkey[scale] != true) {
                touchkey[scale] = true;
                play(scale)
                document.getElementById(scale).classList.add("whiteKey-active");
            }
        }
    });
}

// 白鍵から離れたときの関数
for(let i=0; i<22; i++) {
    whiteKey[i].addEventListener("touchend",function(){
        const scale = scale_Array[whiteKey_Array[i]];
        if(scale) {
            if(touchkey[scale]) {
                touchkey[scale] = false;
                pause(scale)
                document.getElementById(scale).classList.remove("whiteKey-active");
            }
        }
    });
}

// 黒鍵をタッチしたときの関数
const blackKey = document.querySelectorAll(".blackKey");
for(let i=0; i<15; i++) {
    blackKey[i].addEventListener("touchstart",function(){
        console.log("black")

        const scale = scale_Array[blackKey_Array[i]];
        if(scale) {
            if(touchkey[scale] != true) {
                touchkey[scale] = true;
                play(scale)
                document.getElementById(scale).classList.add("blackKey-active");
            }
        }
    });
}

// 黒鍵から離れたときの関数
for(let i=0; i<15; i++) {
    blackKey[i].addEventListener("touchend",function(){
        const scale = scale_Array[blackKey_Array[i]];
        if(scale) {
            if(touchkey[scale]) {
                touchkey[scale] = false;
                pause(scale)
                document.getElementById(scale).classList.remove("blackKey-active");
            }
        }
    });
}

//ピアノの音を流す関数
function play(scale){
  let file = "../src/audio/" + scale + "." + "mp3";
  
  audio[scale] = new Audio(file);
  audio[scale].volume = 50 * 0.01;
  audio[scale].play()
}

//ピアノの音を止める関数
function pause(scale){
  audio[scale].pause()
  audio[scale].currentTime = 0;
  audio[scale] = false;
}