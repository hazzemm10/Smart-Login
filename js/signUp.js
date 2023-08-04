var valid = document.getElementById("valid");
var userName = document.getElementById("Name");
var userEmail = document.getElementById("Email");
var userPassword = document.getElementById("Password");
var signup = document.getElementById('signup');


var registeration = [];

if (localStorage.getItem("user") != null) {
  userArr = JSON.parse(localStorage.getItem("user"));
} else {
  userArr = [];
}

signup.addEventListener("click", function(){
  add();
})
function add() {
  if (
    userName.value == "" ||
    userEmail.value == "" ||
    userPassword.value == ""
  ) {
    valid.innerHTML = `All inputs is required`;
  } else {
    var userObj = {
      Name: userName.value,
      Email: userEmail.value,
      Password: userPassword.value,
    };
    registeration.push(userObj);
    window.location.href ="index(2).html";
    // location.href ='../index(2).html';
    localStorage.setItem('user', JSON.stringify(registeration));
  }
}
