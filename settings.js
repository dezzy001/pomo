//Constant variables#####################
var EASY = "easy";
var MED = "medium";
var HARD = "hard";

//varibales ###########################
var info_div = document.getElementById('info_div');
var easyButton = document.getElementById('easyButton');
var mediumButton = document.getElementById('mediumButton');
var hardButton = document.getElementById('hardButton');
var loaderDiv = document.getElementById('loader_div');

//info variables
var descriptionTitle = document.getElementById('descriptionTitle');
var description = document.getElementById('description');

//generic function
function inputFieldEnter(string_buttonid){
  //clicks a button when you press enter when focused in a particular textbox
  if (event.keyCode === 13) {
      document.getElementById(string_buttonid).click();
  }

}


function settingsOn(){
  document.getElementById("user_div").style.display = "none";
  document.getElementById("settings_div").style.display = "block";
}

function settingsOff(){
  document.getElementById("user_div").style.display = "block";
  document.getElementById("settings_div").style.display = "none";
}


function loadingBarOn(){
  loaderDiv.style.display = "inline-block";
}

function loadingBarOff(){
  loaderDiv.style.display = "none";
}

function displayInfo(difficulty){
  if(difficulty == EASY){
    descriptionTitle.innerHTML = difficultySettings.easy.descriptionTitle;
    description.innerHTML = difficultySettings.easy.description;
  }else if(difficulty == MED){
    descriptionTitle.innerHTML = difficultySettings.medium.descriptionTitle;
    description.innerHTML = difficultySettings.medium.description;
  }else if(difficulty == HARD){
    descriptionTitle.innerHTML = difficultySettings.hard.descriptionTitle;
    description.innerHTML = difficultySettings.hard.description;
  }
}

//aesthetic functions dynamic CSS USING JAVASCRIPT ###############################################
//changes the button colour based on user selected colour [through firebase or user click]
function difficultyFormat(difficulty){
  defaultDifficultyButtons();
  if(difficulty == EASY){
    easyButton.style.border = "2px solid rgba(33, 201, 0, 0.8)";
    easyButton.style.color = "rgba(33, 201, 0, 0.8)";
    info_div.style.borderColor = "rgba(33, 201, 0, 0.5)";
  }else if(difficulty == MED){
    mediumButton.style.border = "2px solid rgba(255, 144, 0, 0.8)";
    mediumButton.style.color = "rgba(255, 144, 0, 0.8)";
    info_div.style.borderColor = "rgba(255, 144, 0, 0.5)";
  }else if(difficulty == HARD){
    hardButton.style.border = "2px solid rgba(230, 0, 0, 0.7)";
    hardButton.style.color = "rgba(230, 0, 0, 0.7)";
    info_div.style.borderColor = "rgba(230, 0, 0, 0.7)";
  }
}
function defaultDifficultyButtons(){
  //makes all the buttons to the standard greyed buttons
  //standard colours
  var standardColor = "rgba(0, 0, 0 ,0.6)";
  var standardBorder= "2px solid rgb(209, 209, 209)";
  easyButton.style.color = standardColor;
  easyButton.style.border = standardBorder;

  mediumButton.style.color = standardColor;
  mediumButton.style.border = standardBorder;

  hardButton.style.color = standardColor;
  hardButton.style.border = standardBorder;

}
