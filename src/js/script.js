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

let audio;
let key;

//---------------------------------------------------

Push_keyboard()

//---------------------------------------------------

//鍵盤を押す関数
function Push_keyboard(){

  const key_Array = {
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

  document.onkeydown = function(event){
    if(key != event.key){
      key = event.key;
      Play_pianoSound(key_Array[key]);
    }
  }

  document.onkeyup = function(event){
    if(key == event.key){
      key = false;
    }
  }
}

//ピアノの音を流す関数
function Play_pianoSound(scala){
  let file = "src/audio/" + scala + "." + "mp3";
  
  audio = new Audio(file);

  audio.volume = 50 * 0.01;
  audio.play()
}