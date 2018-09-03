


//global variables
var timerBox = document.getElementById('timerBox');
var display = document.getElementById('timerDisplay');
var timerButton = document.getElementById('timerButton');
var timerStopButton = document.getElementById('timerStopButton');
var timerResetButton = document.getElementById('timerResetButton');
var timerSettingButton = document.getElementById('timerSettingButton');
var inputTimer = document.getElementById('inputTimer');
var clicked = false; // check if you have clicked the start button
var loading = true; // still getting data from firebase so disable all buttons

var currentDifficulty;
//global objects
var difficultySettings = {
  easy: {
    min: 15,
    break: 5,
    descriptionTitle: "Easy",
    description: "15 minutes"
  },

  medium:{
    min: 20,
    break: 5,
    descriptionTitle: "Medium",
    description: "20 minutes"
  },

  hard:{
    min: 25,
    break: 5,
    descriptionTitle: "Hard",
    description: "25 minutes"
  }

}

//constants
var string_ready = "READY TO START!";
var string_fin = "FINNISHED";
var string_restart = "RESTARTED";
var string_stop = "STOPPED";
var string_loading = "LOADING..."
var string_break = "BREAK TIME!"
//set interval function
var t = function(){}


//generic functions!!----------------------------------------
//change text to string1 then 2 second later, changes it to string2
function changeText(string1,string2){
  display.innerHTML=string1;
  setTimeout(function(){
    display.innerHTML= string2;
  }, 1000);
}


//timer functions------------------------------------


function startTimer(min){

  if(!clicked){

    display.innerHTML = "STARTED";
    clicked = true;
    timer(min,true);

  }

}

function stopTimer(){
  clicked = false;
  clearInterval(t);
  changeText(string_stop,string_ready);
}

//the timer has completed, play beep sound and start the break timer
function endTimer(){
  clicked = false;
  clearInterval(t);
  changeText(string_fin,string_ready);
  beep();
}


function resetTimer(min){
  // clicked = false;
  display.innerHTML = string_restart;
  clearInterval(t);
  timer(min,true);
}

function breakTimer(min){
  clearInterval(t);
  timer(min,false);
  changeText(string_fin,string_break);
  beep();
}



//function which controls the actual logic of the timer (input as minutes)
function timer(min,break_state){
    //collect input from somewhere
    // var min = inputTimer.value;
    // var min = 0.05;//test with constant value

    var sec = min*60 - 1;
    t = setInterval(function(){
      if(sec>59){
        display.innerHTML= Math.floor(sec/60)+1 +' minutes';
      }else if(sec > 9){
        display.innerHTML=sec+'s';
      }else{
        display.innerHTML= sec+'s';
      }
        sec--;
        if (sec < 0) {
          if(break_state == true){
            breakTimer(5);//if its a break, then do a 5 min timer
          }else{
            endTimer();//end the timer if break time is over
          }
        }
    }, 1000);
}

function changeTimerboxBorder(difficulty){
  //change colour of timer box border based on difficulty
  if(difficulty == EASY){
    timerBox.style.border = "2px solid rgba(33, 201, 0, 0.8)";
  }else if(difficulty == MED){
    timerBox.style.border = "2px solid rgba(255, 144, 0, 0.8)";
  }else if(difficulty == HARD){
    timerBox.style.border = "2px solid rgba(230, 0, 0, 0.7)";
  }
}
