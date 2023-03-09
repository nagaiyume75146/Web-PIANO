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

let presskey = {};
let audio = {};

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

document.onkeydown = function(event) {
  const scale = scale_Array[event.key];
  if(presskey[scale]!=true) {
    presskey[scale] = true;
    play(scale);

    if(scale.length==2) {
      document.getElementById(scale).classList.add("whiteKey-active");
    }
    else {
      document.getElementById(scale).classList.add("blackKey-active");
    }
  }
}

document.onkeyup = function(event) {
  const scale = scale_Array[event.key];
  if(presskey[scale]) {
    presskey[scale] = false;
    audio[scale] = false;

    if(scale.length==2) {
      document.getElementById(scale).classList.remove("whiteKey-active");
    }
    else {
      document.getElementById(scale).classList.remove("blackKey-active");
    }
  }
}

//ピアノの音を流す関数
function play(scale){
  let file = "src/audio/" + scale + "." + "mp3";
  
  let audio = new Audio(file);
  audio.volume = 50 * 0.01;
  audio.play()
}

//ピアノの音を止める関数
function pause(scala){
  audio.pause()
  audio.currentTime = 0;
}