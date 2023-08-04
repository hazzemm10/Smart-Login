var userName = document.getElementById('userName');
var logout = document.getElementById('Logout');
var username = localStorage.getItem('username');


userName.innerHTML= ` ${username}`

logout.addEventListener('click', function(){
    localStorage.removeItem('username');
    window.location.href ="index.html";
    
})