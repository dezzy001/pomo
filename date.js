
//CHECKING THE DATES
CHECK_DATE_INTERVAL = 4500; // check if the day has changed every n seconds
var DAY_INDEX = 0;
var MONTH_INDEX = 1;
var YEAR_INDEX = 2;

// checking the date functions
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

function updateDate(userLastLoginDatedb,uid){
  var todaysDate = getCurrDate();
  userLastLoginDatedb.once('value').then(function(snapshot){
    if(snapshot.exists()){
      var firebase_date = snapshot.val();
      var sameDate = compareDate(firebase_date);
      if(sameDate == true){
        //if the date is still the same as user last log in, then continue as normal
      }else{
        //else reset the pomo count to 0
        updatePomoCountData(uid,0);
      }
      // update last time logged in date
      setLastTimeLoginData(uid, todaysDate);

    }else{
      //error
    }

  });
}
