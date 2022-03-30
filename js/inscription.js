let test_If_Valid_UsrID = true;  //Use to transmit if the usrID in the checking usrID is valid to the signing up process

function signUpPage(){
  $(document).ready(function () {

    //Usr check part
    $("body .form .pseudo #pseudo").remove();
    $("body .form .pseudo ").append("<input type='text' onchange='checkUsername()' id='pseudo'>")
    
    //Bottom part
    $("body .footer #login-footer").remove();
    $("body .footer #signup-footer").remove();
    $("body .footer").prepend("<a href='#' id='login-footer' onclick='signUp()'>Envoyer</a>");
  });
};

function logIn () {
  let usrID = $("body .form .pseudo #pseudo").val();
  let usrPassword = $("body .form .mdp #mdp").val();
  $.ajax({
      method: "POST",
      datatype: "json",
      url: "../php/logIn.php",
      data: {
          "usrID": usrID,
          "usrPassword": usrPassword
      }
  }).done(function (e) {
      if(e == 1){
          window.location = "index.html";
      }else{
          $("body .form .pseudo #pseudo, body .form .mdp #mdp").css("background", "red");
      }
  }).fail(function (e) {
      console.log(e);
  });
}

function checkUsername() {
  let usrID = $("body .form .pseudo #pseudo").val();
  $.ajax({
      method: "POST",
      datatype: "json",
      url: "../php/checkUsername.php",
      data: {
          "usrID": usrID
      }
  }).done(function (e) {
      if(e == 1){
          test_If_Valid_UsrID = true;
          $("body .form .pseudo #pseudo").css("background", "lightgreen");
      }else{
          test_If_Valid_UsrID = false;
          $("body .form .pseudo #pseudo").css("background", "red");
      }
  }).fail(function (e) {
      console.log(e);
  });
}

function signUp() {
  let usrID = $("body .form .pseudo #pseudo").val();
  let usrPassword = $("body .form .mdp #mdp").val();
  $.ajax({
      method: "POST",
      datatype: "json",
      url: "../php/signUp.php",
      data: {
          "usrID": usrID,
          "usrPassword": usrPassword,
          "testValidUsrID" : test_If_Valid_UsrID
      }
  }).done(function (e) {
      if(e == 1){
          window.location = "index.html";
      }else{
          $("body .form .pseudo #pseudo, body .form .mdp #mdp").css("background", "red");
      }
  }).fail(function (e) {
      console.log(e);
  });
}