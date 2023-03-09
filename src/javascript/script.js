"use strict"

let audio;

//---------------------------------------------------

Push_keyboard()

//---------------------------------------------------

//鍵盤を押す関数
function Push_keyboard(){

  const scalaName_Array = [
    ["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7","C8"],
    ["B♭0","D♭1","E♭1","G♭1","A♭1","B♭1","D♭2","E♭2","G♭2","A♭2","B♭2","D♭3","E♭3","G♭3","A♭3","B♭3","D♭4","E♭4","G♭4","A♭4","B♭4","D♭5","E♭5","G♭5","A♭5","B♭5","D♭6","E♭6","G♭6","A♭6","B♭6","D♭7","E♭7","G♭7","A♭7","B♭7"]
  ];

  const keyName_Array = {
    "h1" : "A0",
    "j1" : "B0",
    "a2" : "C1",
    "s2" : "D1",
    "d2" : "E1",
    "f2" : "F1",
    "g2" : "G1",
    "h2" : "A1",
    "j2" : "B1",
    "a3" : "C2",
    "s3" : "D2",
    "d3" : "E2",
    "f3" : "F2",
    "g3" : "G2",
    "h3" : "A2",
    "j3" : "B2",
    "a4" : "C3",
    "s4" : "D3",
    "d4" : "E3",
    "f4" : "F3",
    "g4" : "G3",
    "h4" : "A3",
    "j4" : "B3",
    "a5" : "C4",
    "s5" : "D4",
    "d5" : "E4",
    "f5" : "F4",
    "g5" : "G4",
    "h5" : "A4",
    "j5" : "B4",
    "a6" : "C5",
    "s6" : "D5",
    "d6" : "E5",
    "f6" : "F5",
    "g6" : "G5",
    "h6" : "A5",
    "j6" : "B5",
    "a7" : "C6",
    "s7" : "D6",
    "d7" : "E6",
    "f7" : "F6",
    "g7" : "G6",
    "h7" : "A6",
    "j7" : "B6",
    "a8" : "C7",
    "s8" : "D7",
    "d8" : "E7",
    "f8" : "F7",
    "g8" : "G7",
    "h8" : "A7",
    "j8" : "B7",
    "a9" : "C8",

    "u1" : "B♭0",
    "w2" : "D♭1",
    "e2" : "E♭1",
    "t2" : "G♭1",
    "y2" : "A♭1",
    "u2" : "B♭1",
    "w3" : "D♭2",
    "e3" : "E♭2",
    "t3" : "G♭2",
    "y3" : "A♭2",
    "u3" : "B♭2",
    "w4" : "D♭3",
    "e4" : "E♭3",
    "t4" : "G♭3",
    "y4" : "A♭3",
    "u4" : "B♭3",
    "w5" : "D♭4",
    "e5" : "E♭4",
    "t5" : "G♭4",
    "y5" : "A♭4",
    "u5" : "B♭4",
    "w6" : "D♭5",
    "e6" : "E♭5",
    "t6" : "G♭5",
    "y6" : "A♭5",
    "u6" : "B♭5",
    "w7" : "D♭6",
    "e7" : "E♭6",
    "t7" : "G♭6",
    "y7" : "A♭6",
    "u7" : "B♭6",
    "w8" : "D♭7",
    "e8" : "E♭7",
    "t8" : "G♭7",
    "y8" : "A♭7",
    "u8" : "B♭7",
  };

  let alphabetKey;
  let numberKey;

  let scala;

  document.onkeydown = function(event){
    if( /^[asdfghjwetyu]/.test(event.key) && !alphabetKey ){
      alphabetKey = event.key;
    }else
    if( /^[0-9]/.test(event.key) && !numberKey ){
      numberKey = event.key;
    }

    if( alphabetKey&&numberKey && !scala ){
      let key = alphabetKey + numberKey;
      scala = keyName_Array[key];

      if( scala.includes("♭") ){
        document.getElementById(scala).classList.add("blackKey-active");
        Play_pianoSound(scala);
      }else{
        document.getElementById(scala).classList.add("whiteKey-active");
        Play_pianoSound(scala);
      }
    }
  }
  document.onkeyup = function(event){
    if( /^[asdfghjwetyu]/.test(event.key) ){
      alphabetKey = false;
    }else
    if( /^[0-9]/.test(event.key) ){
      numberKey = false;
    }

    if( scala ){
      if( scala.includes("♭") ){
        document.getElementById(scala).classList.remove("blackKey-active");
        Pause_pianoSound(scala);
      }else{
        document.getElementById(scala).classList.remove("whiteKey-active");
        Pause_pianoSound(scala);
      }
    }

    scala = false;
  }
}

//ピアノの音を流す関数
function Play_pianoSound(scala){

  let volume = 50;

  let file;
  
  file = "src/audio/" + scala + "." + "mp3";
  audio = new Audio(file);

  audio.volume = volume * 0.01;
  audio.play()
}

//ピアノの音を止める関数
function Pause_pianoSound(scala){
  audio.pause()
  audio.currentTime = 0;
}