"use strict"

/*
  記述ルール
  ・引数名:先頭小文字のキャメルケース
  ・関数名:先頭大文字のスネークケース+先頭小文字のキャメルケースのスネークケース
  ・変数　:先頭小文字のキャメルケース+先頭小文字のキャメルケースのスネークケース
  ・定数:先頭大文字のキャメルケース+先頭小文字のキャメルケースのスネークケース
  ・document系:すべて大文字のスネークケース
  ・配列:キャメルケース+_array(let:先頭小文字,const:先頭大文字)
  ・boolean系(true/false):is〇〇(受動態)
*/

window.addEventListener("load",function (params) {
  const root = document.querySelector(':root');
  root.style.setProperty("--height", 0);
  
  const bottom = document.getElementsByClassName("bottom")[0];
  const keyboard = document.getElementsByClassName("keyboard")[0];
  if( (bottom.clientWidth / bottom.clientHeight) > (880 / 300) ){ 
    keyboard.style.width = "";
    keyboard.style.height = "100%";
  }
  else {
    keyboard.style.width = "100%";
    keyboard.style.height = "";
  }

  const height = document.getElementsByClassName("keyboard")[0].clientHeight + "px";
  root.style.setProperty("--height", height);
})

window.addEventListener("resize",function () {
  const root = document.querySelector(':root');
  root.style.setProperty("--height", 0);

  const bottom = document.getElementsByClassName("bottom")[0];
  const keyboard = document.getElementsByClassName("keyboard")[0];
  if( (bottom.clientWidth / bottom.clientHeight) > (880 / 300) ){ 
    keyboard.style.width = "";
    keyboard.style.height = "100%";
  }
  else {
    keyboard.style.width = "100%";
    keyboard.style.height = "";
  }

  const height = document.getElementsByClassName("keyboard")[0].clientHeight + "px";
  root.style.setProperty("--height", height);
})

let presskey = {};
let mousekey = {};
let audio = {};

const whiteKey_Array = ["q","w","e","r","t","y","u","i","o","p","@","[","z","x","c","v","b","n","m",",",".","/"];
const blackKey_Array = ["2","3","5","6","7","9","0","^","a","s","f","g","j","k","l"];

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

const touch_event = window.ontouchstart;
const touch_points = navigator.maxTouchPoints;
if( touch_event !== undefined && 0 < touch_points ) {

  const whiteKey = document.querySelectorAll(".whiteKey");
  for(let i=0; i<22; i++) {
    whiteKey[i].addEventListener("touchstart",function(){
      const scale = scale_Array[whiteKey_Array[i]];
      if(scale) {
        if(presskey[scale] != true) {
          presskey[scale] = true;
          play(scale)
          document.getElementById(scale).classList.add("whiteKey-active");
        }
      }
    });
  }

  for(let i=0; i<22; i++) {
    whiteKey[i].addEventListener("touchend",function(){
      const scale = scale_Array[whiteKey_Array[i]];
      if(scale) {
        if(presskey[scale]) {
          presskey[scale] = false;
          document.getElementById(scale).classList.remove("whiteKey-active");
          audio[scale] = false;
        }
      }
    });
  }

  const blackKey = document.querySelectorAll(".blackKey");
  for(let i=0; i<15; i++) {
    blackKey[i].addEventListener("touchstart",function(){
      console.log("black")

      const scale = scale_Array[blackKey_Array[i]];
      if(scale) {
        if(presskey[scale] != true) {
          presskey[scale] = true;
          play(scale)
          document.getElementById(scale).classList.add("blackKey-active");
        }
      }
    });
  }

  for(let i=0; i<15; i++) {
    blackKey[i].addEventListener("touchend",function(){
      const scale = scale_Array[blackKey_Array[i]];
      if(scale) {
        if(presskey[scale]) {
          presskey[scale] = false;
          document.getElementById(scale).classList.remove("blackKey-active");
          audio[scale] = false;
        }
      }
    });
  }

}
else {

  document.onkeydown = function(event) {
    const scale = scale_Array[event.key];
    if(scale) {
      if(presskey[scale] != true) {
        presskey[scale] = true;
        play(scale)
    
        if(scale.length==2) {
          document.getElementById(scale).classList.add("whiteKey-active");
        }
        else {
          document.getElementById(scale).classList.add("blackKey-active");
        }
      }
    }
  }
  
  document.onkeyup = function(event) {
    const scale = scale_Array[event.key];
    if(scale) {
      if(presskey[scale]) {
        presskey[scale] = false;
        pause(scale)
    
        if(scale.length == 2) {
          document.getElementById(scale).classList.remove("whiteKey-active");
        }
        else {
          document.getElementById(scale).classList.remove("blackKey-active");
        }
      }
    }  
  }

  const whiteKey = document.querySelectorAll(".whiteKey");
  for(let i=0; i<22; i++) {
    whiteKey[i].addEventListener("mousedown",function(){
      const scale = scale_Array[whiteKey_Array[i]];
      if(scale) {
        if(mousekey[scale] != true) {
          mousekey[scale] = true;
          play(scale)
          document.getElementById(scale).classList.add("whiteKey-active");
        }
      }
    });
  }

  for(let i=0; i<22; i++) {
    whiteKey[i].addEventListener("mouseup",function(){
      const scale = scale_Array[whiteKey_Array[i]];
      if(scale) {
        if(mousekey[scale]) {
          mousekey[scale] = false;
          document.getElementById(scale).classList.remove("whiteKey-active");
          audio[scale] = false;
        }
      }
    });
  }

  const blackKey = document.querySelectorAll(".blackKey");
  for(let i=0; i<15; i++) {
    blackKey[i].addEventListener("mousedown",function(){
      console.log("black")

      const scale = scale_Array[blackKey_Array[i]];
      if(scale) {
        if(mousekey[scale] != true) {
          mousekey[scale] = true;
          play(scale)
          document.getElementById(scale).classList.add("blackKey-active");
        }
      }
    });
  }

  for(let i=0; i<15; i++) {
    blackKey[i].addEventListener("mouseup",function(){
      const scale = scale_Array[blackKey_Array[i]];
      if(scale) {
        if(mousekey[scale]) {
          mousekey[scale] = false;
          document.getElementById(scale).classList.remove("blackKey-active");
          audio[scale] = false;
        }
      }
    });
  }

}

//ピアノの音を流す関数
function play(scale){
  let file = "src/audio/" + scale + "." + "mp3";
  
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