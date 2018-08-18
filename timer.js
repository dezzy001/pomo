

    //global variables
    var display = document.getElementById('timerDisplay');
    var timerButton = document.getElementById('timerButton');
    var timerStopButton = document.getElementById('timerStopButton');
    var timerResetButton = document.getElementById('timerResetButton');
    var inputTimer = document.getElementById('inputTimer');
    var clicked = false;

    //constants
    var string_ready = "READY TO START!";
    var string_fin = "FINNISHED";
    var string_restart = "RESTARTED";
    var string_stop = "STOPPED";

    // var username = document.getElementById('username');
    // var dbUsername = firebase.database().ref().child('users');
    // dbUsername.on('value', snap => username.innerText = "beta v0.1");


    //user

    var t = function(){}
    //initial conditions
    init();


    //Clicking events---------------------------------
    timerButton.addEventListener("click", function(){
      startTimer(timerButton);
    });
    timerStopButton.addEventListener("click", function(){
      stopTimer(timerButton);
    });

    timerResetButton.addEventListener("click",function(){
      resetTimer();
    });







    //generic functions!!----------------------------------------
    //change text to string1 then 2 second later, changes it to string2
    function changeText(string1,string2){
      display.innerHTML=string1;
      setTimeout(function(){
        display.innerHTML= string2;
      }, 2000);
    }


    //timer functions------------------------------------
    function init(){
      timerStopButton.disabled = true;
      timerResetButton.disabled = true;
    }

    function startTimer(timerButton){
      //code commented below is when you have input box
      // if(inputTimer.value == ""){
      //   display.innerHTML = "ENTER TIME";
      // }else
      if(!clicked){

        display.innerHTML = "STARTED";
        clicked = true;
        //timerButton.textContent = 'Study';
        timerButton.disabled = true;
        timer();
        timerStopButton.disabled = false;
        timerResetButton.disabled = false;
      }

    }

    function stopTimer(){
      clicked = false;
      timerButton.disabled = false;
      timerStopButton.disabled = true;
      timerResetButton.disabled = true;
      clearInterval(t);
      changeText(string_stop,string_ready);
    }

    function endTimer(){
      clicked = false;
      timerButton.disabled = false;
      timerStopButton.disabled = true;
      timerResetButton.disabled = true;
      clearInterval(t);
      changeText(string_fin,string_ready);
      beep();

    }

    function resetTimer(){
      clicked = false;
      display.innerHTML = string_restart;
      timerButton.disabled = true;
      timerStopButton.disabled = false;
      timerResetButton.disabled = false;
      clearInterval(t);
      timer();
    }

    //function which controls the actual logic of the timer (input as minutes)
    function timer(){

        //collect input from somewhere
        // var min = inputTimer.value;

        var min = 20;//test with constant value

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
              endTimer();
            }
        }, 1000);
    }
