 //variables########################################################
var db = firebase.database().ref();



function newUserData(uid,email,name,bool_resetFields){
  //checks if user exists, else if it doesnt, create the users
  //has a bool option to reset the users data to default values

  var currDate = getCurrDate();
  //default userField
  var userFields = {
            "email": email,
            "difficulty": "easy",
            "name": name,
            "count": 0,
            "loginDate": currDate,
            "accountCreationDate": currDate
  }

var userdb = db.child("users/"+uid);
  //if the uid doesnt exist, then create one
  userdb.once('value').then(function(snapshot) {
    if(snapshot.exists()&& bool_resetFields == false){
      console.log("user exists: " + snapshot.val().email);
    }else{
      userdb.set(userFields);
        console.log("does not exists, but created");
    }
  });
}

function setDifficultyData(uid, string_difficulty){
    //ADD LOADING DIV HERE
    loadingBarOn();
    var userdb = db.child("users/"+uid);
    userdb.update({
      //turn off loading div
      "difficulty": string_difficulty
    });

    var userdb = db.child("users/"+uid+"/difficulty");
    userdb.once('value').then(function(snapshot){
      if(snapshot.exists()){
        var difficulty = snapshot.val();
        if(difficulty == string_difficulty){
          loadingBarOff();
        }
      }else{
        //error
      }

    });
}

function updatePomoCountData(uid,int_amount){
  var userdb = db.child("users/"+uid);
      userdb.update({
        "count": int_amount
      });
}

function incrementPomoCountData(uid,incrementAmount){

  var userdb = db.child("users/"+uid);
  var userCountdb = db.child("users/"+uid+"/count");
  userCountdb.once('value').then(function(snapshot){
    if(snapshot.exists()){
      var firebase_pomoCount = snapshot.val();
        var newCount = firebase_pomoCount + incrementAmount;
        updatePomoCountData(uid,newCount);


    }else{
      //error
    }

  });


}

function setLastTimeLoginData(uid, array_date){
    //set the last time that the user has logged in
    var userdb = db.child("users/"+uid);
    userdb.update({
      "loginDate": array_date
    });

}



// Return does not work since it is asyncronous
// function getDifficultyData(uid){
//   var userdb = db.child("users/"+uid+"/difficulty");
//   userdb.once('value').then(function(snapshot){
//     if(snapshot.exists()){
//       var difficulty = snapshot.val();
//     }else{
//       //error
//     }
//
//   });
// }

//generic functions
