//variables

var info_div = document.getElementById('info_div');
var easyButton = document.getElementById('easyButton');
var mediumButton = document.getElementById('mediumButton');
var hardButton = document.getElementById('hardButton');
var loaderDiv = document.getElementById('loader_div');

easyButton.addEventListener("click",function(){
  info_div.style.borderColor = "rgba(33, 201, 0, 0.5)";
});
mediumButton.addEventListener("click",function(){
  info_div.style.borderColor = "rgba(255, 144, 0, 0.5)";
});
hardButton.addEventListener("click",function(){
  info_div.style.borderColor = "rgba(230, 0, 0, 0.7)";
});


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
