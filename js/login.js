var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var message = document.getElementById("message");
var login = document.getElementById('login')


var userArr = [];
userArr = JSON.parse(localStorage.getItem('user'));


login.addEventListener('click', function () {
    if(signinEmail.value == '' || signinPassword.value == '')
        message.innerHTML = "All inputs is required";
    else
        check();   
}
) 

function check(){
    for(var i=0;i<=userArr.length;i++){
        if(signinEmail.value == userArr[i].Email && signinPassword.value == userArr[i].Password){
            var x = userArr[i].Name ;
            localStorage.setItem("username", x)
           
            window.location.href ="index(3).html";
            break;
            
        }
        else{
            message.innerHTML = "All inputs must be Right"
        }
    }
}