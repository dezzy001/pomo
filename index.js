firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("create_div").style.display = "none";
    document.getElementById("settings_div").style.display = "none";

    document.getElementById("logout_ele").style.display ="block";
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      // document.getElementById("user_para").innerHTML = "Welcome " + email_id;
      document.getElementById("welcome_ele").style.display ="block";
      document.getElementById("welcome_ele").innerHTML= email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("create_div").style.display = "none";
    document.getElementById("settings_div").style.display = "none";
    document.getElementById("logout_ele").style.display ="none";

    document.getElementById("welcome_ele").style.display ="none";
  }
});

function create_div(){
  document.getElementById("create_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";
}
function back(){
  document.getElementById("create_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
}


function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function create(){
  var userEmail = document.getElementById("email_field_create").value;
  var userPass = document.getElementById("password_field_create").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

//for testing only###############################################
function skip(){
  //test email
  var userEmail = "dezzy001@gmail.com";
  var userPass = "qwerty123";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function logout(){
  stopTimer();

  firebase.auth().signOut();

}
