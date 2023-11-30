var maskOn = document.getElementById("maskOn"); 

function playMaskOn() { 
    showTime.pause();
    maskOn.play();
} 

function pauseMaskOn() { 
  maskOn.pause();
} 

var showTime = document.getElementById("showTime"); 

function playShowTime() { 
    maskOn.pause();
    showTime.play();
} 

function pauseShowTime() { 
  showTime.pause(); 
} 