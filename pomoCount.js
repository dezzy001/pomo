var pomoCount = document.getElementById("pomoCount");
var string_pomoCountLabel1 = "Daily Goal: ";

//the daily goal to reach (constant for now)
var string_pomoCountGoal = 9;

var DAY_INDEX = 0;
var MONTH_INDEX = 1;
var YEAR_INDEX = 2;

function getCurrDate(){
  //ruetns the current date in a special array format [day,month,yaer]
  var currDate = new Date();
  var day = currDate.getDate();
  var month = currDate.getMonth() + 1;//january starts at 0
  var year = currDate.getFullYear();
  return [day,month,year];
}

function compareDate(lastLoginDate){
  //compares todays date with the users last logged in date as an array [day,month,year]
  //if its the same then return true, else false
  var today = new Date();
  var todayDay = today.getDate();
  var todayMonth = today.getMonth()+1;//january starts at 0
  var todayYear = today.getFullYear();

  if(todayDay==lastLoginDate[DAY_INDEX] && todayMonth==lastLoginDate[MONTH_INDEX] && todayYear==lastLoginDate[YEAR_INDEX]){
    return true;
  }else{
    return false;
  }
}




// Visual display functions ############################################

//circular progress Bar
var counter = document.getElementById('counter').getContext('2d');
var counterShadow = document.getElementById('counterShadow').getContext('2d');
var pointToFill = 4.72;  //Point from where you want to fill the circle
var cw = counter.canvas.width;  //Return canvas width
var ch = counter.canvas.height; //Return canvas height
var diff;   // find the different between current value (startPoint) and trageted value (100)
//these are global variables which point to the start and end of the progress bar in %
var startPoint = 0;
var endPoint = 0;
var pomoCountProgressSpeed = 35;//speed in ms of how fast the circle progresses

function fillCounter(pomoCountString){
  if(counter == null){
    clearTimeout(pomoProgressBar);
    alert("error: counter is null");
  }else{

    diff = ((startPoint/100) * Math.PI*2*10);

    counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
    counter.lineWidth = 15;     // size of stroke
    counter.fillStyle = 'grey';     // color that you want to fill in counter/circle
    counter.strokeStyle = 'grey';    // Stroke Color#F5E0A9
    counter.textAlign = 'center';
    counter.font = "25px monospace";    //set font size and face

    counter.fillText(pomoCountString,100,110);       //fillText(text,x,y);

    counter.beginPath();
    counter.arc(100,100,90,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)
    counter.stroke();   // to fill stroke

    // now add condition

    if(startPoint >= endPoint)
    {
        clearTimeout(pomoProgressBar);     //fill is a variable that call the function fillcounter()
    }
    startPoint++;
  }
}

function fillCounterShadow(){
  //coutners shadow i.e filled in circle underneath the counter
  counterShadow.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
  counterShadow.lineWidth = 15;     // size of stroke
  counterShadow.fillStyle = 'grey';     // color that you want to fill in counter/circle
  counterShadow.strokeStyle = '#f2f2f2';    // Stroke Color#F5E0A9
  counterShadow.textAlign = 'center';
  counterShadow.font = "25px monospace";    //set font size and face
  counterShadow.beginPath();
  counterShadow.arc(100,100,90,0,2*Math.PI);
  counterShadow.stroke();
}


function pomoCountInPercentage(value){
  //value over the total goal
  return 100*value/string_pomoCountGoal;
}

function getPomoCountString(int_currCount){
  return int_currCount + "/" + string_pomoCountGoal;
}

function displayCount(int_currCount){
  //display the count onto the pomo count div
  pomoCount.innerHTML =  string_pomoCountLabel1 ;//+ getPomoCountString(int_currCount);
}
