//variables

var info_div = document.getElementById('info_div');
var easyButton = document.getElementById('easyButton');
var mediumButton = document.getElementById('mediumButton');
var hardButton = document.getElementById('hardButton');

easyButton.addEventListener("click",function(){
  info_div.style.borderColor = "#21c900";
});
mediumButton.addEventListener("click",function(){
  info_div.style.borderColor = "#ff9000";
});
hardButton.addEventListener("click",function(){
  info_div.style.borderColor = "#c90000";
});

function settingsOn(){

  document.getElementById("user_div").style.display = "none";
  document.getElementById("settings_div").style.display = "block";

}

function settingsOff(){

  document.getElementById("user_div").style.display = "block";
  document.getElementById("settings_div").style.display = "none";

}
