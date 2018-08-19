 //variables########################################################
var db = firebase.database().ref();


function newUserData(uid,email,name){
var userdb = db.child("users/"+uid);
  //if the uid doesnt exist, then create one
  userdb.once('value').then(function(snapshot) {
    if(snapshot.exists()){
      console.log("user exists: " + snapshot.val().email);
    }else{
      userdb.set(
        {
          "email": email,
          "difficulty": "easy",
          "name": name
        });
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
