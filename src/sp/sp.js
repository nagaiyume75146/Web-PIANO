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

alert("画面を固定してください")

// ロードしたときに画面を合わせる
window.addEventListener("load",function () {
  const keyboard = document.getElementsByClassName("keyboard")[0];
  root.style.setProperty("--height", height);
  
  const root = document.querySelector(':root');

  const bottom = document.getElementsByClassName("bottom")[0];
  

  const height = window.innerHeight + "px";
  root.style.setProperty("--height", height);
})

let touchkey = {}; // タッチしたキーを保存する配列
let audio = {}; // 音を保存する配列

const whiteKey = document.querySelectorAll(".whiteKey");

// 白鍵をタッチしたときの関数
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

// 白鍵から離れたときの関数
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

// 黒鍵をタッチしたときの関数
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

// 黒鍵から離れたときの関数
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

//ピアノの音を流す関数
function play(scale){
  let file = "src/audio/" + scale + "." + "mp3";
  
  audio[scale] = new Audio(file);
  audio[scale].volume = 50 * 0.01;
  audio[scale].play()
}