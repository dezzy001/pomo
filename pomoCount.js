var pomoCount = document.getElementById("pomoCount");
var string_pomoCountLabel = "Today's PomoCount: ";

var DAY_INDEX = 0;
var MONTH_INDEX = 1;
var YEAR_INDEX = 2;

function getCurrDate(){
  //ruetns the current date in a special array format [day,month,yaer]
  var currDate = new Date();
  var day = currDate.getDate();
  var month = currDate.getMonth()+1;//january starts at 0
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

function displayCount(int_currCount){
  //display the count onto the pomo count div
  pomoCount.innerHTML =  string_pomoCountLabel + int_currCount;
}
